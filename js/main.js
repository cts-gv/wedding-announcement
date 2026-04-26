/**
 * main.js — all site behavior
 * Handles: CSS variable injection, nav build, image population,
 * gallery lightbox, RSVP form, messages form, hearts, scroll fade
 */

document.addEventListener('DOMContentLoaded', () => {
  const W = window.WEDDING;

  // ── Apply CSS variables from config ──────────────────────
  const root = document.documentElement;
  root.style.setProperty('--primary',       W.colors.primary);
  root.style.setProperty('--primary-light', W.colors.primary_light);
  root.style.setProperty('--secondary',     W.colors.secondary);
  root.style.setProperty('--dark',          W.colors.dark);
  root.style.setProperty('--light',         W.colors.light);
  root.style.setProperty('--card-bg',       W.colors.card_bg);
  root.style.setProperty('--text',          W.colors.text);
  root.style.setProperty('--text-light',    W.colors.text_light);

  // ── Build navigation ─────────────────────────────────────
  const navList = document.getElementById('nav-links');
  if (navList) {
    W.nav.forEach(item => {
      const li  = document.createElement('li');
      const a   = document.createElement('a');
      a.href      = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      navList.appendChild(li);
    });
  }

  // Nav brand
  const brand = document.getElementById('nav-brand');
  if (brand) brand.textContent = W.names.combined;

  // Mobile hamburger toggle
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', document.body.classList.contains('nav-open'));
    });
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Close menu on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
      });
    });
  }

  // ── Active nav link on scroll ─────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ── Populate photos ───────────────────────────────────────
  function src(key, type = 'default') {
    const path = W.photos[key];
    if (!path) {
      if (type === 'hero')     return W.placeholderHero;
      if (type === 'portrait') return W.placeholderPortrait;
      if (type === 'event')    return W.placeholderEvent;
      return W.placeholder;
    }
    return path;
  }

  // Heroes
  setImg('hero-our-story',     src('heroOurStory',     'hero'));
  setImg('hero-wedding-party', src('heroWeddingParty',  'hero'));
  setImg('hero-weekend',       src('heroWeekend',       'hero'));
  setImg('hero-registry',      src('heroRegistry',      'hero'));
  setImg('hero-married',       src('heroMarried',       'hero'));

  // Story
  setImg('img-how-we-met',  src('howWeMet'));
  setImg('img-how-it-went', src('howItWent'));
  setImg('img-proposal',    src('proposal'));

  // Wedding party
  ['bm1','bm2','bm3','bm4','bm5',
   'gm1','gm2','gm3','gm4','gm5',
   'vip1','vip2'].forEach(id => {
    setImg(id, src(id, 'portrait'));
  });

  // Weekend events
  setImg('event-friday',   src('eventFriday',   'event'));
  setImg('event-saturday', src('eventSaturday', 'event'));
  setImg('event-sunday',   src('eventSunday',   'event'));

  // Gallery — build dynamically
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    W.photos.gallery.forEach((photoPath, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item fade-in';

      const img = document.createElement('img');
      img.src   = photoPath || W.placeholder;
      img.alt   = `Gallery photo ${i + 1}`;
      img.loading = 'lazy';

      item.appendChild(img);
      galleryGrid.appendChild(item);
    });

    // Re-attach lightbox listeners after dynamic build
    initLightbox();
  }

  // ── Populate text content ─────────────────────────────────
  setText('couple-names',    W.names.combined);
  setText('wedding-date',    W.date.display);
  setText('wedding-location',W.date.location);
  setText('footer-line1',    W.footer.line1);
  setText('footer-line2',    W.footer.line2);
  setText('footer-hashtag',  W.footer.hashtag);

  // Story
  setText('story-caption',        W.story.heroCaption);
  setText('how-we-met-title',     W.story.howWeMet.title);
  setText('how-we-met-text',      W.story.howWeMet.text);
  setText('how-we-met-caption',   W.story.howWeMet.caption);
  setText('how-it-went-title',    W.story.howItWent.title);
  setText('how-it-went-text',     W.story.howItWent.text);
  setText('how-it-went-caption',  W.story.howItWent.caption);
  setText('proposal-title',       W.story.proposal.title);
  setText('proposal-text',        W.story.proposal.text);
  setText('proposal-caption',     W.story.proposal.caption);

  // Wedding party
  setText('party-caption',        W.party.heroCaption);
  buildPartyCards('bridesmaids-grid', W.party.bridesmaids, 'bm', false);
  buildPartyCards('groomsmen-grid',   W.party.groomsmen,   'gm', false);
  buildPartyCards('vips-grid',        W.party.vips,        'vip', true);

  // Weekend
  setText('weekend-caption', W.weekend.heroCaption);
  buildEvents();

  // Gallery
  setText('gallery-title',    W.gallery.title);
  setText('gallery-subtitle', W.gallery.subtitle);

  // RSVP
  setText('rsvp-title',    W.rsvp.title);
  setText('rsvp-subtitle', W.rsvp.subtitle);
  setText('rsvp-deadline', 'Kindly reply by ' + W.rsvp.deadline);
  setText('rsvp-note',     W.rsvp.note);
  buildMealSelect('guest1-meal');

  // Registry
  setText('registry-hero-caption',  W.registry.heroCaption);
  setText('registry-hero-subtitle', W.registry.heroSubtitle);
  setText('registry-title',         W.registry.title);
  setText('registry-subtitle',      W.registry.subtitle);
  buildRegistryButtons();

  // Married
  setText('married-caption',  W.married.heroCaption);
  setText('married-title',    W.married.title);
  setText('married-subtitle', W.married.subtitle);
  setText('married-message',  W.married.message);

  // Messages
  setText('messages-title',    W.messages.title);
  setText('messages-subtitle', W.messages.subtitle);
  setText('messages-intro',    W.messages.intro);

  // ── Countdown timer ───────────────────────────────────────
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    function tick() {
      const diff = new Date(W.date.iso + 'T16:00:00') - new Date();
      if (diff <= 0) {
        countdownEl.innerHTML = `<div class="countdown-unit"><span class="countdown-number">Married!</span></div>`;
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      countdownEl.innerHTML = [
        { n: d, l: 'Days' }, { n: h, l: 'Hours' },
        { n: m, l: 'Min' },  { n: s, l: 'Sec' }
      ].map(u => `
        <div class="countdown-unit">
          <span class="countdown-number">${String(u.n).padStart(2,'0')}</span>
          <span class="countdown-label">${u.l}</span>
        </div>
      `).join('');
    }
    tick();
    setInterval(tick, 1000);
  }

  // ── Hide Formspree setup notes when configured ────────────
  checkSetupNote('rsvp-setup-note',      W.rsvp.formspreeEndpoint,      'YOUR_RSVP_FORM_ID');
  checkSetupNote('messages-setup-note',  W.messages.formspreeEndpoint,  'YOUR_MESSAGES_FORM_ID');

  // ── RSVP form ─────────────────────────────────────────────
  initRsvpForm();

  // ── Messages form ─────────────────────────────────────────
  initMessagesForm();

  // ── Scroll fade-in ────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.wp-card, .event-block, .fade-in, .two-column');
  fadeEls.forEach(el => el.classList.add('fade-in'));

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => fadeObserver.observe(el));

  // ── Floating hearts (Our Story section only) ──────────────
  const heartsContainer = document.getElementById('hearts-container');
  const ourStorySection  = document.getElementById('our-story');
  const hearts = ['♥','♡','❥'];

  function spawnHeart() {
    if (!ourStorySection) return;
    const rect = ourStorySection.getBoundingClientRect();
    // Only spawn when Our Story is visible
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const h = document.createElement('span');
    h.className   = 'heart';
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.left  = (2 + Math.random() * 96) + '%';
    h.style.fontSize = (10 + Math.random() * 10) + 'px';

    const duration = 7 + Math.random() * 6;
    h.style.animationDuration = duration + 's';
    h.style.animationDelay    = (Math.random() * 2) + 's';
    h.style.setProperty('--drift', ((Math.random() - 0.5) * 80) + 'px');
    h.style.setProperty('--spin',  ((Math.random() - 0.5) * 60) + 'deg');

    heartsContainer.appendChild(h);
    setTimeout(() => h.remove(), (duration + 2.5) * 1000);
  }

  setInterval(spawnHeart, 1600);

  // ── Hero parallax ─────────────────────────────────────────
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.hero-image').forEach(img => {
      const rect = img.closest('.hero').getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        img.style.transform = `scale(1.03) translateY(${rect.top * 0.08}px)`;
      }
    });
  }, { passive: true });

});

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function setImg(id, src) {
  const el = document.getElementById(id);
  if (el) el.src = src;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function checkSetupNote(noteId, endpoint, placeholder) {
  const note = document.getElementById(noteId);
  if (note && endpoint && !endpoint.includes(placeholder)) {
    note.remove();
  }
}

function buildPartyCards(gridId, members, photoPrefix, isVip) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  members.forEach((member, i) => {
    const photoKey = photoPrefix + (i + 1);
    const photoSrc = window.WEDDING.photos[photoKey] || window.WEDDING.placeholderPortrait;
    const card = document.createElement('div');
    card.className = 'wp-card fade-in' + (isVip ? ' vip' : '');
    card.innerHTML = `
      <img src="${photoSrc}" alt="${member.name}" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    `;
    grid.appendChild(card);
  });
}

