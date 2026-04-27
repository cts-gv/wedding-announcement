/**
 * ============================================================
 *  WEDDING SITE CONFIG — EDIT EVERYTHING HERE
 *  All photos, names, dates, text, colors, and links live here.
 *  You never need to touch index.html to change content.
 * ============================================================
 */

const WEDDING = {

  // ── COUPLE ──────────────────────────────────────────────
  names: {
    partner1: "Eric",
    partner2: "Maria",
    combined: "Eric & Maria",
    hashtag:  "#EricAndMaria2027"
  },

  date: {
    display:  "September 25, 2027",
    location: "Grandview, Washington",
    iso:      "2027-09-25",
    time:     "4:00 PM"
  },

  // ── COLORS ──────────────────────────────────────────────
  // Change any hex value to retheme the entire site instantly.
  colors: {
  primary:       "#1a3a8f",   // Royal blue — buttons, headings, accents
  primary_light: "#2d52b8",   // Lighter royal blue — hover states
  secondary:     "#e8c4a8",   // Champagne/blush — decorative accents
  dark:          "#0f2260",   // Deep navy — footer, overlays
  light:         "#fdf8f5",   // Warm blush-white — page background
  card_bg:       "#ffffff",   // Card backgrounds
  text:          "#1a1a2e",   // Deep navy-tinted text
  text_light:    "#5a5a7a"    // Soft muted text
},

  // ── PHOTOS ──────────────────────────────────────────────
  // HOW TO CHANGE PHOTOS:
  //   1. Upload your photo to the /images/ folder in your GitHub repo
  //   2. Update the path below, e.g. "images/hero-couple.jpg"
  //   For external URLs use the full https:// address.

  photos: {
    // ── Heroes ──────────────────────────────────────────
    heroOurStory:     "images/golden-hour-sunset-over-vineyard.webp",
    heroWeddingParty: "images/wedding-party.webp",
    heroWeekend:      "images/hero-weekend-pic.jpg",
    heroRegistry:     "images/new-life-2.jpg",
    heroMarried:      "images/hero-married.jpg",

    // ── Our Story ───────────────────────────────────────
    howWeMet:  "images/how-we-met.webp",
    howItWent: "images/how-it-went.jpg",
    proposal:  "images/proposal.jpg",

    // ── Weekend Events ───────────────────────────────────
    eventFriday:   "images/event-friday.jpg",
    eventSaturday: "images/event-saturday.jpg",
    eventSunday:   "images/event-sunday.jpg",

    // ── Wedding Party ────────────────────────────────────
    bm1: "images/bm1.jpg",
    bm2: "images/bm2.jpg",
    bm3: "images/bm3.jpg",
    bm4: "images/bm4.jpg",
    bm5: "images/bm5.jpg",
    gm1: "images/gm1.jpg",
    gm2: "images/gm2.jpg",
    gm3: "images/gm3.jpg",
    gm4: "images/gm4.jpg",
    gm5: "images/gm5.jpg",
    vip1: "images/vip1.jpg",
    vip2: "images/vip2.jpg",

    // ── Gallery ──────────────────────────────────────────
    // Add or remove paths — gallery builds automatically
    gallery: [
      "images/gallery-01.jpg",
      "images/gallery-02.jpg",
      "images/gallery-03.jpg",
      "images/gallery-04.jpg",
      "images/gallery-05.jpg",
      "images/gallery-06.jpg",
      "images/gallery-07.jpg",
      "images/gallery-08.jpg",
      "images/gallery-09.jpg",
      "images/gallery-10.jpg",
      "images/gallery-11.jpg",
      "images/gallery-12.jpg"
    ]
  },

  // ── PLACEHOLDERS (shown until real photos are added) ─────
  placeholder:         "https://placehold.co/1200x800/4b2e83/ffffff?text=Photo+Coming+Soon",
  placeholderHero:     "https://placehold.co/1600x700/4b2e83/ffffff?text=Add+Hero+Photo",
  placeholderPortrait: "https://placehold.co/400x500/4b2e83/ffffff?text=Photo",
  placeholderEvent:    "https://placehold.co/800x500/4b2e83/ffffff?text=Event+Photo",

  // ── OUR STORY ───────────────────────────────────────────
  story: {
    heroCaption: "Surrounded by love, laughter, and a little bit of magic.",

    howWeMet: {
      title:   "How We Met",
      caption: "The beginning of everything.",
      // ↓ Replace with your story
      text:    "Write a few heartfelt paragraphs here about how your paths crossed, the first impressions, and the moment you realized something special was beginning."
    },

    howItWent: {
      title:   "How It Went",
      caption: "Adventures, inside jokes, and countless memories.",
      text:    "Share the milestones, the trips, the quiet nights in, and the moments that made you both realize this was the real thing."
    },

    proposal: {
      title:   "The Proposal",
      caption: "A moment we'll never forget.",
      text:    "Tell the story of the big question — where it happened, how it felt, and any surprises along the way."
    }
  },

  // ── WEDDING PARTY ────────────────────────────────────────
  party: {
    heroCaption: "The friends and family who stand beside us.",

    bridesmaids: [
      { name: "Bridesmaid Name", role: "Maid of Honor" },
      { name: "Bridesmaid Name", role: "Bridesmaid" },
      { name: "Bridesmaid Name", role: "Bridesmaid" },
      { name: "Bridesmaid Name", role: "Bridesmaid" },
      { name: "Bridesmaid Name", role: "Bridesmaid" }
    ],

    groomsmen: [
      { name: "Groomsman Name", role: "Best Man" },
      { name: "Groomsman Name", role: "Groomsman" },
      { name: "Groomsman Name", role: "Groomsman" },
      { name: "Groomsman Name", role: "Groomsman" },
      { name: "Groomsman Name", role: "Groomsman" }
    ],

    vips: [
      { name: "Officiant Name",   role: "Officiant" },
      { name: "Ring Bearer Name", role: "Ring Bearer" }
    ]
  },

  // ── THE WEEKEND ──────────────────────────────────────────
  weekend: {
    heroCaption: "A beautiful weekend in Washington wine country.",

    events: [
      {
        title:       "Friday — Welcome Gathering",
        time:        "6:00 PM",
        location:    "Local Winery — Grandview, WA",        // ← update
        description: "A relaxed evening to kick off the celebration. Enjoy wine, small bites, and good company as we welcome everyone to Washington wine country.",
        photoKey:    "eventFriday",
        reverse:     false
      },
      {
        title:       "Saturday — Ceremony & Reception",
        time:        "4:00 PM",
        location:    "Vineyard Estate — Grandview, WA",      // ← update
        description: "Surrounded by rolling vineyards and the people we love most, we'll exchange vows and celebrate with dinner, dancing, and unforgettable moments.",
        dresscode:   "Black Tie Optional / Garden Formal",
        photoKey:    "eventSaturday",
        reverse:     true
      },
      {
        title:       "Sunday — Farewell Brunch",
        time:        "10:00 AM",
        location:    "Countryside Barn — Grandview, WA",     // ← update
        description: "Before everyone heads home, join us for a cozy brunch to wrap up the weekend with warm hugs, good food, and final toasts.",
        photoKey:    "eventSunday",
        reverse:     false
      }
    ]
  },

  // ── GALLERY ──────────────────────────────────────────────
  gallery: {
    title:    "Photo Gallery",
    subtitle: "A few of our favorite moments in the vineyards."
  },

  // ── RSVP ─────────────────────────────────────────────────
  rsvp: {
    title:    "RSVP",
    subtitle: "We would love to know if you can join us.",
    deadline: "August 1, 2027",   // ← update

    mealOptions: [
      "Chicken — Herb Roasted Chicken Breast",
      "Beef — Prime Rib with Au Jus",
      "Vegetarian — Wild Mushroom Risotto",
      "Vegan — Roasted Vegetable Tart",
      "Child's Plate"
    ],

    // ── FORMSPREE SETUP ──────────────────────────────────
    // 1. Go to https://formspree.io → free account
    // 2. New Form → "Wedding RSVP" → copy endpoint
    // 3. Paste below:
    formspreeEndpoint: "https://formspree.io/f/YOUR_RSVP_FORM_ID",  // ← REPLACE

    successMessage: "You're all set! We're so excited to celebrate with you. 🥂",
    declineMessage: "We're so sorry you can't make it — you'll be in our hearts on the big day. 💜",
    note:           "Having trouble? Email us at your@email.com"  // ← update
  },

  // ── REGISTRY ─────────────────────────────────────────────
  registry: {
    heroCaption: "Your Love Is the Greatest Gift",
    heroSubtitle:"But if you'd like to help us start our new life together, here are a few ideas.",
    title:    "Our Registry",
    subtitle: "Thank you for your love, support, and generosity. We are so grateful.",

    // Add, remove, or rename buttons freely
    buttons: [
      { label: "Amazon Registry", url: "https://www.amazon.com/wedding",       icon: "🎁" },  // ← update
      { label: "Target Registry", url: "https://www.target.com/gift-registry", icon: "🛍️" }, // ← update
      { label: "Honeyfund",       url: "https://www.honeyfund.com",            icon: "🍯" }   // ← update
    ]
  },

  // ── WE ARE MARRIED ───────────────────────────────────────
  married: {
    heroCaption: "Thank you for being part of our journey.",
    title:    "A Beautiful Beginning",
    subtitle: "We are so grateful for the love and support from our family and friends.",
    // ↓ Update this after the wedding
    message:  "Our wedding day was filled with joy, laughter, and unforgettable moments. Thank you for celebrating with us and for being part of our story. We can't wait to see what the future holds."
  },

  // ── MESSAGES ─────────────────────────────────────────────
  messages: {
    title:    "Messages",
    subtitle: "Share your love and blessings with us.",
    intro:    "Leave a note, a wish, or a memory — we treasure every word.",

    // ── FORMSPREE SETUP ──────────────────────────────────
    // 1. Go to https://formspree.io → free account
    // 2. New Form → "Wedding Messages" → copy endpoint
    // 3. Paste below:
    formspreeEndpoint: "https://formspree.io/f/YOUR_MESSAGES_FORM_ID",  // ← REPLACE

    successMessage: "Thank you for your message! We'll treasure it always. 💜"
  },

  // ── NAVIGATION ───────────────────────────────────────────
  nav: [
    { label: "Our Story",      href: "#our-story" },
    { label: "Wedding Party",  href: "#wedding-party" },
    { label: "The Weekend",    href: "#the-weekend" },
    { label: "Gallery",        href: "#gallery" },
    { label: "RSVP",           href: "#rsvp" },
    { label: "Registry",       href: "#registry" },
    { label: "We Are Married", href: "#we-are-married" },
    { label: "Messages",       href: "#messages" }
  ],

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    line1:   "Eric & Maria — September 25, 2027",
    line2:   "Grandview, Washington",
    hashtag: "#EricAndMaria2027"
    credit: 'Created by <a href="https://www.ctechsolution.tech/">Community Tech Solutions</a>'
  }

};

window.WEDDING = WEDDING;
