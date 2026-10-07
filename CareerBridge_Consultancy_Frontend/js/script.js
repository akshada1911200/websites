const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu?.addEventListener("click", () => nav.classList.toggle("active"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

const form = document.getElementById("consultForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "✓ Thank you! Your consultation request has been received.";
  form.reset();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".service-card,.testimonial,.step,.about-copy,.about-visual").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});
