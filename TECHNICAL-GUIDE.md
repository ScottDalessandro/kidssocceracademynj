# Technical Implementation Guide — KSA Website Rebuild

## Stack

- **Framework:** Astro (static site generation)
- **Hosting:** Vercel (free tier)
- **CMS:** TinaCMS (Git-based, free tier) — gives owner an admin UI at /admin
- **Styling:** Tailwind CSS (recommended) or whatever you prefer
- **Reviews:** Google Places API or Featurable API at build time
- **Forms:** Vercel serverless function + Resend for email + Google Sheets for data
- **Analytics:** PostHog (free tier, 1M events/month)
- **Domain:** Client's existing domain (kidssocceracademynj.com) — DNS transfer from Wix

---

## Google Reviews Integration

### Legal Requirements
- Google Places API allows displaying up to 5 reviews per place
- MUST include author name in close proximity to review text
- SHOULD include author photo and link to their Google Maps profile when available
- MUST include Google Maps attribution (logo or styled text)
- MUST have publicly accessible Terms of Use and Privacy Policy linking to Google's ToS
- DO NOT scrape reviews — violates Google ToS
- DO NOT edit or modify review content
- DO NOT cache reviews indefinitely — refresh regularly

### Implementation Options (Ranked)

#### Option A: Google Places API at Build Time (Recommended)
- Fetch from Places API during `astro build`
- Renders as static HTML — fully crawlable by search engines (better than JS-loaded widgets)
- Add LocalBusiness + AggregateRating schema markup
- Limitation: 5 reviews max per API call
- Cost: Google Places API has a free $200/month credit which covers this easily
- Place ID needed: Use Google's Place ID Finder (https://developers.google.com/maps/documentation/places/web-service/place-id)

```javascript
// Example: fetch reviews at build time in Astro
// src/lib/google-reviews.ts
export async function fetchGoogleReviews(placeId: string) {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    reviews: data.result.reviews || [],
    rating: data.result.rating,
    totalReviews: data.result.user_ratings_total
  };
}
```

#### Option B: Featurable API (Free, More Reviews)
- Free tier, no Google Cloud account needed
- Returns more than 5 reviews
- Auto-updates every 48 hours
- Has a React component (`react-google-reviews` npm package) but can also be used as pure data source at build time
- npm: `npm install react-google-reviews`
- Supports carousel, badge, and grid layouts
- Built-in JSON-LD structured data for SEO
- MIT licensed
- Works as React island in Astro with `client:load`
- Sign up at https://featurable.com

#### Option C: `react-google-reviews` React Component
- npm: `react-google-reviews` by Featurable (github.com/Featurable/react-google-reviews)
- Works with both Google Places API and Featurable API
- Layouts: carousel, badge, grid
- SEO-friendly with JSON-LD structured data
- Use as Astro React island: `<ReviewCarousel client:load />`
- If using Featurable API: no server-side code needed, free
- If using Google Places API: must fetch server-side to protect API key

### Daily Review Sync / Rebuild

**Architecture:** Vercel Deploy Hook + GitHub Actions cron

1. Create a Deploy Hook in Vercel project settings (gives you a URL)
2. GitHub Actions workflow triggers daily rebuild:

```yaml
# .github/workflows/daily-rebuild.yml
name: Daily Review Sync
on:
  schedule:
    - cron: '0 10 * * *'  # 6am ET (10:00 UTC)
  workflow_dispatch:  # manual trigger

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel Deploy
        run: curl -X POST "${{ secrets.VERCEL_DEPLOY_HOOK_URL }}"
```

- Google does NOT offer webhooks for new GBP reviews — no push notification system exists
- Daily rebuild is standard practice and more than sufficient
- Full Astro rebuild for a site this size: 30-60 seconds
- Vercel free tier: 6,000 build minutes/month (daily rebuilds use ~30 minutes/month)

---

## Form / Lead Capture System

### Architecture: Vercel Serverless Function + Resend + Google Sheets

**Form fields for Free Trial request:**
- Parent name
- Email
- Phone
- Child's name
- Child's age (or program interest)
- Preferred class day/time

