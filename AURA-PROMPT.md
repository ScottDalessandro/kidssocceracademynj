# Aura.build Prompts — Kids Soccer Academy Homepage

Generated: 2026-03-12

Use these prompts in sequence in Aura.build. Start with the hero, then add each section one at a time. Paste a screenshot reference if you have one (facility photo, competitor screenshot, etc.) for better results.

---

## Color Palette

Use these consistently across all prompts:

- **Primary Dark Navy:** #0F172A (slate-900) — brand color from KSA shield logo
- **Accent Hot Pink:** #EC4899 (pink-500) — CTA buttons, action links, hover borders
- **Accent Pink Hover:** #DB2777 (pink-600) — button hover states, darker accents
- **Accent Cyan:** #38BDF8 (sky-400) — labels, secondary accents, links
- **Background:** #FFFFFF (white) — clean, trustworthy
- **Light Background:** #F8FAFC (slate-50) — alternating section backgrounds
- **Light Blue Background:** #F0F9FF (sky-50) — trust/feature section backgrounds
- **Text Primary:** #0F172A (slate-900) — headlines and body (matches brand navy)
- **Text Secondary:** #64748B (slate-500) — subtext, descriptions
- **Star Gold:** #FACC15 (yellow-400) — Google star ratings

---

## PROMPT 0: NAV BAR (start here)

```
Create a minimal sticky navigation bar for a kids indoor soccer academy website. This is the first element — it sits above the hero.

LAYOUT:
- Full-width, fixed to top of viewport, z-index 50
- Inner content: max-width 1280px, centered, height 64px
- Flex row: logo left, nav links center-right, CTA button far right

LEFT: Logo placeholder — 48px height image placeholder (rounded-lg, light slate background, centered "KSA Logo" text). This is NOT text branding — it's a placeholder for the actual shield logo image.

CENTER/RIGHT NAV LINKS (desktop only):
- Anchor links: Programs, About, Reviews, Contact
- Font: 14px, weight 500, color #334155 (slate-700)
- Hover: color #EC4899 (pink-500), transition 200ms
- Gap between links: 32px

FAR RIGHT:
- CTA button: "Book Free Trial" — background #EC4899 (pink-500), text white, 14px weight 600, padding 10px 20px, rounded-lg, hover: #DB2777

SCROLL BEHAVIOR:
- Default: transparent background (hero shows through)
- After scrolling past 50px: white background + shadow-sm, transition 300ms

MOBILE (<768px):
- Logo left, hamburger icon right (3 horizontal lines)
- Tap hamburger: dropdown/slide-out menu with all links + CTA button
- Menu has white bg, shadow-lg, border-top

TYPOGRAPHY: Plus Jakarta Sans.

DO NOT:
- Do not make the nav oversized or add extra padding
- Do not use Lucide icons
```

---

## PROMPT 1: HERO SECTION (add after nav)

