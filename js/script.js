// Placeholder Image Logic
const placeholder = "https://via.placeholder.com/1200x800/fcfaf9/002366?text=Coming+Soon";

const imageConfig = {
    heroes: { ourStory: placeholder, weddingParty: placeholder, weekend: placeholder },
    gallery: Array(12).fill(placeholder)
};

function init() {
    // Apply Placeholders
    const heroImg = document.getElementById("hero-our-story");
    if(heroImg) heroImg.src = imageConfig.heroes.ourStory;

    // Fade-in Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Floating Hearts
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

setInterval(createHeart, 800);
document.addEventListener("DOMContentLoaded", init);
