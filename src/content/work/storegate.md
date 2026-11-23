---
name: StoreGate
role: Sole developer
status: live
statusLabel: Personal tool
summary: A native Android app for parents that keeps the Google Play Store closed on a child's tablet during school hours and gives it back when school ends. The parent sets weekly school blocks behind a PIN. No root, no device owner setup, and no computer needed after the first install.
highlights:
  - Accessibility service scoped to Play Store window events sends the store to the home screen the moment it opens, and survives reboots
  - One idempotent reconcile step behind every trigger, from exact alarms and boot to clock changes and an hourly safety net
  - Schedule math in pure Kotlin, covered by JVM unit tests for lunch breaks, blocks past midnight, and daylight saving changes
stack: [Kotlin, Jetpack Compose, Material 3, AccessibilityService, Shizuku, WorkManager, AlarmManager, DataStore, Coroutines, JUnit, GitHub Actions]
icon: lock
logo: ../../assets/work/storegate-icon.svg
tone: tertiary
order: 6
timeframe: November 2026
facts:
  - label: "Platform"
    value: "Native Android, tablet first, Android 11 or newer"
  - label: "Distribution"
    value: "Sideloaded APK, no store listing"
  - label: "Data"
    value: "On device only. No backend, no accounts"
  - label: "Tests"
    value: "47 JVM unit tests"
screenshots:
  - src: ../../assets/work/storegate-desktop.png
    alt: "The StoreGate status screen on a landscape tablet, showing the Play Store closed, the blocker on with 3 closes today, and the next change: unlocks today at 3:00 PM"
    kind: desktop
  - src: ../../assets/work/storegate-mobile.png
    alt: "The StoreGate schedule screen on a phone, listing two Monday to Friday school blocks with on switches, edit and delete buttons"
    kind: mobile
---

## The problem

Google Family Link lets a parent set school time on a child's tablet, but it cannot block the Google Play Store. In practice that meant the kids could spend school hours browsing the store. I wanted a parent tool that closes the Play Store on a weekly schedule, with no root, no device owner provisioning, and no computer needed after the first setup.

## What I built

StoreGate is a small Android app that lives on the child's tablet.

- **Weekly school blocks.** Behind a PIN, the parent picks days of the week plus a start and end time. Two blocks on the same days leave a lunch break open, and a block whose end time is earlier than its start runs past midnight. The schedule applies the moment it is saved.
- **The store closes itself.** During a block, the Play Store is sent back to the home screen as soon as it comes to the front, with a short toast. If the store is already open when a block starts, it is closed too.
- **A status screen that tells the truth.** It shows whether the store is open or closed, why, when the next change happens, and how many times the blocker closed the store today.
- **Overrides that match how a parent thinks.** "Lock now" and "Unlock now" pause the schedule until the parent resumes it. "Unlock until next scheduled lock" lets the child install something and relocks on its own at the next block.
- **Alerts when something is off.** The parent is notified when a lock could not be applied, when the blocker is switched off, and when a clock or time zone change flips the lock.

## Two enforcement layers

The primary layer is an accessibility service. Its configuration limits it to window events from the Play Store package, and it reads nothing else on the screen. It needs no special setup beyond one switch in Accessibility settings, and it keeps working after a reboot.

The second layer is optional. With [Shizuku](https://shizuku.rikka.app/) running over Wireless debugging, StoreGate also disables the Play Store package as the shell user, so the icon disappears during school blocks. Shizuku stops on every reboot, which is exactly why it is the bonus and not the foundation: when the blocker is on, a Shizuku failure is logged quietly and the store still stays closed.

After every Shizuku toggle the result is checked from two sources, the package list through Shizuku and the system PackageManager. Success is reported only when both agree, so the status screen never shows a state that was merely intended.

## Architecture

Everything runs on the tablet. There is no server.

- **Schedule.** Pure Kotlin models and math. Blocks are expanded into concrete zoned intervals over a window from 2 days back to 8 days ahead, then overlapping and touching intervals are merged. That single code path handles lunch breaks, overnight blocks, weekends, and daylight saving changes, and a `decide()` function combines it with the parent override to produce the desired state, the reason, and the next alarm time.
- **Reconciler.** App launch, exact alarms, boot, clock changes, schedule saves, manual overrides, and an hourly WorkManager job all call the same `reconcile()`. It works out the desired state, re-arms the next alarm first so the next boundary still fires even if the toggle fails, and does nothing when the verified state already matches.
- **Scheduling, belt and braces.** An exact alarm for the next boundary, then work inside the broadcast receiver, then an expedited WorkManager job as a durable backup, then an hourly periodic job. The next boundary is always recomputed from the real clock, not from a stored timestamp.
- **Data.** Settings, schedule, and a history of the last 20 reconcile events live in DataStore Preferences. The parent PIN is salted and hashed with 20,000 rounds of SHA-256, and system backup is off.
- **UI.** Jetpack Compose with Material 3. Content is capped at 760 dp wide so cards do not stretch across a 10 inch tablet, and body text is a little larger than the Material defaults because a tablet is read at arm's length.

The reconciler depends on small interfaces with an injectable clock, so its whole flow is tested on the JVM with fakes. The suite has 47 unit tests, and a GitHub Actions workflow runs tests, lint, and a debug build on every push.

## Built for a determined child

- **PIN with escalating lockout.** Three free tries, then a 30 second wait that doubles up to 15 minutes.
- **Short parent sessions.** A session lasts 5 minutes and also ends when the app goes to the background.
- **Clock tampering is visible.** A child moving the clock looks exactly like a legitimate time change, so any time change that flips the lock raises a high priority "The clock changed" alert, and the status screen warns when automatic time is off.
- **Every user profile.** An optional mode locks the store for all profiles on the tablet, in case the child could switch to another one.

## Hard parts

- **One store launch produces several window events.** The blocker throttles itself to one bounce per 600 ms and counts a toast and a "closed today" increment once per 4 second episode.
- **Alert fatigue.** Fresh events such as an alarm, a boot, or a schedule save always alert on failure. Quiet retries alert once per failure episode, and the alert clears itself when the problem goes away.
- **Family Link suspends apps.** StoreGate has to be marked "Always allowed" in Family Link, otherwise it is suspended during school time and its alarms cannot run.
- **Samsung specifics.** "Put unused apps to sleep" can pause the blocker, and Samsung has no exported Wireless debugging screen, so the app falls back to opening Developer options.

## What it does not do

The blocker closes the store about half a second after it opens, so without Shizuku the child still sees the icon and a glimpse of the store. It does not block the Play Store website in a browser. A child who has the PIN, or access to Developer options and adb, can undo the lock. And it is a sideloaded personal tool with no release signing, so it is not ready for store distribution as it stands.
