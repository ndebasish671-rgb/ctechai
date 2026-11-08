# CTechAI

A tech-media website in the style of PCMag: hands-on **reviews**, **news**, **best-of buying guides**, and **how-to** articles, organized by category, with Editors' Choice picks, search, and an article page with a scored verdict box.

Built with Next.js 15 (App Router), React 19, and TypeScript. All content is local, so no database or CMS is required.

> **Note:** The articles, brands, and products in this repo are **fictional sample content** for demonstrating the layout. Replace `lib/content.ts` (or connect a CMS) before publishing anything real.

## Features

- **Home page**: featured story, top stories, Editors' Choice strip, latest reviews, breaking news, best-of guides, shop-by-category tiles, and newsletter signup.
- **Sections**: `/reviews`, `/news`, `/best`, `/how-to`
- **Categories**: `/category/<slug>` for Laptops & PCs, Phones & Tablets, TVs & Home Theater, Audio, Gaming, Smart Home, Software & Security, and AI & Apps.
- **Articles**: `/article/<slug>` with byline, breadcrumbs, related stories, and a sticky verdict box (score, price, pros, cons) for reviews.
- **Search**: `/search?q=...` across titles, deks, authors, categories, and sections.
- **Editors' Choice**: `/editors-choice`
- **About / review policy / contact**: `/about`
- Responsive layout, a mobile-friendly header, and a styled 404 page.

## Getting started

Requires Node.js 18.18 or newer (developed on Node 22).

```bash
npm install
npm run dev        # development server on http://localhost:3000
npm run build      # production build
npm run start      # serve the production build on port 3000
npm run typecheck  # TypeScript check without emitting files
```

The dev and start scripts bind to `0.0.0.0` so the server can be reached from outside the container.

## Project structure

```
app/
  layout.tsx            Root layout (header, footer, metadata)
  page.tsx              Home page
  [section]/page.tsx    /reviews, /news, /best, /how-to
  article/[slug]/       Article page with verdict box
  category/[slug]/      Category listing
  search/page.tsx       Search results
  editors-choice/       Editors' Choice listing
  about/page.tsx        About, review policy, contact
  not-found.tsx         404 page
  globals.css           All styles
components/             Header, Footer, ArticleCard, RatingBadge, Thumb, SectionHeader
lib/content.ts          Articles, sections, categories, and query helpers
```

## Adding an article

Add an entry to the `ARTICLES` array in `lib/content.ts`:

```ts
{
  slug: 'my-new-review',            // used in the URL
  title: 'My New Laptop Review',
  dek: 'One-sentence summary shown on cards.',
  section: 'reviews',               // 'reviews' | 'news' | 'best' | 'how-to'
  category: 'computers',            // see CATEGORIES
  author: 'Author Name',
  date: '2026-11-08',
  readMinutes: 6,
  rating: 4.0,                      // reviews only, out of 5
  editorsChoice: false,             // optional
  price: '$999',                    // optional, reviews only
  verdict: 'Short verdict paragraph.',
  pros: ['...'],
  cons: ['...'],
  hue: ['#1d4ed8', '#38bdf8'],      // gradient used for the placeholder image
  body: ['Paragraph one.', 'Paragraph two.'],
}
```

Static pages are generated for every article, category, and section at build time (`generateStaticParams`).

## Images

Article images are placeholder gradient tiles (`components/Thumb.tsx`). To use real photography, store images under `public/` and switch `Thumb` to `next/image`.
