# 💜 Wedding Website — Single Page Template

A clean, elegant single-page wedding website built for GitHub Pages.
Soft Playfair Display style, light background, rounded cards.
All content managed from one config file.

---

## 🚀 Quick Start

### File Structure
```
/
├── index.html          ← Single page — rarely needs editing
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── config.js       ← ★ EDIT THIS FILE for all content & photos
│   └── main.js         ← All behavior (don't need to edit)
├── images/
│   └── (your photos go here)
└── README.md
```

### Go live on GitHub Pages
1. Create a GitHub repo and upload all files
2. **Settings → Pages → Source → main branch / root**
3. Live at: `https://yourusername.github.io/repo-name/`

---

## ✏️ How to Change Everything

**Open `js/config.js`** — it's the only file you need.

### Change Photos
1. Upload photos to the `/images/` folder in your GitHub repo
2. Update the path in `config.js`:
   ```js
   photos: {
     heroOurStory: "images/your-photo.jpg",
     howWeMet:     "images/how-we-met.jpg",
     // etc.
   }
   ```

### Change Colors
```js
colors: {
  primary:      "#4b2e83",   // Main purple
  primary_light:"#6a42b3",   // Hover purple
  secondary:    "#c9a84c",   // Gold accents
  // etc.
}
```

### Change Text
Everything — names, dates, story text, event details — is in `config.js`.

### Add/Remove Gallery Photos
```js
photos: {
  gallery: [
    "images/gallery-01.jpg",
    "images/gallery-02.jpg",
    // add as many as you want
  ]
}
```

### Change Registry Buttons
```js
registry: {
  buttons: [
    { label: "Amazon Registry", url: "https://...", icon: "🎁" },
    { label: "Target Registry", url: "https://...", icon: "🛍️" },
    // add or remove buttons freely
  ]
}
```

---

## 📬 Setting Up Formspree

You need **two separate forms** — one for RSVP, one for Messages.

1. Go to [formspree.io](https://formspree.io) → create free account
2. **+ New Form** → "Wedding RSVP" → copy endpoint
3. **+ New Form** → "Wedding Messages" → copy endpoint
4. Paste both into `config.js`:
   ```js
   rsvp:     { formspreeEndpoint: "https://formspree.io/f/YOUR_RSVP_ID" },
   messages: { formspreeEndpoint: "https://formspree.io/f/YOUR_MESSAGES_ID" }
   ```
5. The yellow setup boxes on the page disappear automatically.

**Free tier:** 50 submissions/month per form.

---

## 🎨 Reusing as a Template

1. Open `js/config.js`
2. Change names, date, colors, all photos, all text
3. Done — every section updates from the config

---

## 💡 Photo Size Guide

| Section          | Recommended Size |
|------------------|-----------------|
| Hero images      | 1600 × 700 px   |
| Story sections   | 800 × 500 px    |
| Party portraits  | 400 × 500 px    |
| Event photos     | 800 × 500 px    |
| Gallery          | 800 × 600 px    |

Compress photos to under 500KB using [squoosh.app](https://squoosh.app).
