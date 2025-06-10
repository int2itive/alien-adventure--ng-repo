const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mobileNavigation = document.querySelector('#mobile-nav');
const navItems = document.querySelectorAll(".nav-item");
const highlighter = document.querySelector(".highlighter");

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

const handleMouseEnter = (item) => {
  const itemDimensions = item.getBoundingClientRect();
  const parentDimensions = item.parentElement.getBoundingClientRect();
  const isMobile = window.innerWidth <= 480;

  const dimension = isMobile ? "height" : "width";
  const transform = isMobile ? "Y" : "X";
  const offset = isMobile
    ? itemDimensions.top - parentDimensions.top
    : itemDimensions.left - parentDimensions.left;

  highlighter.style[dimension] = `${itemDimensions[dimension]}px`;
  highlighter.style.transform = `translate${transform}(${offset}px)`;

  highlighter.style.opacity = 1;
};

const handleMouseLeave = () => {
  highlighter.style.opacity = 0;
};

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => handleMouseEnter(item));
  item.addEventListener("mouseleave", () => handleMouseLeave());
});
