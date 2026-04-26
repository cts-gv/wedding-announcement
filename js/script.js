/**
 * HOW TO CHANGE IMAGES LATER:
 * 1. Upload your photo to the 'images/' folder.
 * 2. Note the filename (e.g., 'engagement.jpg').
 * 3. Change the text in the quotes below to match your filename.
 */
const imageConfig = {
    hero: "images/hero-story.jpg",      // <--- Change this to your filename
    howWeMet: "images/how-we-met.jpg"   // <--- Change this to your filename
};

const placeholder = "https://via.placeholder.com/1200x800/fcfaf9/002366?text=Photo+Coming+Soon";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Images
    const hero = document.getElementById("hero-our-story");
    const met = document.getElementById("img-how-we-met");

    if (hero) {
        hero.src = imageConfig.hero;
        // If file doesn't exist yet, show placeholder
        hero.onerror = () => { hero.src = placeholder; };
    }

    if (met) {
        met.src = imageConfig.howWeMet;
        met.onerror = () => { met.src = placeholder; };
    }

    // 2. Animation Logic (Fade In)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// 3. Floating Hearts Logic
function createHeart() {
    const container = document.getElementById("hearts-container");
    if (!container) return;
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = (window.scrollY + window.innerHeight) + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 1000);
