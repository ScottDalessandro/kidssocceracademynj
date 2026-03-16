# KSA Redesign — TODO
### Based on KidStrong competitive analysis + Hormozi framework (March 12, 2026)
See `WEBSITE-REDESIGN-STRATEGY.md` for full context and research behind each item.

---

## 🔴 Must-Do Before Launch

- [ ] **Stats/proof bar below hero** — Add 3-stat section between hero and programs timeline (e.g. "33 Five-Star Reviews" / "500+ Kids Trained" / "Ages 18mo to High School")
- [x] **Video section below the fold** — Custom optimized video now in hero section.
- [x] **Soft urgency near CTAs** — Added "Class sizes are small — spots fill each session" near hero and footer Book Free Trial buttons
- [x] **Free trial page copy rewrite** — Replaced clinical language with empathy-driven copy. New "Here's What Happens" section, warmer FAQ, enhanced success message with next steps.
- [ ] **Real facility photos** — Replace all placeholder images (hero, gallery, program pages). Single biggest conversion lift once live.
- [ ] **Real coach headshots** — Replace user-circle icons on About page and homepage coach section

---

## 🟡 Should-Do Before Launch

- [x] **Free Trial Week page** — Created `/free-trial-week` with up to 3 classes offer. Hormozi "grand slam" offer stack. Both pages cross-link.
- [ ] **Exit-intent popup** — Designed but not implemented. "Before you go — book a free trial, takes 30 seconds." One-time per session via localStorage.
- [ ] **Program-specific testimonials** — Currently same testimonial on multiple pages. Get at least 1 unique quote per age group if possible.
- [x] **"Bring a Friend" option on trial form** — Added toggle on both free trial pages. Reveals friend's child name, parent name, and contact.

---

## 🟢 Post-Launch Optimization

- [ ] **Post-booking email sequence** (via Resend) — Biggest gap vs. KidStrong's phone-call model:
  - Immediately: Confirmation + what to expect + what to bring + parking
  - 24hr before trial: Text reminder with coach name
  - Same day after trial: "How did [child] like it?" + enrollment next steps
  - 48hr if not enrolled: Follow-up with parent testimonial
  - 1 week if not enrolled: Final gentle nudge
- [ ] **Google Places API integration** — Live review count instead of hardcoded "33"
- [ ] **"Which Program?" quiz lead magnet** — Asks age + experience → recommends program. Captures email for exploratory parents.
- [ ] **A/B test headline** — "Every age. Every stage. One place." vs. alternatives
- [ ] **Parent's Guide downloadable PDF** — "How to Choose a Kids Soccer Program" — lead magnet for comparison shoppers
- [ ] **Age-based program finder on homepage** — "How old is your child?" dropdown → shows relevant classes only