**Flow:**
1. Parent fills out form on site → submits to `/api/trial-request`
2. Vercel serverless function:
   a. Sends confirmation email to parent via Resend (branded, includes what to expect)
   b. Sends notification email to owner with all lead details
   c. Logs submission to Google Sheets (simple "database")
3. Site shows thank-you page: "Thanks! We'll contact you within 24 hours to schedule your free trial."

**Resend:**
- Free tier: 3,000 emails/month (more than enough)
- npm: `resend`
- Docs: https://resend.com/docs
- Will need a sending domain configured (e.g., notifications@kidssocceracademynj.com or similar)

**Google Sheets as database:**
- Use Google Sheets API to append rows
- Zero cost, owner can view leads in a familiar interface
- Alternative: Supabase free tier (Postgres) if you want a real DB for future analytics

**Zen Planner integration:**
- CHECK FIRST: Does Zen Planner have an API or webhook intake for leads?
- If yes: route form submissions directly into Zen Planner so owner's workflow doesn't change
- If no: Google Sheets + email notification is the fallback
- Don't over-engineer this for v1

### Contact Form
- Simpler version of above — name, email, message
- Same serverless function pattern
- Route to owner's email + log to Sheets

---

## CMS — TinaCMS

### Why TinaCMS
- Git-based: content lives as Markdown/JSON in your repo (no external database)
- Visual editing UI at /admin for non-technical users
- Free for small sites
- Works beautifully with Astro content collections
- Content changes → Git commit → triggers Vercel rebuild
- Owner is comfortable with Wix editing, so TinaCMS's interface will feel familiar
- Alternative options considered: Decap CMS (lighter but more basic UI), Storyblok (visual drag-and-drop but hosted service with pricing tiers)

### What the owner should be able to edit:
- Class schedule / times
- Program descriptions
- Seasonal announcements or banners
- Photo gallery updates
- FAQ entries
- Maybe birthday party pricing/packages

### What stays code-managed (not CMS-editable):
- Site layout and structure
- Navigation
- Review integration
- Form logic
- Analytics

---

## Analytics — PostHog

- Free tier: 1M events/month
- Set up PostHog, create shared dashboard with key metrics
- Key metrics for client: total visitors, trial form submissions, form conversion rate, traffic sources
- DO NOT give owner raw PostHog access (will overwhelm them and generate support questions)
- Instead: monthly screenshot or Loom video walking through numbers
- This becomes your monthly touchpoint for relationship building and upsell conversations
- Alternative: Vercel Analytics (simpler but less capable)

---

## Schema Markup

Add to every page:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kids Soccer Academy",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "681 Lawlins Rd #70",
    "addressLocality": "Wyckoff",
    "addressRegion": "NJ",
    "postalCode": "07481"
  },
  "telephone": "(201) 696-4195",
  "url": "https://www.kidssocceracademynj.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "33"
  }
}
```

Also add per-page:
- SportsActivityLocation schema for the facility
- Course schema for individual programs
- FAQPage schema for the FAQ page

---

## SEO Priorities

1. Proper heading hierarchy (H1 → H2 → H3, no jumping to H4)
2. Alt text on all images
3. Meta title and description per page (not too long — Wix versions were truncated)
4. Open Graph tags for social sharing
5. Sitemap.xml (Astro generates this with @astrojs/sitemap)
6. robots.txt
7. Core Web Vitals optimization (Astro gives you this nearly for free)
8. Local SEO keywords in content: "kids soccer Wyckoff," "youth soccer Bergen County," "toddler soccer classes NJ"

---

## Deployment Checklist

- [ ] Vercel project created and connected to GitHub repo
- [ ] Custom domain configured (DNS transfer from Wix)
- [ ] SSL certificate (automatic on Vercel)
- [ ] Deploy Hook created for daily rebuild
- [ ] GitHub Actions cron workflow set up
- [ ] Google Places API key created and stored as env variable
- [ ] Resend account created, sending domain verified
- [ ] Google Sheets API configured for form submissions
- [ ] PostHog project created, tracking script installed
- [ ] TinaCMS configured with content schema
- [ ] All pages tested on mobile
- [ ] Lighthouse score verified (aim for 90+ on all categories)
- [ ] Schema markup validated (schema.org validator)
- [ ] Form submission flow tested end-to-end
- [ ] 301 redirects set up for any URL changes from Wix site
