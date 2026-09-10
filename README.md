# Cerebral Hub — website redesign

A hand-built, dependency-free static site: plain HTML, CSS and JavaScript. No build step, no
framework. Open `index.html` in a browser or drop the whole folder on any host.

## Structure

```
index.html          Home    — hero, reel (showreel + statement), process,
                              why choose, clients served, CTA
about.html          About   — mission, stats, trusted-by, FAQ accordion
services.html       Services— four services, process recap
work.html           Work    — nine case studies linking to the existing PDFs
contact.html        Contact — enquiry form, offices, socials
otega-isiekwena.html  Profile — Managing Director, full biography

assets/css/styles.css      One stylesheet. Section 1 holds every design token.
assets/js/main.js          Sticky header, mobile nav, scroll reveals, counters,
                           FAQ accordion, marquee loop, form handling.
robots.txt          Crawl rules + sitemap pointer
sitemap.xml         All five URLs with priorities

assets/img/favicon.svg     Brain mark only (no wordmark) — browser tab icon
assets/img/apple-touch-icon.png  512px icon on ink, for iOS home screens
assets/img/og-image.png    1200×630 social share card
assets/img/logo.svg        Cerebral Hub mark, dark wordmark (for light backgrounds)
assets/img/logo-light.svg  Cerebral Hub mark, white wordmark (used in the header/footer)
assets/img/logo-watermark.svg  Monochrome lockup used as the footer watermark
assets/img/team/           Portraits (Otega Isiekwena)
assets/img/illustrations/  14 original SVG illustrations, all hand-coded in the brand palette
```

## Design system

Everything visual is controlled by the custom properties at the top of `styles.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `--ink` / `--ink-2` / `--ink-3` | `#0A0B0F` `#101219` `#171A23` | dark surfaces — heroes and footer only |
| `--paper` | `#FFFFFF` | white sections |
| `--cream` | `#F6F4EF` | off-white sections |
| `--accent` | `#F58A07` | primary CTA, eyebrows, highlights |
| `--blue` `--green` `--red` `--gold` | logo colours | illustration accents |
| `--font-display` | Space Grotesk | headings |
| `--font-body` | Inter | body copy |

Change the accent in one place and it propagates across every page.

Section backgrounds are set by one class on the `<section>`: `paper` (white), `cream` (off-white)
or `dark` (ink). Dark is reserved for the page heroes, the reel/statement band and the footer;
everything between them alternates white and off-white, with orange used only as an accent.

Responsive breakpoints: 1600 (wider measure), 1200, 1024 (tablet landscape — two-column grids
collapse), 900 (nav collapses to the drawer), 768, 660 (single column), 480 (compact phone: full
width buttons, tighter gutters), 360, plus a short-landscape rule so the hero never fills a
sideways phone.

## Content

All copy is carried over verbatim from the current site — headings, service descriptions,
process steps, FAQ answers, addresses and phone number. The homepage showreel is the same
YouTube embed (`91wWCkmO5H0`).

## Photographic assets

The client logos, case-study artwork and the four Services page photographs are referenced from
`https://cerebralhub.com/assets/...`
because those binaries could not be downloaded into this build. Once you deploy to the same
domain they resolve as-is; if you'd rather keep them local, copy the files into
`assets/img/clients/` and `assets/img/work/` and swap the absolute URLs for relative ones.

The case-study "More" links point at the existing PDFs under `/pdfs/`.

The Managing Director's portrait (`assets/img/team/otega-isiekwena.png`) is the file you supplied,
at its native 202 × 251px. Card and profile layouts cap it at ~216px wide so it stays sharp — a
higher-resolution version (roughly 600 × 750px) would let it be shown larger. The original
`CFO.png` is still in the folder root; delete it whenever you like.

## SEO

Every page carries:

- A unique `<title>` (≤ 60 chars) and `meta description` (≤ 155 chars)
- `rel="canonical"`, a `robots` directive with `max-image-preview:large`, `theme-color`
- Full Open Graph + Twitter card tags pointing at `assets/img/og-image.png`
- JSON-LD structured data in a `@graph`:
  - **index** — `Organization` / `ProfessionalService` (both office addresses, phone, email,
    social profiles) + `WebSite` + `WebPage`
  - **about** — `AboutPage` + `BreadcrumbList` + `FAQPage` (all five Q&As, eligible for FAQ rich
    results)
  - **services** — `CollectionPage` + `BreadcrumbList` + `ItemList` of four `Service` entities
  - **work** — `CollectionPage` + `BreadcrumbList` + `ItemList` of the nine case studies
  - **contact** — `ContactPage` + `BreadcrumbList` + two `LocalBusiness` entries (Lagos, Abuja)
  - **otega-isiekwena** — `ProfilePage` + `BreadcrumbList` + `Person`, cross-linked to the
    `Organization` node via `employee` / `worksFor`

Also: one `<h1>` per page, descriptive `alt` on every meaningful image, `width`/`height` on images
to prevent layout shift, `loading="lazy"` + `decoding="async"` below the fold, and a skip link.

**Canonical URLs assume the pages deploy at their file names** (`/about.html`, `/services.html`,
and so on). If you serve them at pretty URLs instead (`/about-us`, `/our-work`), update the
`canonical`, `og:url`, `sitemap.xml` and the `@id`/`item` values in the JSON-LD to match — those
are the only places the URLs are hard-coded.

## Wiring the forms

`assets/js/main.js` currently intercepts the contact form and shows a confirmation. Replace the
handler in the *Forms* block with a `fetch()` to your endpoint (Formspree, Netlify Forms, or your
own API) when you go live.

## Accessibility & performance

- Skip link, visible focus rings, `aria-current` on the active nav item, labelled form fields.
- The FAQ uses real buttons with `aria-expanded`; the mobile drawer closes on `Esc`.
- All animation is disabled under `prefers-reduced-motion`.
- A `<noscript>` block keeps every section visible if JavaScript fails.
- Illustrations are SVG, so the whole design layer weighs a few kilobytes.
"# cerebral-website-2026" 
