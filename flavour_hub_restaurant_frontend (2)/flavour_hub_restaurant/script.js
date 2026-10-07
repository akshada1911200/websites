// Flavour Hub frontend interactions — no backend required.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
});

// Menu category filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    const filter = button.dataset.filter;
    menuCards.forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

// Reservation form demo: validates fields but does not send/store a booking.
const bookingDate = document.getElementById("bookingDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
bookingDate.min = localToday;

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.getElementById("formMessage");
  message.textContent = "Thanks! Your form is complete. This frontend demo does not send a real reservation.";
  message.style.color = "#8a6414";
  event.currentTarget.reset();
  bookingDate.min = localToday;
});

// Back-to-top button and header active section
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 450);
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();

if (window.lucide) lucide.createIcons();
