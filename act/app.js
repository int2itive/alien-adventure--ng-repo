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

// Check if the element is in the viewport.
// http://www.hnldesign.nl/work/code/check-if-element-is-visible/
function isInViewport(node) {
  // Am I visible? Height and Width are not explicitly necessary in visibility
  // detection, the bottom, right, top and left are the essential checks. If an
  // image is 0x0, it is technically not visible, so it should not be marked as
  // such. That is why either width or height have to be > 0.
  var rect = node.getBoundingClientRect();
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
