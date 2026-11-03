
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const sections = document.querySelectorAll(".panel[id]");

const menuLinks = document.querySelectorAll(
  ".start-menu a, .panel-nav nav a"
);

// Active navigation highlighting
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      menuLinks.forEach((link) => {
        const active =
          link.getAttribute("href") === `#${entry.target.id}`;

        link.classList.toggle("selected", active);
      });
    });
  },
  {
    threshold: 0.35
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
      block: "start"
    });
  });
});
