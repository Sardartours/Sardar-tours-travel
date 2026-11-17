const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function sendWhatsApp(message) {
  const url = "https://wa.me/8801322882182?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
}

document.getElementById("travelForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hello SARDAR TOURS & TRAVELS,",
    "I would like to request an air fare.",
    "From: " + data.get("from"),
    "To: " + data.get("to"),
    "Travel date: " + data.get("date"),
    "Passengers: " + data.get("passengers")
  ].join("\n");
  sendWhatsApp(message);
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hello SARDAR TOURS & TRAVELS,",
    "I would like to make an enquiry.",
    "Name: " + data.get("name"),
    "Phone: " + data.get("phone"),
    "Service: " + data.get("service"),
    "Message: " + (data.get("message") || "Please contact me.")
  ].join("\n");
  sendWhatsApp(message);
});
