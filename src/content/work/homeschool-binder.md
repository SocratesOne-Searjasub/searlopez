---
name: My Homeschool Binder
role: Founder and sole engineer
status: live
statusLabel: Live
url: https://myhomeschoolbinder.com
urlLabel: myhomeschoolbinder.com
summary: Every worksheet in one tidy binder. A web app for homeschool families to organize files into nested binders, mark up PDFs by hand, keep a photo journal of the school year, and share materials with a co-op. Private by design.
highlights:
  - PDF annotation with pen, highlighter, shapes, and text, saved as vector overlays so the original is never touched
  - Invite-only co-ops for sharing files and a photo calendar with other families
  - Camera scanning of paper pages into multi-page PDFs and a Common Core math worksheet generator
stack: [React, TypeScript, Node.js, PostgreSQL, PDF rendering, Canvas]
icon: book
tone: primary
order: 4
timeframe: 2026 to present
company: Socrates ONE LLC
facts:
  - label: "Status"
    value: "Web app live, Android and iPhone apps next"
  - label: "Audience"
    value: "Homeschool parents and co-ops"
  - label: "Privacy"
    value: "No ads, no trackers, parent-managed accounts"
links:
  - label: "Full feature list"
    href: https://myhomeschoolbinder.com/features
  - label: "Open the web app"
    href: https://myhomeschoolbinder.com/app
  - label: "Privacy policy"
    href: https://myhomeschoolbinder.com/privacy
screenshots:
  - src: ../../assets/work/homeschool-binder-desktop.png
    alt: "My Homeschool Binder home page on a desktop browser"
    kind: desktop
  - src: ../../assets/work/homeschool-binder-mobile.png
    alt: "My Homeschool Binder home page on a phone"
    kind: mobile
---

## The problem

Homeschool families run on PDFs: curriculum downloads, printable worksheets, scanned workbook pages, co-op handouts. They end up scattered across email, a downloads folder, a printer tray, and a physical binder that never has the page you need. Parents wanted the binder, just one that lived on every device and did not require printing a worksheet to write on it.

## What I built

My Homeschool Binder works like the physical thing: binders hold subjects, subjects hold sections, sections hold worksheets, to any depth. On top of that structure I built the tools a teaching parent actually reaches for.

- **Hand annotation.** Pen with pressure, highlighter, partial eraser, straight lines, boxes, ovals, and typed text over any PDF, with undo and redo. Drawings save as vector overlays so the blank master is never altered, and any day's work exports as a flat, dated PDF.
- **Daily worksheets and schedules.** Mark a PDF as a reusable template and each day you open it creates a dated, editable copy. Set which weekdays it repeats, per binder or per sheet. A dashboard shows what is due today with a streak, and a month calendar marks each day done, missed, or scheduled.
- **Photo calendar.** A dated photo journal of the school year, up to ten photos per entry, browsable by month.
- **Family co-ops.** Share a folder tree and a photo calendar with other families through a six-character join code. Every member can upload and organize, and anyone can pull a shared file into their own child's binder.
- **A binder per child.** Each child gets a profile, color, and library. Parents switch between them or lock a tablet to one. Kids never need their own login.
- **Math worksheets.** Generate grade 1 to 3 practice sheets across more than 30 Common Core skills with a parent-gated answer key that always matches the sheet.
- **Scanning and search.** Capture paper pages with the camera into a single PDF. Search matches file names and indexed PDF text.

## Architecture

The web app is React and TypeScript in the browser with a Node.js API and PostgreSQL behind it. PDF pages render to canvas and annotations live in a separate vector layer keyed to the page, which is what makes the export, the undo history, and the untouched original possible. Everything is keyed to the parent account so one family's data never touches another's, and a full backup export is available at any time.

The mobile apps for Android, iPhone, and iPad are designed offline first: the library lives on the device, and an account is only needed to sync across devices or join a co-op.

## Privacy by design

This product is used around children, so the privacy posture is strict. No ads, no third-party advertising or tracking SDKs, no data selling. Accounts are created and managed by a parent or guardian, never by a child. A co-op is only ever visible to the families invited into it.

## What I learned

Building a serious PDF annotation editor in the browser was the hardest front-end work I have done. Pressure-sensitive strokes, a partial eraser on vector paths, and crisp output at every zoom level all had to work on a tablet at a kitchen table. Getting the overlay model right early paid for itself in every feature that followed.
