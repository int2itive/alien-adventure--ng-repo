const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mobileNavigation = document.querySelector('#mobile-nav');
const navItems = document.querySelectorAll(".nav-item");
const highlighter = document.querySelector(".highlighter");
const frames = document.querySelectorAll('iframe');
const moveButtons = document.querySelectorAll('.pzl--navigation a');


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
  const offset = isMobile ? itemDimensions.top - parentDimensions.top : itemDimensions.left - parentDimensions.left;
    

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


function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}


let currentFrame = frames[0];
currentFrame.classList.add('current');

function navigationFrame(moveDir) {
  currentFrame.classList.remove('current');
  let currentIndex = currentFrame.dataset.frameIndex;
  // console.log(currentIndex);
  // console.log(moveDir);
  let frameDirectionRef = moveDir === 'next' 
      ? frames[parseInt(currentIndex) + 1].dataset.frameIndex 
      : frames[parseInt(currentIndex) - 1].dataset.frameIndex;
  let nextIndex = '#'+'frame-'+frameDirectionRef; 
  nextIndex = `#frame-${frameDirectionRef}`; console.log(nextIndex);
  let t = document.querySelector(`${nextIndex}`).getBoundingClientRect().top; 
  // console.log(t);
  scrollToSmoothly(document.querySelector(`${nextIndex}`).offsetTop, 1000 /* milliseconds */);
  currentFrame = frames[frameDirectionRef];
  currentIndex = currentFrame.dataset.frameIndex;
  currentFrame.classList.add('current');
  // console.log(currentFrame);  
}
