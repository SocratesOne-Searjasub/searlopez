---
name: USDA loan systems at AttainX
role: Senior AWS Developer
status: client
statusLabel: Federal client work
summary: Modernized FLEX, the application USDA loan officers use to review and approve farm loans, from Spring Boot to AWS Lambda and REST. Now decomposing VEHCS from legacy JavaServer Faces into independently deployable services.
highlights:
  - Migrated Java Spring Boot endpoints to AWS Lambda and API Gateway behind an Angular front end
  - Implemented JWT session management, closing authentication vulnerabilities
  - Automated testing frameworks that cut deployment errors by 20%
stack: [AWS Lambda, API Gateway, Java, Angular, REST, PostgreSQL, JWT, CI/CD, SAFe]
icon: cloud
tone: secondary
order: 5
timeframe: November 2023 to present
company: AttainX, Inc. for USDA
facts:
  - label: "Role"
    value: "Senior AWS Developer, now Service Designer on VEHCS"
  - label: "Systems"
    value: "FLEX and VEHCS"
  - label: "Team setting"
    value: "Federal program running SAFe"
---

## Context

AttainX is a federal contractor, and since November 2023 I have worked on its USDA engagement. The systems involved are mission critical: they are how the department's loan officers process farm loans for real farmers on real deadlines. The details of the government's internal workflows are not mine to publish, so this page describes the engineering work at the level I can share.

## FLEX

FLEX is the Farm Loan Employee eXperience, the application loan officers use to review a loan application and approve or deny it. When I joined, its back end was a Java Spring Boot monolith. My work was the modernization:

- **Migrated Spring Boot endpoints to AWS Lambda** behind API Gateway, service by service, keeping the application available throughout and preserving behavior that auditors depend on.
- **Put a modern Angular front end** in front of the new REST layer.
- **Implemented JWT session token management**, remediating authentication and session-handling vulnerabilities that had been flagged in the federal application.
- **Built and maintained automated testing frameworks** across the platform. Deployment errors fell by about 20% once regression coverage ran on every release.

That work led to my promotion from JEE Developer to Senior AWS Developer.

## VEHCS

Since April 2026 I have been working on VEHCS, a second USDA system built on legacy JavaServer Faces. The goal is to decompose it into a REST API architecture with independently deployable services. My current title on this effort is Service Designer: I define service boundaries, data contracts, and the migration sequence so that each piece can be cut over without a big-bang release.

## How I work on a federal program

- **Agile and SAFe** cadence with program increments, so architectural changes are planned against delivery commitments rather than slipped in.
- **Security first.** Every change on these systems goes through review against federal controls, which has made me fluent in explaining a design decision to a security assessor as well as to another engineer.
- **AI coding agents daily.** I use Claude Code and similar tools for prototyping, implementation, debugging, and review, inside the boundaries the program allows, and I bring the same practice to my own products.

## Why it matters

Modernizing a lending system that people's livelihoods depend on is different from greenfield work. You cannot pause the business, you cannot lose a record, and you cannot ship something a loan officer has to relearn under deadline pressure. Learning to make meaningful architectural change under those constraints is the most valuable experience I have, and it is the lens I bring to every system I build.
