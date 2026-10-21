

const menuToggle = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".fa-bars");
const cross = document.querySelector(".cross");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  const isOpen = navLinks.classList.contains("show");

  menuIcon.style.display = isOpen ? "none" : "block";
  cross.style.display = isOpen ? "block" : "none";
});
