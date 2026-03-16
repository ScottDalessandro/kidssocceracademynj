# Pricing, Business Strategy & Upsell Roadmap

## WaaS Retainer Structure

**Price:** $175/month, 12-month commitment, $0 upfront build fee

### What's Included
- Custom Astro website (replaces Wix)
- Vercel hosting with SSL
- Daily automated review sync/rebuild via GitHub Actions cron + Vercel Deploy Hook
- TinaCMS admin dashboard for owner self-service edits
- Up to 2 hours/month of content updates (class time changes, seasonal program swaps, new photos)
- Embedded Google reviews with proper attribution (auto-refreshing)
- Lead capture form with email confirmations via Resend + Google Sheets logging
- PostHog analytics with monthly performance summary (delivered via Loom or screenshot)
- Ongoing site performance monitoring

### What's NOT Included (Upsell Territory)
- PAL Calls integration (separate $299-399/month engagement)
- Major redesigns or new page builds beyond initial scope
- Email marketing or automation setup
- Paid ad management (Google Ads, Facebook Ads)
- Parent portal / booking system rebuild
- Gamification / leveling system
- Chat widget or chatbot

### Infrastructure Costs (Your Overhead)
- Vercel hosting: $0 (free tier)
- Resend emails: $0 (free tier, 3,000/month)
- Google Places API: $0 (free $200/month credit)
- PostHog analytics: $0 (free tier, 1M events/month)
- TinaCMS: $0 (free tier)
- Google Sheets API: $0
- GitHub Actions: $0 (free for public repos, 2,000 min/month for private)
- **Total monthly overhead: ~$0**
- **Your margin at $175/month: ~100%** minus your time

### Revenue Math
- $175/month × 12 months = $2,100/year
- Estimated build time: 25-35 hours
- Estimated monthly maintenance: 1-3 hours (most months closer to 1)
- Effective hourly rate on build: ~$60-85/hour (factoring in that maintenance is mostly passive)
- With PAL Calls upsell: $175 + $299 = $474/month from single client

---

## Site Ownership Clause

Include in agreement: site ownership remains with you (the developer) until the 12-month term completes, at which point full ownership transfers to the client. This protects you if they cancel early. Standard WaaS practice.

---

## Sales Approach

### Pre-Meeting
- Build the site to 85-90% completion speculatively
- Leave strategic placeholder spots:
  - Coach bios section with placeholder headshots + note "we'll add your team here"
  - Empty video testimonial slot
  - Any content you genuinely don't have access to
- This creates engagement (owner needs to participate to finish it) and prevents "it's already done, why pay monthly?"

### Meeting Flow
1. Open with relationship: "I've been here, I left a review, I love what you've built"
2. Show the new site on your laptop — let him react
3. Demo on mobile specifically (this is where the Wix site really suffers)
4. Walk through key differences:
   - Load speed (Astro < 1 second vs Wix 4-6 seconds)
   - His 33 five-star reviews front and center
   - Professional booking form (not Google Forms)
   - Clean navigation (7 items vs 13)
   - Mobile sticky CTA
   - Coach bios section (placeholder — "this is where your team goes")
5. Present $175/month with $0 upfront as the cost to go live
6. Frame ROI: "If this site generates even 3-4 extra trial bookings per month at $150-200/member, it pays for itself 3-4x over"

### Objection Handling
- **"I'm only paying $20/month for Wix"** → "And it's converting at maybe 1-2%. My site will convert at 5-8%. That difference is dozens of families per year."
- **"Can I just pay you once to build it?"** → "I could, but then who maintains it, keeps reviews fresh, handles updates, monitors performance? The monthly model means I'm your ongoing digital partner, not a contractor who disappears."
- **"I need to think about it"** → "Totally fair. The site is built and ready to go whenever you are. I'll leave you with a link to preview it."

---

## Upsell Roadmap

### Phase 1: Website (NOW)
- $175/month WaaS retainer
- Timeline: build in 1-2 weeks, pitch at meeting

### Phase 2: PAL Calls (Month 2-3)
- $299-399/month
- Post-trial character phone call to kids (soccer character congratulating them)
- Automated Google review request to parents
- Trading card system for engagement
- Pitch angle: "You're at 33 reviews. Let's get you to 100 by end of year."
- This is your highest-value upsell and perfectly aligned with the kids soccer vertical

### Phase 3: Automation & Nurture (Month 4-6)
- Email nurture sequence for trial no-shows or unconverted leads
- SMS reminders for upcoming classes
- Seasonal re-engagement campaigns
- Could be bundled into PAL Calls or separate engagement
- GoHighLevel pipeline if client is ready for full CRM

### Phase 4: Advanced Features (Month 6+)
- Parent portal / dashboard
- Progress tracking / gamification (KidStrong-inspired leveling)
- Online registration replacing Zen Planner
- Blog / content marketing for SEO
- These are major builds that justify project fees or retainer increases

---

## Ideas We Discussed But Deprioritized

### Chat Widget — SKIP
- No one at KSA is monitoring a chat widget all day
- Unanswered chat is worse than no chat
- A contact form solves 90% of the use case at 10% of the complexity
- Could revisit as a voice AI play (your expertise) but not for v1

### Exit-Intent Popup — YES, include in build
- Trigger when parent is about to leave without booking
- "Wait — book a FREE trial class before you go!"
- One popup, one time, single form field (email or phone)
- Pitch it to owner as "lead capture for the 95% of visitors who leave without booking"

### Parent Portal — PHASE 4
- Real need (Zen Planner login experience is bad)
- But massive scope expansion beyond website redesign
- Phase 1 approach: make Zen Planner integration seamless with embedded login link and clear "Manage My Account" nav item
- Custom portal is a separate project/engagement

### Gamification (KidStrong-style) — NOT A WEBSITE THING
- Program design, not web design
- Leveling system based on attendance (attend X sessions → rank up to next tier)
- Revenue play: parents buy the tier t-shirt ($15-20)
- Plant the seed: "If you ever want to do a leveling system, we could build a parent dashboard that tracks all of that"
- Don't include in scope or pricing

### Google Business Profile Optimization Guidance — SKIP FROM RETAINER
- Falls more into marketing/consulting territory
- PAL Calls covers the review generation piece
- Don't add fuzzy consulting deliverables to a $175/month retainer
