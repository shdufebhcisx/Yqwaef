document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const clock = document.getElementById("clock");

    // Light/Dark Mode Toggle
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });

    // Clock Update
    function updateClock() {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Section Animation on Scroll
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});