function buildEvents() {
  const wrap = document.getElementById('events-wrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  window.WEDDING.weekend.events.forEach((ev, i) => {
    const photoSrc = window.WEDDING.photos[ev.photoKey] || window.WEDDING.placeholderEvent;
    const block = document.createElement('div');
    block.className = 'event-block fade-in' + (ev.reverse ? ' reverse' : '');
    block.innerHTML = `
      <div class="event-image-wrapper">
        <img src="${photoSrc}" alt="${ev.title}" loading="lazy" />
      </div>
      <div class="event-content">
        <h3>${ev.title}</h3>
        <p class="event-time">🕐 ${ev.time}</p>
        <p class="event-location">📍 ${ev.location}</p>
        ${ev.dresscode ? `<p class="event-dresscode">👗 ${ev.dresscode}</p>` : ''}
        <p class="desc">${ev.description}</p>
      </div>
    `;
    wrap.appendChild(block);
  });
}

function buildRegistryButtons() {
  const wrap = document.getElementById('registry-buttons');
  if (!wrap) return;
  wrap.innerHTML = '';
  window.WEDDING.registry.buttons.forEach(btn => {
    const a = document.createElement('a');
    a.className = 'registry-btn';
    a.href       = btn.url;
    a.target     = '_blank';
    a.rel        = 'noopener';
    a.innerHTML  = `<span class="btn-icon">${btn.icon}</span> ${btn.label}`;
    wrap.appendChild(a);
  });
}

