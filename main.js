document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const nav = document.getElementById("main-nav");
  const toggle = document.getElementById("nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const nav = document.getElementById("main-nav");
  const toggle = document.getElementById("nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
      }
    });
  }
});


