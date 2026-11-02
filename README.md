# searlopez.com

Source for [searlopez.com](https://searlopez.com), the personal portfolio of Searjasub Lopez. Static site built with [Astro](https://astro.build) and TypeScript, no UI framework, mobile first, with light and dark mode.

## Commands

```sh
npm install        # once
npm run dev        # http://localhost:4321
npm run build      # writes dist/
npm run preview    # serve dist/ locally
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/pages/` | Routes: home, resume, and one page per project. |
| `src/components/` | Page sections and shared UI. |
| `src/content/work/` | One Markdown file per project. |
| `src/data/` | Site details and structured resume data. |
| `src/styles/global.css` | Design tokens (Material Design 3 inspired) and shared styles. |
