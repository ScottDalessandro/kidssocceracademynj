# Design Direction & Component Checklist

## Design Principles

1. **Trust-first:** Every section should answer the parent's internal question: "Is this safe and professional?"
2. **Mobile-first:** Nearly all parents will find this site on their phone while searching or from a text/social link
3. **Speed:** Astro's zero-JS-by-default gives us sub-1-second loads. Don't add unnecessary client-side JS.
4. **Authentic:** Use their real photos. No stock photos. The facility looks great — let it show.
5. **Clean, not clever:** Simple navigation, clear CTAs, readable copy. This isn't a design portfolio piece — it's a conversion machine.

---

## Homepage Components (Top to Bottom)

### 1. Header / Nav
- Logo (left)
- Nav items: Home | Programs ▾ | Schedule | About Us | Birthday Parties | FAQ | Contact
- CTA button (right): "Book Free Trial" — stands out visually (contrast color)
- Mobile: hamburger menu, 7 items max
- Sticky on scroll

### 2. Hero Section
- Full-width background image (facility or kids playing)
- H1 value prop: "Bergen County's Premier Indoor Soccer Training for Ages 18 Months to High School"
- Subheadline: "Join [33] families who rated us 5.0 ★ on Google" (dynamic from API)
- Primary CTA: "Book a Free Trial — It's Free"
- Secondary: "View Programs"

### 3. Social Proof Bar
- "Rated 5.0 ★★★★★ on Google · 33 Reviews"
- Google Maps attribution logo
- Link to GBP reviews

### 4. Programs Overview
- Grid or cards layout
- Each program: name, age range, brief description, image, "Learn More" link
- Programs: Tiny Kickers, Mini Strikers, Little Legends, Mini Marvels, Junior Dribblers, Kids Fitness Academy

### 5. Why Choose Us / Trust Section
- 3-4 cards or columns:
  - "Professional Certified Coaches" (icon + brief text)
  - "Clean, Modern Indoor Facility" (icon + brief text)
  - "Ages 18 Months to High School" (icon + brief text)
  - "Free Trial Class — No Commitment" (icon + brief text)

### 6. Google Reviews Carousel
- Embedded reviews from Google Places API or Featurable
- Author name, star rating, review text, date
- Google Maps attribution
- "See All Reviews on Google" link to GBP
- This is the MOST IMPORTANT section for conversion

### 7. Facility Gallery
- 4-6 authentic photos
- Indoor turf, kids training, parent lounge, coach interaction
- Optional: video embed (if they have any content on YouTube/TikTok)

### 8. Free Trial CTA Block
- Full-width background (different color/image from hero)
- "Ready to Get Started? Book a Free Trial Class"
- Brief copy: "No payment required. No commitment. Just soccer."
- CTA button → scrolls to form or navigates to /free-trial

### 9. Footer
- Logo
- NAP: name, address, phone (consistent for local SEO)
- Quick links: Programs, Schedule, Free Trial, Contact, FAQ
- Social icons: Facebook, Instagram, YouTube, TikTok
- Google Maps embed (small)
- "© 2026 Kids Soccer Academy. All rights reserved."
- Privacy Policy | Terms of Service links

### 10. Sticky Mobile CTA (Fixed Bottom)
- "Book Free Trial" button fixed to bottom of screen on mobile
- Only shows after scrolling past hero (don't cover hero CTA)
- Click-to-call icon beside it (phone icon)

### 11. Exit-Intent Popup
- Triggers when cursor moves toward browser close/back (desktop)
- On mobile: triggers after ~60 seconds of inactivity or scroll-up
- Content: "Wait! Book a FREE trial before you go"
- Single field: email or phone
- "Spots are limited" urgency text
- Dismiss button clearly visible
- One-time only (cookie/localStorage to prevent repeat)

---

## Program Page Template

Each program page follows same template:
- Hero with program name + age range + action shot
- Description of what kids learn
- Session length and class times/schedule
- "What to Bring" or "What to Expect" section
- CTA: "Book a Free Trial for [Program Name]"
- Related programs (other age groups)

---

## Free Trial Page

- H1: "Book Your Free Trial Class"
- Brief copy: what to expect, no payment, no commitment
- EMBEDDED FORM (not external link):
  - Parent name
  - Email
  - Phone
  - Child's name
  - Child's age / program interest (dropdown)
  - Preferred day/time (dropdown based on schedule)
  - Submit button: "Reserve My Free Trial"
- Below form: Google reviews carousel (reinforcement)
- FAQ accordion: common trial questions

---

## About / Coaches Page (NEW — Doesn't Exist Currently)

- Facility story / mission
- Coach bios with:
  - Photo
  - Name
  - Role / programs they teach
  - Credentials (USSF, UEFA licenses if applicable)
  - Years of experience
  - Brief personal bio
- Safety section:
  - Background checks
  - Insurance coverage
  - CPR/first aid certified
  - Concussion protocols
  - (Get specifics from owner at meeting)

---

## Contact Page (NEW — Doesn't Exist Currently)

- H1: "Get in Touch"
- Contact form: name, email, phone, message
- Address with embedded Google Map (interactive)
- Phone number (click-to-call on mobile)
- Email address
- Business hours
- Social media links

---

## Schedule Page (Currently Broken)

- Clean table or grid layout
- Organized by day of week
- Each entry: time, program name, age range, duration
- CTA after schedule: "Find your class and book a free trial"
- Make this CMS-editable via TinaCMS so owner can update times

---

## Key Conversion Elements Checklist

- [ ] Primary CTA visible above the fold on every page
- [ ] Sticky mobile CTA (bottom of screen)
- [ ] Click-to-call button on mobile
- [ ] Google reviews embedded on homepage
- [ ] "5.0 ★ on Google" badge in hero or social proof bar
- [ ] Native embedded booking form (NOT Google Forms)
- [ ] Confirmation email on form submission (via Resend)
- [ ] Exit-intent popup with trial offer
- [ ] Coach bios with photos and credentials
- [ ] Safety/certification information
- [ ] Google Map embed on contact page
- [ ] LocalBusiness schema markup
- [ ] AggregateRating schema markup
- [ ] FAQPage schema markup on FAQ page
- [ ] Open Graph meta tags for social sharing
- [ ] Mobile-first responsive design throughout
- [ ] Sub-1-second load time (leverage Astro's static generation)
