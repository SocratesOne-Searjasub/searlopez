---
name: Socrates ONE
role: Founder and CTO
status: live
statusLabel: Company
url: https://socrates-one.us
urlLabel: socrates-one.us
summary: A Tennessee software company that builds straightforward products for overlooked problems. Home to RightOffs, My Homeschool Binder, and Shelfmates, all designed, built, and operated in house.
highlights:
  - Parent company for RightOffs, My Homeschool Binder, and Shelfmates
  - Simple design, fair pricing, and products operated end to end
stack: [Product strategy, Architecture, Operations, Next.js, Node.js, PostgreSQL]
icon: building
tone: secondary
order: 2
timeframe: April 2025 to present
company: Socrates ONE LLC
facts:
  - label: "Founded"
    value: "April 2025 in Knoxville, Tennessee"
  - label: "Team"
    value: "Two co-founders, one engineer"
  - label: "Products"
    value: "Three, one live fintech, one live web app, one mobile app in testing"
links:
  - label: "RightOffs"
    href: https://rightoffs.com
  - label: "My Homeschool Binder"
    href: https://myhomeschoolbinder.com
  - label: "Shelfmates"
    href: https://shelfmates.us
screenshots:
  - src: ../../assets/work/socrates-one-desktop.png
    alt: "Socrates ONE company site on a desktop browser"
    kind: desktop
  - src: ../../assets/work/socrates-one-mobile.png
    alt: "Socrates ONE company site on a phone"
    kind: mobile
---

## Why a company and not just a side project

After years building government and enterprise systems, I kept running into tools that should already exist but did not, usually because the people who needed them were not a big enough market for anyone to bother. Socrates ONE LLC is the vehicle for building those tools properly: registered, insured, with real billing, real support, and real privacy policies, so customers can trust a product even when the team behind it is small.

I co-founded it with Jorge Aponte, who holds an MBA and runs the financial strategy and business development side. I own everything technical, from product design and architecture through deployment and support.

## What the studio has shipped

- **RightOffs**, launched first, is tax-ready bookkeeping for self-employed people. It is live with paying customers on web and Android.
- **My Homeschool Binder** organizes homeschool worksheets, lets parents annotate PDFs by hand, and shares materials across co-ops. The web app is live and the mobile apps are next.
- **Shelfmates** pools a friend group's board game collections and picks what to play. The native iOS and Android apps are in private testing.

## How I run it

Each product is an independently deployable system with its own domain, database, and release cadence, but they share the same conventions: TypeScript end to end, PostgreSQL for anything that matters, a Node.js API in front of it, and a thin, fast front end. Shared infrastructure and billing patterns mean a new product starts from a known good baseline instead of from scratch.

A few principles show up in every product:

- **Privacy by default.** No ad SDKs, no third-party trackers, no selling data. Each product publishes exactly what it collects in plain language.
- **Fair pricing.** Free tiers that are genuinely useful, paid tiers that are cheaper than the incumbents, and prices that come straight from the billing system so nothing is hidden.
- **Support by a person.** Every product's support address reaches me or Jorge, usually within a couple of days.

## What it has taught me

Building and operating three products alongside a senior engineering job forces ruthless prioritization. I have learned to ship the smallest useful version, write the changelog as part of the release, and automate anything I would otherwise do twice. That discipline carries straight back into my day job.
