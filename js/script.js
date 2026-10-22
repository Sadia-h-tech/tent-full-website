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

const  globalLink= document.querySelector(".link-home");
const  moreLink= document.querySelector(".link-services");
const  hadderLink= document.querySelector(".link-work");
const  main2Link= document.querySelector(".link-team");
const  contactLink= document.querySelector(".link-contact");

globalLink.addEventListener("click", ()=> {
  document.querySelector(".global").scrollIntoView({behavior:"smooth"})
});

moreLink.addEventListener("click", ()=> {
  document.querySelector(".more").scrollIntoView({behavior:"smooth"})
});
hadderLink.addEventListener("click", ()=> {
  document.querySelector(".hadder").scrollIntoView({behavior:"smooth"})
});
main2Link.addEventListener("click", ()=> {
  document.querySelector(".main2").scrollIntoView({behavior:"smooth"})
});
contactLink.addEventListener("click", ()=> {
  document.querySelector(".contact").scrollIntoView({behavior:"smooth"})
});