function buildMealSelect(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = '<option value="" disabled selected>— Please choose —</option>';
  window.WEDDING.rsvp.mealOptions.forEach(opt => {
    const o = document.createElement('option');
    o.value = o.textContent = opt;
    sel.appendChild(o);
  });
}

function addGuestRow(n) {
  const container = document.getElementById('additional-guests');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'guest-row';
  row.id = `guest-row-${n}`;
  row.innerHTML = `
    <button type="button" class="remove-guest-btn" onclick="removeGuestRow(${n})">✕</button>
    <div class="guest-row-label">Guest ${n}</div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="g${n}-first">First Name</label>
        <input class="form-input" type="text" id="g${n}-first" name="guest_${n}_first" placeholder="First Name" />
      </div>
      <div class="form-group">
        <label class="form-label" for="g${n}-last">Last Name</label>
        <input class="form-input" type="text" id="g${n}-last" name="guest_${n}_last" placeholder="Last Name" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="g${n}-meal">Meal</label>
        <select class="form-select" id="g${n}-meal" name="guest_${n}_meal">
          <option value="" disabled selected>— Choose —</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="g${n}-dietary">Dietary Needs</label>
        <input class="form-input" type="text" id="g${n}-dietary" name="guest_${n}_dietary" placeholder="None, allergy, etc." />
      </div>
    </div>
  `;
  container.appendChild(row);
  buildMealSelect(`g${n}-meal`);
  // Animate in
  row.style.opacity = '0';
  row.style.transform = 'translateY(8px)';
  requestAnimationFrame(() => {
    row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    row.style.opacity = '1';
    row.style.transform = 'translateY(0)';
  });
}

function removeGuestRow(n) {
  const row = document.getElementById(`guest-row-${n}`);
  if (row) {
    row.style.opacity = '0';
    row.style.transform = 'translateY(-6px)';
    row.style.transition = 'all 0.25s ease';
    setTimeout(() => row.remove(), 280);
  }
}

window.removeGuestRow = removeGuestRow;

