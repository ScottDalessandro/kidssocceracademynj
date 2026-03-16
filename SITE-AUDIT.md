# Current Site Audit — Content & Structure Reference

## Site Map (Current Wix Site)

### Homepage (kidssocceracademynj.com/)
- Hero image carousel
- H1: "Welcome to Kids Soccer Academy – Wyckoff, NJ" (weak — should be value prop)
- Program listings with descriptions
- Copy is repetitive: "confidence, coordination, and discipline" recycled multiple times
- "More Than Soccer – Building Skills for Life" tagline (generic)
- Two CTAs in header: "Book a Free Trial" + "Register"
- Footer: address, phone, email, social links (Facebook, Instagram, YouTube, TikTok)

### Programs (Individual Pages)
Each has its own URL and dedicated page with descriptions, session lengths, class times:

- **Tiny Kickers** (18 months - 2.5 years) — 30 min sessions
- **Mini Strikers** (2.5 - 4 years)
- **Little Legends** (4 - 5 years)
- **Mini Marvels** (5 - 7 years)
- **Junior Dribblers** (7 - 12 years) — 50 min sessions
- **Kids Fitness Academy** (/kidsfitnessacademy) — Separate fitness program
- **Private Soccer Training** (/privatesoccertraining) — 1-on-1 and group
- **Goalkeeper Training**
- **Team Training Sessions**

### Free Trial Class (/freetrialclass)
- "No payment or commitment required"
- Lists class times for each age group
- Multiple CTA buttons with "Spots fill quickly" urgency copy
- Two brief star-rated testimonials (unattributed — no parent names, photos, dates):
  - One about Mini Strikers coaches being "patient and energetic"
  - One calling it "the best youth soccer training in the area"
- Claims "Voted #1 Toddler & Youth Soccer Program" — NO SOURCE cited
- CTA links to Google Form

### Schedule (/schedule)
- Heading and brief paragraph asking visitors to call
- Actual schedule data either loaded via JS embed or simply missing
- Effectively a broken/empty page

### Birthday Parties
- Exists as nav item
- Content unknown — need to scrape

### FAQ
- Exists
- Content unknown — need to scrape

### Terms & Conditions (/terms-and-conditions)
- Brief "commitment to safety" statement but zero specifics on:
  - Background checks
  - Insurance coverage
  - CPR/first aid training
  - Concussion protocols

---

## Navigation Audit

### Homepage Nav (13 items):
Tiny Kickers | Mini Strikers | Little Legends | Mini Marvels | Junior Dribblers | Kids Fitness Academy | Private Soccer Training | Goalkeeper Training | Team Training Sessions | Schedule | Birthday Parties | FAQ | Free Trial Class

### Schedule Page Nav (different!):
Free Trial Class | Private Training 1 on 1 | Goalkeeper Training | Team Training Sessions | (different set than homepage)

**Problem:** Inconsistent nav across pages erodes trust and confuses users.

**Recommended Nav Structure (7 items + CTA):**
Home | Programs ▾ | Schedule | About Us | Birthday Parties | FAQ | Contact | [Book Free Trial] (CTA button)

Programs dropdown:
- Tiny Kickers (18mo - 2.5yr)
- Mini Strikers (2.5 - 4yr)
- Little Legends (4 - 5yr)
- Mini Marvels (5 - 7yr)
- Junior Dribblers (7 - 12yr)
- Kids Fitness Academy
- Private Training
- Goalkeeper Training

---

## Google Business Profile Data (from screenshot)

- **Name:** Kids Soccer Academy
- **Rating:** 5.0 stars
- **Reviews:** 33 Google reviews
- **Category:** Youth organization in Wyckoff, New Jersey
- **Address:** 681 Lawlins Rd #70, Wyckoff, NJ 07481
- **Phone:** (201) 696-4195
- **Hours:** Open, closes 9 PM
- **Profiles linked:** Facebook, Instagram
- **Has posted updates** on Google

### Sample Reviews from GBP:
- "My 10 year son enjoyed the summer camp!" — 5 stars
- "Such a clean facility and incredible staff." — 5 stars
- "The coaches are amazing; patient, encouraging, and so easy to work with." — 5 stars
- Scott D'Alessandro (you) — 5 stars, posted 5 days ago

### GBP "From Kids Soccer Academy" Description:
"Kids Soccer Academy in Wyckoff is your top choice for Bergen County and Passaic County families for Toddler Classes, Youth Soccer Programs, Organized Soccer Classes, Group Soccer Training, One on One Soccer training, Birthday Parties, and more."

### "People also search for" (competitors in GBP):
- Stevens Cooperative School
- Montclair Speech Therapy
- The Little Gym
- Kiddie Academy of Monroe

---

## Content to Extract from Current Site

Before building, scrape or manually collect:
- [ ] All program descriptions (each age group page)
- [ ] Class times per program
- [ ] Birthday party details and pricing (if listed)
- [ ] FAQ content
- [ ] All photos (download from Wix site)
- [ ] Kids Fitness Academy page content
- [ ] Private training page content
- [ ] Any seasonal/promotional content
- [ ] Social media URLs (Facebook, Instagram, YouTube, TikTok)
- [ ] Email address from contact info
- [ ] Terms & conditions content (if reusing)

---

## Key Images to Use

From the current site and GBP photos:
- Indoor turf field shots (facility looks clean and modern)
- Kids training on turf
- Coach working 1-on-1 with student
- Parent lounge area
- Birthday party setup (if available)
- Facility exterior/entrance

**Note:** All photos appear to be authentic (not stock) — this is a major strength. Preserve this authenticity in the redesign.

---

## URLs to Preserve (for 301 Redirects)

If changing URL structure, set up redirects from old Wix URLs:
- /freetrialclass
- /privatesoccertraining
- /juniordribblers
- /kidsfitnessacademy
- /schedule
- /terms-and-conditions
- (and all individual program pages)

These URLs may have been indexed by Google and linked from external sources. Breaking them without redirects would lose SEO value.
