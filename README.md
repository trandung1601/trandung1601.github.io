# Tran Tien Dung — Portfolio

Personal portfolio site, built with **Angular 21** (standalone components,
signals, and the modern `@if` / `@for` control-flow syntax). This is a
component-based, data-driven rewrite of the original single-file static
`index.html`.

## Architecture

The page is composed of small, focused standalone components driven by typed
data — no content is hard-coded inside templates more than once.

```
src/
  index.html                     # document head: meta/OG tags, fonts, devicon CDN
  styles.css                     # global styles (ported verbatim from the original)
  main.ts                        # bootstrapApplication entry point
  app/
    app.ts / app.html            # root component composing every section
    models/portfolio.models.ts   # typed shapes for all content
    data/portfolio.data.ts       # the actual portfolio content (single source of truth)
    directives/reveal.directive.ts  # IntersectionObserver fade-in (replaces inline <script>)
    components/
      nav/            hero/         about/      projects/
      experience/     skills/       award-grid/ contact/      footer/
      social-icon/    tech-chip/    icon-defs/    # shared/presentational pieces
```

Notable conversions from the original HTML:

- The inline `IntersectionObserver` reveal script → `RevealDirective`
  (`[appReveal]`), which keeps the no-JS and reduced-motion CSS fallbacks.
- Repeated markup (stats, projects, skill groups, awards, education, social
  links) → `@for` loops over data in `portfolio.data.ts`.
- The Awards and Education sections share one reusable `AwardGrid` component.
- The base64-embedded hero portrait → a real asset at `public/profile.jpg`.
- The inline SVG `<symbol>` sprite sheet → the `IconDefs` component.

## Development server

```bash
npm install
npm start        # ng serve → http://localhost:4200/
```

## Building

```bash
npm run build    # outputs to dist/portfolio/browser
```

## Running unit tests

```bash
npm test         # ng test (Vitest)
```

## Deploying to GitHub Pages

The production build in `dist/portfolio/browser` is a static bundle that can be
published to GitHub Pages. Build with the correct base href for a user/org page
(served from the domain root):

```bash
ng build --base-href /
```

then publish the contents of `dist/portfolio/browser`.
