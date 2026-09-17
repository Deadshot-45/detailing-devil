# Detailing Devil

Luxury automotive detailing website for Detailing Devil in Indore, Madhya Pradesh.

The site presents detailing services, packages, the Devil's Garage portfolio, the studio process, reviews, and contact information. It uses a dark automotive visual system with red accents, responsive layouts, animated transitions, interactive before-and-after sliders, and a Three.js ambient canvas on the home page.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- Three.js

## Development

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Available checks:

```bash
npm run lint
npm run build
```

## Project Structure

- `src/pages/` contains route-level pages.
- `src/components/layout/` contains the shared navbar, mobile drawer, and footer.
- `src/components/ui/` contains reusable UI primitives.
- `src/components/BrandLogo.tsx` is the shared brand mark used throughout the interface.
- `public/detailing-devils-logo.svg` is the source logo and favicon.

## Deployment

The project is configured for Vercel. Vercel serves the production site and uses `vercel.json` to route client-side paths back to `index.html`.

GitHub Actions runs linting and the production build on pushes and pull requests through `.github/workflows/ci-cd.yml`.