```
Create a hero section for a kids indoor soccer academy website. This is a local business in Wyckoff, New Jersey — not a franchise. The design should feel warm, trustworthy, and professional. Think premium local business, not corporate chain.

LAYOUT:
- Split layout: text content on the LEFT (55%), hero image on the RIGHT (45%)
- On mobile (<768px): stack vertically — image on TOP (full width, max 300px height, object-cover), text content BELOW
- Max content width: 1280px, centered with auto margins
- Generous padding: 80px top/bottom desktop, 48px mobile

LEFT SIDE CONTENT (top to bottom):
1. Small label above headline: "BERGEN COUNTY'S #1 RATED SOCCER ACADEMY" in uppercase, font-size 12px, font-weight 600, letter-spacing 0.08em, color #38BDF8 (sky-400)
2. Headline H1: "Every age. Every stage." on first line, "One place." on second line. Font: Plus Jakarta Sans, 52px desktop / 36px mobile, font-weight 800, letter-spacing -0.03em, color #0F172A (slate-900), line-height 1.1
3. Subheadline: "Indoor soccer training in Wyckoff for ages 18 months through high school." Font: Plus Jakarta Sans, 18px, weight 400, color #64748B (slate-500), line-height 1.6, max-width 480px, margin-top 16px
4. Google rating row (margin-top 20px): Display 5 gold star icons (★★★★★) in #FACC15 (yellow-400) at 20px size, followed by "5.0 · 33 Google Reviews" in 15px, weight 600, color #0F172A. Add a small Google "G" icon before the text. This entire row should feel like a trust badge.
5. Primary CTA button (margin-top 28px): "Book a Free Trial →" — background #EC4899 (pink-500), text white, font 16px weight 600, padding 16px 32px, rounded-xl (12px radius), hover: #DB2777 with slight scale(1.02) and shadow-lg transition. The arrow should animate slightly right on hover.
6. Below button: "No payment required. Takes 30 seconds." in 13px, weight 400, color #64748B (slate-500), margin-top 8px

RIGHT SIDE:
- A large placeholder image area with rounded-2xl corners (16px radius)
- Add a subtle shadow-xl
- The image area should have a light slate (#F8FAFC) background with centered text "Coach + kids on indoor turf" as placeholder
- On desktop, this image should feel like a natural photograph, slightly overlapping the edge or with a slight rotation (1-2 degrees) for visual interest — OR keep it clean with just rounded corners and shadow

TYPOGRAPHY:
- Use Plus Jakarta Sans from Google Fonts throughout (import it)
- Headline: 52px, weight 800, letter-spacing -0.03em
- Subheadline: 18px, weight 400
- Body/small: 13-15px, weight 400-600
- CTA button: 16px, weight 600

BACKGROUND:
- White (#FFFFFF) background for the hero section
- Optional: very subtle dotted grid pattern in the background at 5% opacity, or a faint navy radial gradient in the top-left corner for visual depth

ANIMATIONS:
- Headline: fade in + slide up from 20px below, 600ms duration, ease-out
- Subheadline: same animation, 200ms delay after headline
- Star rating row: same animation, 400ms delay
- CTA button: same animation, 600ms delay
- Image: fade in + slight scale from 0.95 to 1.0, 800ms duration, ease-out
- All animations trigger on page load

DO NOT:
- Do not use a carousel or slider
- Do not use a video background
- Do not add a second CTA button
- Do not use stock photo imagery — use a placeholder that clearly indicates where a real photo goes
- Do not use purple gradients or generic SaaS styling
- Do not use Lucide icons
```

---

## PROMPT 2: SOCIAL PROOF BAR (add after hero)

```
Adapt a new section directly below the hero: a social proof bar / trust strip.

LAYOUT:
- Full-width bar with #F8FAFC (slate-50) background
- Horizontal layout on desktop: 2-3 review snippets side by side with dividers between them
- On mobile: stack vertically or show as a single centered review
- Padding: 32px top/bottom, max-width 1280px centered

CONTENT:
- Centered at top: "Rated 5.0 ★★★★★ on Google · 33 Reviews" with stars in #FACC15, text in #0F172A, 14px weight 600. Include a small Google "G" logo icon.
- Below, display 2-3 review cards in a row:
  Card 1: "The coaches are amazing — patient, encouraging, and so easy to work with." — 5 ★
  Card 2: "Such a clean facility and incredible staff." — 5 ★
  Card 3: "My 10-year-old son enjoyed the summer camp!" — 5 ★
- Each card: white background, rounded-xl, padding 24px, subtle shadow-sm, border 1px solid #E2E8F0 (slate-200). Quote text in 15px italic weight 400 color #334155 (slate-700). Stars below quote in #FACC15 at 14px. Attribution "— Google Review" in 12px color #94A3B8 (slate-400).

TYPOGRAPHY:
- Use Plus Jakarta Sans (same as hero)
- Quote text: 15px, weight 400, italic
- Rating text: 14px, weight 600

ANIMATIONS:
- Entire section: fade in on scroll (Intersection Observer), 500ms ease-out
- Review cards: staggered entrance, each card 150ms after the previous, fade-in + slide up 15px

Don't change the hero section above.
```

---

## PROMPT 3: PROGRAMS TIMELINE (add after social proof)

