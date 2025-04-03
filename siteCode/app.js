const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mobileNavigation = document.querySelector('#mobile-nav');

//  click event to the hamburger class to activate the menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  //navMenu.classList.toggle("active");
  mobileNavigation.classList.toggle("showing");
});

// click event to each of the page links
document.querySelectorAll(".middle").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  //navMenu.classList.remove("active");
}));
