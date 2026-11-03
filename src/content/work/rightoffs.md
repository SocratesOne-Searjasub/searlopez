---
name: RightOffs
role: Founder and sole engineer
status: live
statusLabel: Live, paying customers
url: https://rightoffs.com
urlLabel: rightoffs.com
summary: Tax-ready bookkeeping for freelancers, 1099 contractors, and small business owners. Connects bank accounts, learns each category once, and keeps a Schedule C ready profit and loss statement current all year.
highlights:
  - Plaid bank sync and Stripe billing with secure webhook handling and encrypted storage
  - Claude API pipeline that categorizes transactions and reads receipts
  - CPA-ready reports with categories aligned to Schedule C lines
stack: [Next.js, React, Node.js, TypeScript, PostgreSQL, Plaid, Stripe, Claude API, Firebase Auth, Android]
icon: receipt
tone: primary
order: 1
featured: true
timeframe: April 2025 to present
company: Socrates ONE LLC
facts:
  - label: "Status"
    value: "Live on web and Android, iPhone in development"
  - label: "Pricing"
    value: "Free plan, Pro at $14.99 a month"
  - label: "Customers"
    value: "Freelancers, 1099 contractors, and their CPAs"
links:
  - label: "Security page"
    href: https://rightoffs.com/security
  - label: "What's new"
    href: https://rightoffs.com/whats-new
  - label: "For CPAs"
    href: https://rightoffs.com/for-cpas
  - label: "Android app"
    href: https://rightoffs.com/download
screenshots:
  - src: ../../assets/work/rightoffs-desktop.png
    alt: "RightOffs home page on a desktop browser"
    kind: desktop
  - src: ../../assets/work/rightoffs-mobile.png
    alt: "RightOffs home page on a phone"
    kind: mobile
---

## The problem

My wife is a 1099 independent contractor, and every spring she dreaded tax season. Not because she was disorganized, but because nothing on the market fit her. The big accounting platforms were bloated and priced for accountants. Spreadsheets fell apart by March. Write-offs were not lost in April, they were lost all year, one business charge at a time, blending into statements nobody would reread.

She asked me to find something better. I could not, so I built it.

## What I built

RightOffs connects checking, savings, credit cards, PayPal, and Stripe through Plaid, pulls every transaction into one dashboard, and keeps a profit and loss statement current the whole year. Categorize a merchant once and the app remembers it, so future charges sort themselves. When tax season arrives the user exports a report whose categories already map to Schedule C lines, whether they file themselves or hand it to a CPA.

Everything from the first commit to production support is mine: the Next.js and React front end, the Node.js and TypeScript API, the PostgreSQL schema, the integrations, the billing, the deploy pipeline, and the on-call.

## How it works

- **Bank data** flows in through Plaid Link. RightOffs only ever uses the read-only Transactions product, so it can see activity but can never move money. Plaid access tokens are encrypted with AES-256 before they touch the database.
- **Billing** is handled entirely by Stripe Checkout and webhooks. Card numbers never pass through my servers, and the prices shown on the site come straight from Stripe so what you see is what you are charged.
- **Classification** uses a two-layer approach. Deterministic rules learned from the user's own past decisions run first. Anything unknown goes to a pipeline on the Claude API that suggests a category for the user to confirm.
- **Receipts** can be photographed on the spot. A vision model reads the merchant, amount, date, and category, shows a confidence indicator, and the Snap and Match feature finds the matching bank transaction, tip and rounding aware, or creates one prefilled from the receipt.
- **Sign-in** runs on Firebase Authentication with Google OAuth and email and password, plus optional TOTP two-factor authentication with encrypted backup codes.
- **Transport and storage** use TLS 1.3 in transit and AES-256 at rest, with encrypted automated backups kept offsite.

## Shipping cadence

RightOffs has shipped steadily since launch. Transaction templates and AI receipt scanning landed in March 2026, a blog in April, Snap and Match receipts in June, the Android app on Google Play in July, and a more generous free plan with receipt storage and report history in September. Each release is written up on the public changelog so customers and their accountants know what changed.

## Working with CPAs

The CPA partner program came from listening to the accountants who received the reports. They were spending billable hours recategorizing client spreadsheets into Schedule C format every year. Now a CPA can refer clients, receive polished reports in a consistent format, and earn a recurring 33.3% commission on each subscription. The reports export as PDF or CSV so they drop into whatever workflow the firm already uses.

## What I learned

Running a fintech product alone teaches you to respect boundaries. The most valuable architectural decision was deciding what RightOffs would never touch: bank credentials, card numbers, and the ability to move money. Keeping those out of my systems made the security story simple to explain and simple to defend, and it let me spend my evenings on features instead of compliance paperwork.