```
Adapt a new section: Programs timeline showing the age progression of all soccer programs.

SECTION HEADER (centered):
- Small label above heading: "PROGRAMS" in uppercase, 12px, weight 600, letter-spacing 0.08em, color #38BDF8 (sky-400)
- Heading: "From Tiny Kickers to travel team" — 40px, weight 800, letter-spacing -0.02em, color #0F172A
- Subtitle: "One place your family never outgrows." — 18px, weight 400, color #64748B
- Center-align all header text

LAYOUT — DESKTOP (horizontal timeline):
- A horizontal line connecting 5 program nodes, left to right
- Line: 3px height, #0F172A (slate-900), positioned through center of the node circles
- Line "draws in" from left to right on scroll (width 0 → 100%, 800ms ease-out)
- Nodes spaced evenly across the line with ~18% width each
- Background: white (#FFFFFF). Max-width 1280px, centered. Padding 80px top/bottom.

LAYOUT — MOBILE (<768px, vertical timeline):
- Vertical line on the left, nodes stacked top to bottom
- Line: 3px width, #0F172A, positioned along left edge
- Each node has the circle on the left, text content to the right
- Gap between nodes: 40px

EACH NODE:
- Circle: 40px diameter, background #EC4899 (pink-500), with 12px white inner dot. Shadow-md. z-10 above the line.
- Hover: scale(1.1), 300ms
- Below/beside the circle:
  - Program name: 16px, weight 700, color #0F172A, centered (desktop) or left-aligned (mobile)
  - Age range: 14px, weight 500, color #38BDF8 (sky-400)
  - Hover description (desktop only): 14px, weight 400, color #64748B — hidden by default, appears on hover with opacity + max-height transition
  - "Learn more →" link: 12px, weight 600, color #EC4899, appears on hover

THE 5 NODES (left to right / top to bottom):
1. "Tiny Kickers" / "Ages 18mo–2.5yr" / "First kicks, first friends, first love of the game."
2. "Mini Strikers" / "Ages 2.5–4yr" / "All that energy channeled into real footwork."
3. "Little Legends" / "Ages 4–5yr" / "This is where it clicks — passing, scoring, teamwork."
4. "Mini Marvels" / "Ages 5–7yr" / "Real drills. Real scrimmages. Real improvement."
5. "Junior Dribblers" / "Ages 7–12yr" / "Technical training for serious young players."

KIDS FITNESS ACADEMY — shown separately below the timeline as an inline callout/badge:
- Pill shape (rounded-full), background #F8FAFC (slate-50), border 1px solid #E2E8F0
- Content: running icon (sky-400) + "Plus: Kids Fitness Academy for all ages" + "Learn more →" link
- Centered below timeline with margin-top 48px

ANIMATIONS:
- Timeline line draws in on scroll (800ms)
- Nodes appear sequentially left-to-right with 100ms stagger, opacity 0→1
- On mobile, nodes stagger top-to-bottom on scroll
- Scroll trigger via Intersection Observer

TYPOGRAPHY: Plus Jakarta Sans. Node titles 16px weight 700, ages 14px weight 500, descriptions 14px weight 400.

Don't change any sections above this one.
```

---

## PROMPT 4: WHY CHOOSE US / TRUST SECTION (add after programs)

```
Adapt a new section: "Why Choose Us" trust section with 4 feature columns.

BACKGROUND: #F0F9FF (sky-50) — light blue to differentiate from white sections above/below

SECTION HEADER (centered):
- Label: "WHY US" uppercase, 12px, weight 600, letter-spacing 0.08em, color #38BDF8
- Heading: "Why Bergen County families choose KSA" — 40px, weight 800, letter-spacing -0.02em, color #0F172A

LAYOUT:
- 4 columns on desktop (lg:grid-cols-4), 2 on tablet (md:grid-cols-2), 1 on mobile
- Max-width 1280px, centered. Padding 80px top/bottom, gap 32px

EACH COLUMN:
- Centered text alignment
- Top: Icon circle — 64px circle with #E0F2FE (sky-100) background, centered icon in #38BDF8 (sky-400), using Iconify Solar icons:
  Column 1 icon: building/home icon (for indoor facility)
  Column 2 icon: users/people icon (for coaches)
  Column 3 icon: arrow-up/growth icon (for age progression)
  Column 4 icon: gift/ticket icon (for free trial)
- Title: 18px, weight 700, color #0F172A, margin-top 16px
- Description: 15px, weight 400, color #64748B, line-height 1.6, margin-top 8px, max-width 260px centered

THE 4 COLUMNS:
1. "Dedicated Indoor Facility" / "Three turf fields. Padded walls. Climate-controlled. No rain cancellations, no mud. Year-round training."
2. "Coaches Who Know Your Kid" / "Not a franchise with rotating staff. Our coaches are here every week. They know your child by name."
3. "18 Months to High School" / "The one place your family never outgrows. Start as a Tiny Kicker. Train through high school."
4. "Free Trial — No Catch" / "No payment. No commitment. No sales pitch. Just bring your child and watch them play."

ANIMATIONS:
- Each column: staggered fade-in on scroll, 150ms between each
- Icon circles: subtle scale animation from 0.8 to 1.0 on scroll

TYPOGRAPHY: Plus Jakarta Sans. Titles 18px weight 700, body 15px weight 400.

Don't change any sections above.
```

