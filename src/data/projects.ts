export type ProjectStatus = "live" | "building" | "client";

export interface Project {
  slug: string;
  name: string;
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  url?: string;
  urlLabel?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  icon: "receipt" | "building" | "phone" | "book" | "cloud";
  tone: "primary" | "secondary" | "tertiary";
}

export const projects: Project[] = [
  {
    slug: "rightoffs",
    name: "RightOffs",
    role: "Founder and sole engineer",
    status: "live",
    statusLabel: "Live, paying customers",
    url: "https://rightoffs.com",
    urlLabel: "rightoffs.com",
    summary:
      "Tax-ready bookkeeping for freelancers, 1099 contractors, and small business owners. Connects bank accounts and keeps a profit and loss statement current all year.",
    highlights: [
      "Plaid bank sync and Stripe billing with secure webhook handling and encrypted storage",
      "Claude API pipeline that categorizes transactions and extracts receipt data",
      "CPA-ready reports with categories aligned to Schedule C lines",
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Plaid", "Stripe", "Claude API"],
    icon: "receipt",
    tone: "primary",
  },
  {
    slug: "socrates-one",
    name: "Socrates ONE",
    role: "Founder and CTO",
    status: "live",
    statusLabel: "Company",
    url: "https://socrates-one.us",
    urlLabel: "socrates-one.us",
    summary:
      "A Tennessee software company that builds straightforward products for overlooked problems, starting with tax tools for self-employed people.",
    highlights: [
      "Parent company for RightOffs, Homeschool Binder, and Shelfmates",
      "Simple design, fair pricing, and products operated end to end",
    ],
    stack: ["Product", "Architecture", "Operations"],
    icon: "building",
    tone: "secondary",
  },
  {
    slug: "shelfmates",
    name: "Shelfmates",
    role: "Native mobile app, in development",
    status: "building",
    statusLabel: "In progress",
    urlLabel: "shelfmates.us",
    summary:
      "A native mobile app currently being built. More details, screenshots, and a public beta link will land here as the app takes shape.",
    highlights: [
      "Native iOS and Android clients backed by a TypeScript API",
      "API will be served from api.shelfmates.us",
    ],
    stack: ["Mobile", "TypeScript", "Node.js", "PostgreSQL"],
    icon: "phone",
    tone: "tertiary",
  },
  {
    slug: "homeschool-binder",
    name: "My Homeschool Binder",
    role: "Founder and sole engineer",
    status: "live",
    statusLabel: "Live",
    url: "https://myhomeschoolbinder.com",
    urlLabel: "myhomeschoolbinder.com",
    summary:
      "Every worksheet in one tidy binder. A web app for homeschool families to organize files into nested binders, mark up PDFs by hand, and keep a photo journal of the school year.",
    highlights: [
      "PDF annotation with pen, highlighter, shapes, and text, originals left untouched",
      "Invite-only co-ops for sharing materials with other families",
      "Camera scanning of paper pages into multi-page PDFs",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    icon: "book",
    tone: "primary",
  },
  {
    slug: "attainx-usda",
    name: "USDA loan systems at AttainX",
    role: "Senior AWS Developer",
    status: "client",
    statusLabel: "Federal client work",
    summary:
      "Modernized FLEX, the application USDA loan officers use to review and approve farm loans, from Spring Boot to AWS Lambda and REST. Now decomposing VEHCS from legacy JavaServer Faces into independently deployable services.",
    highlights: [
      "Migrated Java Spring Boot endpoints to AWS Lambda and API Gateway behind an Angular front end",
      "Implemented JWT session management, closing authentication vulnerabilities",
      "Automated testing frameworks that cut deployment errors by 20%",
    ],
    stack: ["AWS Lambda", "API Gateway", "Java", "Angular", "REST", "PostgreSQL"],
    icon: "cloud",
    tone: "secondary",
  },
];
