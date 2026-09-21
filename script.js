// ==============================
// MOBILE MENU
// ==============================
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = menuBtn.querySelector("i");
        const isOpen = navMenu.classList.contains("active");
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}

// ==============================
// MENU FILTER
// ==============================
const filters = document.querySelectorAll(".filter");
const menuCards = document.querySelectorAll(".menu-card");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(btn => btn.classList.remove("active"));
        filter.classList.add("active");

        const category = filter.dataset.filter;

        menuCards.forEach(card => {
            const show = category === "all" || card.dataset.category === category;
            card.style.display = show ? "block" : "none";
        });
    });
});

// ==============================
// CONTACT FORM
// ==============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        alert(`Thank you ${name}! Your message has been received. ☕`);
        contactForm.reset();
    });
}

// ==============================
// NEWSLETTER
// ==============================
const newsletter = document.getElementById("newsletter");

if (newsletter) {
    newsletter.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for subscribing! ☕");
        newsletter.reset();
    });
}

// ==============================
// HEADER SCROLL EFFECT
// ==============================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
        header.style.background = window.scrollY > 50
            ? "rgba(43, 27, 20, 0.98)"
            : "rgba(43, 27, 20, 0.85)";
    }
});
