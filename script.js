const hamburger = document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");
hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})) 
const sections = document.querySelectorAll("section, .about, .Contact");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id") || section.classList[0];
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (
      (link.getAttribute("href") === "#" + current) ||
      (current === "home" && link.getAttribute("href") === "#")
    ) {
      link.classList.add("active");
    }
  });
});