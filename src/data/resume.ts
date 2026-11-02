export interface ExperienceEntry {
  company: string;
  client?: string;
  role: string;
  note?: string;
  start: string;
  end: string;
  bullets: string[];
}

export const resume = {
  headline: "Senior Software Engineer",
  focus: "Full-Stack: TypeScript, React, Node.js, AWS, PostgreSQL",
  summary:
    "Senior full-stack engineer with nearly six years shipping fintech, banking, and lending systems in production, from React and TypeScript interfaces through Node.js and Java services to PostgreSQL. Modernized FLEX, the USDA application loan officers use to review and approve farm loans, from Spring Boot to AWS Lambda and REST, and now migrating a legacy JavaServer Faces system to a REST architecture. Outside that role, founded RightOffs, a fintech side project in production with its first paying customer, built end to end. Directs AI coding agents daily and owns features from design through production support.",
  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"] },
    { group: "Front end", items: ["React", "Next.js", "Angular", "HTML", "CSS"] },
    {
      group: "Back end",
      items: ["Node.js", "Express", "REST API and service design", "AWS Lambda", "API Gateway", "Spring Boot", "Plaid and Stripe webhooks"],
    },
    { group: "Data", items: ["PostgreSQL schema design and query optimization", "MySQL", "MongoDB"] },
    {
      group: "AI tooling",
      items: ["Claude Code and other coding agents for prototyping, implementation, debugging, and review", "Claude API in production"],
    },
    {
      group: "Practices",
      items: ["Docker", "Git and GitHub", "Unit and integration testing", "Automated test frameworks", "CI/CD", "Agile and SAFe"],
    },
  ],
  experience: [
    {
      company: "AttainX, Inc.",
      client: "USDA",
      role: "Senior AWS Developer",
      note: "Now Service Designer on VEHCS. Promoted from JEE Developer, Cloud Technology.",
      start: "Nov 2023",
      end: "Present",
      bullets: [
        "Modernized FLEX, the USDA Farm Loan Employee eXperience where loan officers review and approve or deny loans, migrating Java Spring Boot endpoints to AWS Lambda services and APIs behind a modern Angular front end.",
        "Since April 2026, decomposing VEHCS, a second USDA system, from legacy JavaServer Faces into a REST API architecture with independently deployable services.",
        "Implemented JWT session token management, remediating authentication and session-handling vulnerabilities in a federal application.",
        "Built and maintained automated testing frameworks across the FLEX platform, reducing deployment errors by 20%.",
        "Promoted to Senior AWS Developer in recognition of contributions to FLEX, a mission-critical USDA application.",
      ],
    },
    {
      company: "Socrates ONE, RightOffs",
      role: "Founder and CTO, sole engineer",
      note: "Side venture, built outside full-time work.",
      start: "Apr 2025",
      end: "Present",
      bullets: [
        "Sole engineer on a fintech SaaS live in production with its first paying customer: Next.js and React front end, Node.js and TypeScript API, PostgreSQL, deployed and operated end to end.",
        "Built secure ingestion and webhook handling for Plaid bank data and Stripe billing, with encrypted storage and secure authentication for sensitive financial records.",
        "Shipped an LLM pipeline on the Anthropic Claude API that categorizes transactions and extracts receipt data, so customer books stay current without manual entry.",
        "Work directly with users and a CPA launch partner to turn feedback into shipped product changes.",
      ],
    },
    {
      company: "FPS GOLD",
      role: "E-Banking Backend Developer",
      note: "Promoted from Development Intern.",
      start: "Mar 2021",
      end: "Oct 2023",
      bullets: [
        "Implemented backend caching that reduced load times by 80%.",
        "Designed a microservices architecture that cut data transfer time to third-party integrations by 30%.",
        "Partnered with two teams of five front-end developers to identify and resolve critical production issues.",
        "Automated endpoint testing with Postman across 150+ endpoints, cutting test cycle time by 75% and doubling coverage.",
      ],
    },
    {
      company: "VIA Motors",
      role: "Android Development Intern",
      start: "Jan 2021",
      end: "Mar 2021",
      bullets: [
        "Optimized a native Android app in Kotlin and XML and shipped new UI features with a cross-functional team.",
      ],
    },
  ] satisfies ExperienceEntry[],
  education: [
    {
      school: "Neumont College of Computer Science",
      degree: "Bachelor of Science, Computer Science",
      detail: "GPA 3.98 / 4.0",
      start: "2018",
      end: "2021",
    },
  ],
};