---

## PROMPT 5: GOOGLE REVIEWS SECTION (add after trust section)

```
Adapt a new section: Google reviews showcase.

BACKGROUND: #FFFFFF (white)

SECTION HEADER (centered):
- Heading: "Don't take our word for it. Take theirs." — 40px, weight 800, letter-spacing -0.02em, color #0F172A
- Subtitle: "5.0 stars across 33 Google reviews. Here's what parents are saying." — 18px, weight 400, color #64748B

LAYOUT:
- 3 review cards in a row on desktop (lg:grid-cols-3), 1 on mobile (stack)
- Max-width 1280px, centered. Padding 80px top/bottom, gap 24px

EACH REVIEW CARD:
- White background, border 1px solid #E2E8F0, rounded-2xl, padding 32px
- Shadow-sm, hover: shadow-md transition 300ms
- Top: 5 star icons ★★★★★ in #FACC15 (yellow-400)
- Middle: Review quote text, 16px, weight 400, italic, color #334155, line-height 1.7, margin-top 16px
- Bottom: Reviewer attribution line, 13px, weight 500, color #94A3B8, margin-top 20px. Format: "— Parent Name" (or "— Google Review" if name unavailable)
- Small Google "G" icon in the top-right corner of each card, 20px, opacity 30%

THE 3 CARDS:
Card 1: "The coaches are amazing; patient, encouraging, and so easy to work with." — Google Review
Card 2: "Such a clean facility and incredible staff." — Google Review
Card 3: "My 10-year-old son enjoyed the summer camp!" — Google Review

Below the cards, centered:
- Link: "Read all 33 reviews on Google →" in 15px, weight 600, color #EC4899, hover: underline
- Below link: Google Maps attribution text "Reviews from Google" in 12px, color #94A3B8 with Google "G" icon

ANIMATIONS:
- Cards: staggered fade-in + slide up on scroll, 150ms between cards

TYPOGRAPHY: Plus Jakarta Sans. Quotes 16px weight 400 italic, attribution 13px weight 500.

Don't change any sections above.
```

---

## PROMPT 6: FACILITY GALLERY (add after reviews)

```
Adapt a new section: facility photo gallery.

BACKGROUND: #F8FAFC (slate-50)

SECTION HEADER (centered):
- Heading: "See where they play." — 40px, weight 800, letter-spacing -0.02em, color #0F172A
- Subtitle: "A modern indoor facility in Wyckoff designed for one thing: kids who love soccer." — 18px, weight 400, color #64748B

LAYOUT:
- Bento-style grid with 6 placeholder images:
  - Row 1: 1 large image spanning 2 columns (col-span-2), 1 regular image
  - Row 2: 1 regular image, 1 large image spanning 2 columns (col-span-2)
- On mobile: single column, each image full width
- Max-width 1280px, centered. Padding 80px top/bottom, gap 16px
- Each image placeholder: rounded-xl, background #E2E8F0, height 280px (large: 280px, regular: 280px), object-cover
- Add descriptive placeholder text centered in each:
  1. (large) "Indoor turf field — wide shot"
  2. "Kids training on turf"
  3. "Coach working with small group"
  4. (large) "Parent lounge / viewing area"
  5. "Close-up: kid kicking ball"
  6. "Facility entrance / exterior"

STYLING:
- Images have hover: scale(1.03) with overflow hidden on the container, 400ms ease-out
- Subtle shadow-sm on each image container

ANIMATIONS:
- Fade in on scroll, staggered 100ms

TYPOGRAPHY: Plus Jakarta Sans.

Don't change any sections above.
```

---

## PROMPT 7: FREE TRIAL CTA BLOCK (add after gallery)

