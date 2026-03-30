const yearTargets = document.querySelectorAll("[data-year]");

yearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (navToggle && nav) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880) {
      closeNav();
    }
  });
}

const revealElements = document.querySelectorAll("[data-reveal]");

if (revealElements.length > 0) {
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }
}

const homeNavLinks = Array.from(
  document.querySelectorAll('.page-home .site-nav a[href^="#"]'),
);

if (homeNavLinks.length > 0) {
  const trackedSections = homeNavLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const updateActiveNav = () => {
    const currentOffset = window.scrollY + 140;
    let activeSectionId = "";

    trackedSections.forEach(({ target }) => {
      if (currentOffset >= target.offsetTop) {
        activeSectionId = `#${target.id}`;
      }
    });

    trackedSections.forEach(({ link }) => {
      link.classList.toggle("is-active", link.getAttribute("href") === activeSectionId);
    });
  };

  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });
}
