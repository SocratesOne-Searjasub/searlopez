import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// One Markdown file per project in src/content/work. The frontmatter feeds the
// cards on the home page and the hero of each project page; the body is the
// long-form write-up rendered under it.
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      status: z.enum(["live", "building", "client"]),
      statusLabel: z.string(),
      url: z.url().optional(),
      urlLabel: z.string().optional(),
      summary: z.string(),
      highlights: z.array(z.string()),
      stack: z.array(z.string()),
      icon: z.enum(["receipt", "building", "phone", "book", "cloud"]),
      tone: z.enum(["primary", "secondary", "tertiary"]),
      order: z.number(),
      featured: z.boolean().default(false),
      timeframe: z.string(),
      company: z.string().optional(),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      screenshots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            kind: z.enum(["desktop", "mobile"]),
          }),
        )
        .default([]),
    }),
});

export const collections = { work };
