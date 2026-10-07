const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll(".process-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".process-item").forEach(x => x.classList.remove("active"));
    item.classList.add("active");
  });
});

const form = document.getElementById("contactForm");
const message = document.getElementById("form-message");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "✓ Thanks! Your strategy call request has been received.";
  form.reset();
});

const animated = document.querySelectorAll(".service-card,.case-card,.metric-grid>div,.process-item,.testimonial");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .08});

animated.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
