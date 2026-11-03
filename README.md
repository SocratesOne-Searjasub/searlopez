# searlopez.com

Personal portfolio for Searjasub Lopez. Static site built with [Astro](https://astro.build), no UI framework, TypeScript, mobile first, light and dark mode.

## Layout

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, title, contact links, resume file name. Edit this first. |
| `src/content/work/*.md` | One file per project. Frontmatter feeds the home page cards and the page hero, the body is the write-up at `/work/<slug>`. |
| `src/content.config.ts` | Schema for the project files. |
| `src/assets/work/` | Project screenshots, optimized at build time. |
| `src/pages/work/[slug].astro` | Project page template with gallery, write-up, and previous and next links. |
| `src/data/resume.ts` | Structured resume shown on `/resume` and in the experience section. |
| `src/components/` | Header, Hero, Projects, Experience, Contact, Footer, Icon. |
| `src/styles/global.css` | Design tokens (Material Design 3 inspired) and shared components. |
| `resume/` | Source `.docx` of the resume. |
| `public/resume.pdf` | Generated from the `.docx` by `scripts/build-resume-pdf.sh`. |
| `deploy/Caddyfile` | Unused Caddy equivalent, kept in case the host moves off nginx. |
| `deploy/nginx-searlopez.conf` | The live nginx config (copy of /etc/nginx/sites-enabled/searlopez, certbot managed). |
| `scripts/deploy.sh` | `npm ci`, regenerate PDF, `npm run build`, reload nginx (the live server). |

## Commands

```sh
npm install        # once
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serve dist/ locally
scripts/deploy.sh  # full build and web server reload (run as root on the server)
```

## Adding or editing a project

Edit or add a Markdown file in `src/content/work/`. Required frontmatter: `name`, `role`, `status` (`live`, `building`, or `client`), `statusLabel`, `summary`, `highlights`, `stack`, `icon`, `tone`, `order`, `timeframe`. Optional: `url`, `urlLabel`, `company`, `featured`, `facts`, `links`, `screenshots` (paths relative to the file, for example `../../assets/work/name-desktop.png`). Quote any value that contains a comma. The body below the frontmatter is rendered as the write-up; use `##` headings for sections. Then run `scripts/deploy.sh`.

## Updating the resume

Replace `resume/Searjasub-Lopez-Resume.docx`, update the text in `src/data/resume.ts`, bump `resumeUpdated` in `src/data/site.ts`, then run `scripts/deploy.sh`.

## Style rules

No em dashes anywhere in copy. System font stack. Every color comes from a token in `global.css` so light and dark stay in sync.