```
Adapt a new section: full-width CTA block for free trial booking.

BACKGROUND: #0F172A (slate-900 / dark navy) — solid dark navy background. This is the conversion block.

LAYOUT:
- Centered text, single column, max-width 640px centered
- Padding: 80px top/bottom desktop, 48px mobile

CONTENT (centered, all white text):
1. Heading: "Ready to see it for yourself?" — 40px, weight 800, letter-spacing -0.02em, color white
2. Body: "Book a free trial class. No payment required. No commitment. Just show up with your child, watch them play on our turf, and see why 33 families gave us 5 stars." — 18px, weight 400, color white with 90% opacity, line-height 1.7, margin-top 16px
3. Subtitle: "Spots are available for ages 18 months through high school." — 15px, weight 500, color white with 70% opacity, margin-top 8px
4. CTA button (margin-top 32px): "Book Your Free Trial →" — background #EC4899 (pink-500), text white, font 17px weight 700, padding 18px 40px, rounded-xl, hover: #DB2777 with shadow-lg, scale(1.02), 300ms ease-out. Arrow animates right on hover.
5. Below button: "Free. No payment info required. Takes 30 seconds." — 13px, weight 400, color white with 60% opacity, margin-top 12px

DECORATIONS:
- Subtle soccer ball pattern or dotted pattern in the background at 5% opacity (white dots on navy)
- Or a subtle radial gradient: slightly lighter navy in the center fading to the edges

ANIMATIONS:
- Entire block: fade in on scroll
- Button: subtle pulse animation every 3 seconds (scale 1.0 → 1.03 → 1.0), very gentle

TYPOGRAPHY: Plus Jakarta Sans. Heading 40px weight 800, body 18px weight 400.

Don't change any sections above.
```

---

## PROMPT 8: FOOTER (add after CTA block)

```
Adapt a footer section.

BACKGROUND: #0F172A (slate-900) — dark navy footer

LAYOUT:
- Top section: 4 columns on desktop (lg:grid-cols-4), stack on mobile
- Max-width 1280px, centered. Padding 64px top, 32px bottom
- Bottom section: single row with copyright, full width border-t border-slate-800

COLUMN 1 — BRAND:
- Logo placeholder: 48px height image placeholder (rounded-lg, slate-800 background, "KSA Logo" text centered) — NOT plain text, this is a placeholder for the actual shield logo image
- Address below: "681 Lawlins Rd #70, Wyckoff, NJ 07481" in 14px, weight 400, color #94A3B8 (slate-400), margin-top 12px
- Phone: "(201) 696-4195" in 14px, weight 500, color #94A3B8, with click-to-call link. Hover: white.
- Social icons row (margin-top 20px): Facebook, Instagram, YouTube, TikTok — using Iconify Simple Icons SVG, 20px, color #94A3B8, hover: white, gap 16px

COLUMN 2 — PROGRAMS:
- Column title: "Programs" in 14px, weight 600, color white, uppercase, letter-spacing 0.05em
- Links list (margin-top 16px): Tiny Kickers, Mini Strikers, Little Legends, Mini Marvels, Junior Dribblers, Kids Fitness Academy — each 14px, weight 400, color #94A3B8, hover: white, line-height 2.0

COLUMN 3 — QUICK LINKS:
- Column title: "Quick Links"
- Links: Schedule, About Our Coaches, Birthday Parties, FAQ, Contact — same styling as Column 2

COLUMN 4 — GET STARTED:
- Column title: "Get Started"
- Short text: "Book a free trial class for your child. No payment, no commitment." in 14px, weight 400, color #94A3B8, line-height 1.6
- CTA button (margin-top 16px): "Book Free Trial" — background #EC4899 (pink-500), text white, 14px weight 600, padding 12px 24px, rounded-lg, hover: #DB2777

BOTTOM BAR:
- border-t 1px solid #1E293B (slate-800), padding-top 24px, margin-top 48px
- Left: "© 2026 Kids Soccer Academy. All rights reserved." in 13px, color #64748B
- Right: "Privacy Policy | Terms of Service" links in 13px, color #64748B, hover: #94A3B8
- On mobile: stack centered

GOOGLE MAP:
- Optional: small embedded Google Map placeholder between columns and bottom bar, full width, height 200px, rounded-lg, with overlay text "Google Map — 681 Lawlins Rd, Wyckoff, NJ"

TYPOGRAPHY: Plus Jakarta Sans. Column titles 14px weight 600, links 14px weight 400.

Don't change any sections above.
```

