---
name: Shelfmates
role: Founder and sole engineer
status: building
statusLabel: In testing
url: https://shelfmates.us
urlLabel: shelfmates.us
summary: Pick tonight's board game together. Shelfmates pools a friend group's shelves into one list, filters it by player count, time, and weight, and picks what to play. Built with React Native and Expo for iOS and Android, free, no ads, in private testing now.
highlights:
  - Shared group shelf built from BoardGameGeek data, showing who owns each copy
  - Filter by players, time, and weight, then random pick or vote on a shortlist
  - Game night scheduling with RSVPs and eight-character invite codes
stack: [React Native, Expo, TypeScript, iOS, Android, Node.js, PostgreSQL, BoardGameGeek API, Sign in with Apple, Sign in with Google]
icon: phone
tone: tertiary
order: 3
timeframe: 2026, launching soon
company: Socrates ONE LLC
facts:
  - label: "Status"
    value: "Private testing with our own game group"
  - label: "Platforms"
    value: "iOS and Android from one React Native codebase, no web app"
  - label: "Price"
    value: "Free, with an optional tip jar"
links:
  - label: "Support and FAQ"
    href: https://shelfmates.us/support
  - label: "Privacy policy"
    href: https://shelfmates.us/privacy
screenshots:
  - src: ../../assets/work/shelfmates-desktop.png
    alt: "Shelfmates landing page on a desktop browser"
    kind: desktop
  - src: ../../assets/work/shelfmates-mobile.png
    alt: "Shelfmates landing page on a phone"
    kind: mobile
---

## The problem

Game night in a group with a few collections has a predictable opening act: twenty minutes of arguing about what to play, usually ending with the same game as last time because nobody can remember what everyone owns, how many it seats, or how long it runs. Shelfmates exists to skip that act.

## What I built

Shelfmates is built for one friend group at a time. There are no feeds, no followers, no public profiles, and no ads.

- **Your shelf in seconds.** Search BoardGameGeek's catalog and add what you own. Player counts, play time, and weight come along for free.
- **One group shelf.** Everyone's games merge into a single list that shows who owns each copy, so you know whose bag to check.
- **Filter, then pick.** Set how many are coming, how long you have, and how heavy you want it. Tap once and let Shelfmates choose, or vote on a shortlist.
- **Plan the night.** Propose a date and collect RSVPs so the player count is known before you pick.
- **Invite with a code.** Start a group and share an eight-character invite code. No friend requests.
- **Free, with a tip jar.** Every feature is free for everyone. A tip unlocks nothing except a thank you badge.

## Architecture

The iOS and Android apps are one React Native codebase built with Expo, so a single TypeScript source ships to both stores and Expo's build and update services handle the native toolchains and store submissions. The apps talk to a TypeScript API on Node.js backed by PostgreSQL. Game metadata comes from BoardGameGeek and is refreshed on a schedule, so a correction upstream shows up in the app within about a week. Authentication is Sign in with Apple or Google only, which means the service never stores a password. The tip jar is an in-app purchase handled by the stores.

The data footprint is deliberately tiny: a display name, an email address, and the games, groups, RSVPs, and votes a person adds. No location, no contacts, no photos. Accounts can be deleted from inside the app and everything is removed immediately. The API will be served from api.shelfmates.us.

## Where it is

As of November 2026 the apps are in private testing with the game group that inspired them. The App Store and Google Play links will appear on the landing page the moment they are live. The marketing site, support page, and privacy policy are already published, along with a machine-readable summary so assistants can answer questions about the app accurately.

## Why it matters to me

Shelfmates is the smallest product in the Socrates ONE portfolio and the one with the strictest constraints: two app stores from one codebase, store review, offline-tolerant, and a privacy policy I would be happy to read as a user. It is a chance to prove the same end-to-end ownership I bring to fintech on a very different kind of product.