// ── RSVP Form ─────────────────────────────────────────────────
function initRsvpForm() {
  const W         = window.WEDDING;
  let attending   = null;
  let guestCount  = 1;

  const btnYes    = document.getElementById('btn-yes');
  const btnNo     = document.getElementById('btn-no');
  const attendSec = document.getElementById('rsvp-attending-fields');
  const declineSec= document.getElementById('rsvp-decline-section');
  const submitBtn = document.getElementById('rsvp-submit');
  const statusEl  = document.getElementById('rsvp-status');
  const form      = document.getElementById('rsvp-form');

  if (!form) return;

  function setAttending(val) {
    attending = val;
    document.getElementById('hidden-attending').value = val === 'yes' ? 'Yes, attending' : 'No, unable to attend';
    btnYes.className = 'toggle-btn' + (val === 'yes' ? ' selected-yes' : '');
    btnNo.className  = 'toggle-btn' + (val === 'no'  ? ' selected-no'  : '');
    if (attendSec)  attendSec.classList.toggle('visible', val === 'yes');
    if (declineSec) declineSec.classList.toggle('visible', val === 'no');
    if (submitBtn)  submitBtn.style.display = 'block';
  }

  if (btnYes) btnYes.addEventListener('click', () => setAttending('yes'));
  if (btnNo)  btnNo.addEventListener('click',  () => setAttending('no'));

  // Add guest button
  const addBtn = document.getElementById('add-guest-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      guestCount++;
      addGuestRow(guestCount);
    });
  }

  // Submit
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      if (!attending) {
        showStatus(statusEl, 'Please select whether you will be attending.', 'error');
        return;
      }

      if (attending === 'yes') {
        const first = document.getElementById('guest1-first')?.value.trim();
        const last  = document.getElementById('guest1-last')?.value.trim();
        const meal  = document.getElementById('guest1-meal')?.value;
        if (!first || !last) {
          showStatus(statusEl, 'Please enter your first and last name.', 'error');
          return;
        }
        if (!meal) {
          showStatus(statusEl, 'Please select a meal option.', 'error');
          return;
        }
      } else {
        const name = document.getElementById('decline-name')?.value.trim();
        if (!name) {
          showStatus(statusEl, 'Please enter your name so we know who sent this.', 'error');
          return;
        }
      }

      const isConfigured = W.rsvp.formspreeEndpoint && !W.rsvp.formspreeEndpoint.includes('YOUR_RSVP_FORM_ID');
      if (!isConfigured) {
        showStatus(statusEl, 'RSVP form not yet configured. See setup instructions above.', 'error');
        return;
      }

      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending…';

      try {
        const res = await fetch(W.rsvp.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (res.ok) {
          form.style.display = 'none';
          const msg = attending === 'yes' ? W.rsvp.successMessage : W.rsvp.declineMessage;
          const cls = attending === 'yes' ? 'success' : 'decline';
          showStatus(statusEl, msg, cls);
        } else {
          const data = await res.json();
          const err = data.errors ? data.errors.map(e => e.message).join(', ') : 'Something went wrong.';
          showStatus(statusEl, err, 'error');
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Send RSVP →';
        }
      } catch {
        showStatus(statusEl, 'Network error — please try again.', 'error');
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send RSVP →';
      }
    });
  }
}

// ── Messages Form ──────────────────────────────────────────────
function initMessagesForm() {
  const W        = window.WEDDING;
  const form     = document.getElementById('messages-form');
  const submitBtn= document.getElementById('messages-submit');
  const statusEl = document.getElementById('messages-status');

  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('msg-name')?.value.trim();
    const msg  = document.getElementById('msg-body')?.value.trim();

    if (!name || !msg) {
      showStatus(statusEl, 'Please fill in your name and message.', 'error');
      return;
    }

    const isConfigured = W.messages.formspreeEndpoint && !W.messages.formspreeEndpoint.includes('YOUR_MESSAGES_FORM_ID');
    if (!isConfigured) {
      showStatus(statusEl, 'Messages form not yet configured. See setup instructions above.', 'error');
      return;
    }

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch(W.messages.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        form.reset();
        showStatus(statusEl, W.messages.successMessage, 'success');
        submitBtn.textContent = 'Message Sent ♥';
      } else {
        const data = await res.json();
        const err = data.errors ? data.errors.map(e => e.message).join(', ') : 'Something went wrong.';
        showStatus(statusEl, err, 'error');
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message →';
      }
    } catch {
      showStatus(statusEl, 'Network error — please try again.', 'error');
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send Message →';
    }
  });
}

// ── Gallery Lightbox ───────────────────────────────────────────
function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (lightbox)  lightbox.addEventListener('click', closeLightbox);
  if (closeBtn)  closeBtn.addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// ── Utility ────────────────────────────────────────────────────
function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.className   = 'form-status ' + type;
}
