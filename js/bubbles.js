// Ambient background bubbles.
// This script only reads/generates elements inside ".bubbles-bg",
// it does not touch any other part of the site.

(function () {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const container = document.querySelector(".bubbles-bg");
    if (!container) return;

    // Number of bubbles on screen at once. Keep this low for subtlety.
    const BUBBLE_COUNT = 15;

    for (let i = 0; i < BUBBLE_COUNT; i++) {
        const bubble = document.createElement("span");
        bubble.className = "bubble";

        const size = Math.random() * 40 + 20; // 20px - 60px
        const left = Math.random() * 100; // 0% - 100%
        const duration = Math.random() * 14 + 16; // 16s - 30s
        const delay = Math.random() * -30; // negative delay = mid-animation start

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;

        container.appendChild(bubble);
    }
})();
