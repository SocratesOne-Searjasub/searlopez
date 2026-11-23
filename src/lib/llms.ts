// Plain-text versions of the site for AI assistants and crawlers, following the
// llms.txt convention (https://llmstxt.org). Everything here is generated from
// the same data the pages render, so it cannot drift from the site.
import { getCollection, type CollectionEntry } from "astro:content";
import { site } from "../data/site";
import { resume } from "../data/resume";

type Work = CollectionEntry<"work">;

const abs = (path: string) => new URL(path, site.url).href;

export async function getWork(): Promise<Work[]> {
  return (await getCollection("work")).sort((a, b) => a.data.order - b.data.order);
}

function intro(): string[] {
  return [
    `# ${site.name}`,
    "",
    `> ${site.title} based in ${site.location}. ${site.tagline}`,
    "",
    resume.summary,
    "",
  ];
}

function contact(): string[] {
  return [
    "## Contact",
    "",
    `- Email: ${site.email}`,
    `- LinkedIn: ${site.linkedin}`,
    `- GitHub: ${site.github}`,
    `- Website: ${site.url}`,
    `- Resume (PDF, updated ${site.resumeUpdated}): ${abs(site.resumePdf)}`,
    `- Location: ${site.location}`,
    "",
  ];
}

function skills(): string[] {
  return ["## Skills", "", ...resume.skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`), ""];
}

function experience(): string[] {
  const out = ["## Experience", ""];
  for (const e of resume.experience) {
    const company = "client" in e && e.client ? `${e.company} (client: ${e.client})` : e.company;
    out.push(`### ${e.role}, ${company}`, "", `${e.start} to ${e.end}`);
    if ("note" in e && e.note) out.push("", e.note);
    out.push("", ...e.bullets.map((b) => `- ${b}`));
    if ("work" in e && e.work) out.push("", `Project page: ${abs(`/work/${e.work}`)}`);
    out.push("");
  }
  return out;
}

function education(): string[] {
  return [
    "## Education",
    "",
    ...resume.education.map((e) => `- ${e.degree}, ${e.school}, ${e.start} to ${e.end}. ${e.detail}`),
    "",
  ];
}

// Project write-ups start their sections at h2. Push them down so they nest
// under the project's own h3 in the combined file.
const demote = (markdown: string) => markdown.replace(/^(#{2,4}) /gm, "##$1 ");

function project(entry: Work): string[] {
  const p = entry.data;
  const out = [
    `### ${p.name}`,
    "",
    p.summary,
    "",
    `- Page: ${abs(`/work/${entry.id}`)}`,
    `- Role: ${p.role}`,
    `- Status: ${p.statusLabel}`,
    `- Timeframe: ${p.timeframe}`,
  ];
  if (p.company) out.push(`- Company: ${p.company}`);
  if (p.url) out.push(`- Live site: ${p.url}`);
  out.push(`- Stack: ${p.stack.join(", ")}`);
  for (const f of p.facts) out.push(`- ${f.label}: ${f.value}`);
  for (const l of p.links) out.push(`- ${l.label}: ${l.href}`);
  out.push("", "Highlights:", "", ...p.highlights.map((h) => `- ${h}`), "");
  if (entry.body?.trim()) out.push(demote(entry.body.trim()), "");
  return out;
}

// /llms.txt: a short index that points at the pages and the full text.
export async function buildIndex(): Promise<string> {
  const work = await getWork();
  return [
    ...intro(),
    `Currently: ${resume.experience[0].role} at ${resume.experience[0].company.replace(/\.$/, "")}. Core stack: ${resume.focus.replace(/^Full-Stack: /, "")}.`,
    "",
    "## Pages",
    "",
    `- [Full profile as plain text](${abs("/llms-full.txt")}): everything on this site in one file, including resume, skills, and every project write-up`,
    `- [Home](${site.url}): overview, projects, and experience`,
    `- [Resume](${abs("/resume")}): work history, skills, and education`,
    `- [Resume PDF](${abs(site.resumePdf)}): downloadable copy, updated ${site.resumeUpdated}`,
    "",
    "## Projects",
    "",
    ...work.map((w) => `- [${w.data.name}](${abs(`/work/${w.id}`)}): ${w.data.role}. ${w.data.summary}`),
    "",
    ...contact(),
  ].join("\n");
}

// /llms-full.txt: the whole site as one Markdown document.
export async function buildFull(): Promise<string> {
  const work = await getWork();
  return [
    ...intro(),
    ...contact(),
    ...skills(),
    ...experience(),
    ...education(),
    "## Projects",
    "",
    ...work.flatMap(project),
  ].join("\n");
}

// schema.org Person for the JSON-LD block in the page head.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: `${site.firstName} Lopez`,
    jobTitle: site.title,
    description: resume.summary,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.linkedin, site.github],
    address: { "@type": "PostalAddress", addressLocality: "Portland", addressRegion: "TN", addressCountry: "US" },
    worksFor: resume.experience
      .filter((e) => e.end === "Present")
      .map((e) => ({ "@type": "Organization", name: e.company })),
    alumniOf: resume.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    knowsAbout: resume.skills
      .filter((s) => ["Languages", "Front end", "Back end", "Data"].includes(s.group))
      .flatMap((s) => s.items),
  };
}
