# searlopez.com

Personal portfolio for Searjasub Lopez. Static site built with [Astro](https://astro.build), no UI framework, TypeScript, mobile first, light and dark mode.

## Layout

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, title, contact links, resume file name. Edit this first. |
| `src/data/projects.ts` | Project cards on the home page. |
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

## Updating the resume

Replace `resume/Searjasub-Lopez-Resume.docx`, update the text in `src/data/resume.ts`, bump `resumeUpdated` in `src/data/site.ts`, then run `scripts/deploy.sh`.

## Style rules

No em dashes anywhere in copy. System font stack. Every color comes from a token in `global.css` so light and dark stay in sync.