---

## PROMPT 9: STICKY MOBILE CTA (add last)

```
Add a sticky mobile CTA bar that appears on screens smaller than 768px.

LAYOUT:
- Fixed to the bottom of the viewport (position: fixed, bottom: 0, z-index: 50)
- Full width, padding 12px 16px, background white with shadow-2xl (strong upward shadow)
- Border-top: 1px solid #E2E8F0

CONTENT:
- Flex row with gap 12px:
  Left (flex-1): "Book Free Trial" button — background #EC4899 (pink-500), text white, 15px weight 600, rounded-lg, full width, padding 14px, hover: #DB2777
  Right: Phone icon button — 48px square, background #0F172A (slate-900), rounded-lg, white phone icon (Iconify Solar phone icon), this links to tel:(201)696-4195

BEHAVIOR:
- Hidden by default. Appears only after the user scrolls past the hero section (use Intersection Observer on the hero — when hero exits viewport, show the bar with a slide-up animation from bottom, 300ms ease-out)
- Only visible on mobile (<768px). Hidden on desktop.
- Safe area padding at bottom for phones with gesture bars (pb-safe or padding-bottom: env(safe-area-inset-bottom))

Don't change any existing sections.
```

---

## PROMPT 10: EXIT-INTENT POPUP (optional — add last)

```
Add an exit-intent popup modal.

TRIGGER: On desktop, trigger when the cursor moves toward the top of the browser window (mouseout event on document, clientY < 10). On mobile, trigger after 60 seconds of page time. Show only ONCE per session (use localStorage flag).

OVERLAY: Full screen, background black at 50% opacity, z-index 60. Click outside to dismiss.

MODAL:
- Centered, max-width 440px, white background, rounded-2xl, padding 40px, shadow-2xl
- Close button: top-right corner, "×" in 24px, color #94A3B8, hover: #0F172A

CONTENT (centered):
1. Heading: "Wait — before you go." — 28px, weight 800, color #0F172A
2. Body: "Book a free trial class for your child. No payment, no commitment. Just soccer." — 16px, weight 400, color #64748B, margin-top 12px
3. Single input field (margin-top 24px): placeholder "Your email or phone number" — full width, border 1px solid #CBD5E1, rounded-lg, padding 14px 16px, 15px weight 400. Focus: border-color #EC4899, ring-2 ring-pink-200
4. CTA button (margin-top 12px): "Save My Spot →" — full width, background #EC4899, text white, 16px weight 600, padding 16px, rounded-lg, hover: #DB2777
5. Subtext: "Spots fill up. We'll text or email you available times." — 13px, weight 400, color #94A3B8, margin-top 8px
6. Dismiss link: "No thanks, I'll come back later" — 13px, weight 400, color #94A3B8, hover: underline, margin-top 16px, cursor pointer

ANIMATION:
- Overlay: fade in, 300ms
- Modal: fade in + scale from 0.95 to 1.0, 300ms ease-out

TYPOGRAPHY: Plus Jakarta Sans.

Don't change any existing sections.
```

---

## Build Order Checklist

1. [ ] **Nav Bar** — Prompt 0 (sticky nav with logo placeholder, anchor links, CTA)
2. [ ] **Hero** — Prompt 1 (iterate until the layout, typography, and CTA feel right)
3. [ ] **Social Proof Bar** — Prompt 2
4. [ ] **Programs Timeline** — Prompt 3
5. [ ] **Why Choose Us** — Prompt 4
6. [ ] **Google Reviews** — Prompt 5
7. [ ] **Facility Gallery** — Prompt 6
8. [ ] **Free Trial CTA** — Prompt 7
9. [ ] **Footer** — Prompt 8
10. [ ] **Sticky Mobile CTA** — Prompt 9
11. [ ] **Exit-Intent Popup** — Prompt 10

## After Building in Aura

- Replace all placeholder images with real KSA facility photos
- Swap placeholder logo with actual KSA logo
- Test on mobile — check for horizontal scrolling issues
- Verify all links point to correct pages
- Add real Google reviews data (or Featurable widget)
- Connect form submission to Vercel serverless function
- Run Lighthouse audit — aim for 90+ on all categories
