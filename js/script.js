// Placeholder Image
const placeholder = "https://via.placeholder.com/800x600/fcfaf9/002366?text=Coming+Soon";

document.addEventListener("DOMContentLoaded", () => {
    // Fill all empty images with placeholders
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.getAttribute('src') || img.getAttribute('src') === "") {
            img.src = placeholder;
        }
        // Fallback if the path provided fails
        img.onerror = function() {
            this.src = placeholder;
        };
    });
});

// Hearts Animation
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
