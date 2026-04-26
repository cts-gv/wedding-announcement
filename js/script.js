/* ============================================================
   IMAGE CONFIGURATION
   The code will look in your /images folder first.
============================================================ */
const imageConfig = {
    heroes: { 
        ourStory: "images/hero-story.jpg", 
        weddingParty: "images/hero-party.jpg", 
        weekend: "images/hero-weekend.jpg",
        registry: "images/hero-registry.jpg",
        married: "images/hero-married.jpg"
    },
    story: {
        howWeMet: "images/how-we-met.jpg",
        howItWent: "images/how-it-went.jpg",
        proposal: "images/proposal.jpg"
    },
    // This creates paths for images/gal1.jpg through images/gal12.jpg
    gallery: Array.from({ length: 12 }, (_, i) => `images/gal${i + 1}.jpg`)
};

// If a real image is missing, show this placeholder instead
const placeholder = "https://via.placeholder.com/1200x800/fcfaf9/002366?text=Photo+Coming+Soon";

function init() {
    // 1. Apply Hero Images
    const heroImg = document.getElementById("hero-our-story");
    if(heroImg) {
        heroImg.src = imageConfig.heroes.ourStory;
        heroImg.onerror = () => { heroImg.src = placeholder; };
    }

    // 2. Apply Story Images
    const storyIds = ["img-how-we-met", "img-how-it-went", "img-proposal"];
    const storyKeys = ["howWeMet", "howItWent", "proposal"];
    
    storyIds.forEach((id, index) => {
        const img = document.getElementById(id);
        if(img) {
            img.src = imageConfig.story[storyKeys[index]];
            img.onerror = () => { img.src = placeholder; };
        }
    });

    // 3. Apply Gallery Images
    imageConfig.gallery.forEach((path, index) => {
        const img = document.getElementById(`gal${index + 1}`);
        if (img) {
            img.src = path;
            img.onerror = () => { img.src = placeholder; };
        }
    });

    // 4. Fade-in Animation Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .two-column').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/* ============================================================
   FLOATING HEARTS ANIMATION
============================================================ */
function createHeart() {
    const container = document.getElementById("hearts-container");
    if (!container) return;
    
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "♥";
    
    // Randomize position and size
    const size = Math.random() * 10 + 15; // 15px to 25px
    heart.style.fontSize = `${size}px`;
    heart.style.left = Math.random() * 100 + "vw";
    
    // Start from current scroll position
    heart.style.top = (window.scrollY + window.innerHeight) + "px";
    
    container.appendChild(heart);
    
    // Clean up heart after animation ends
    setTimeout(() => heart.remove(), 6000);
}

// Create a heart every 800ms
setInterval(createHeart, 800);

document.addEventListener("DOMContentLoaded", init);
