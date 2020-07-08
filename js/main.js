
/* Hamburger Menu Open/Close */
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuOpen = true;
    menuBtn.classList.add('open');
  } else {
    menuOpen = false;
    menuBtn.classList.remove('open');
  }
});



let toggleDimStatus = false;
let toggleDim = function() {
  let getDimScreen = document.querySelector("body");

  if (toggleDimStatus === false) {
    getDimScreen.style.background = "#000";
    getDimScreen.style.opacity = "0.85";
    getDimScreen.style.zIndex = "9999";
    toggleDimStatus = true;
  } 
  
  else if (toggleDimStatus === true) {
    getDimScreen.style.background = "#fff";
    getDimScreen.style.opacity = "1";
    getDimScreen.style.zIndex = "0";
    toggleDimStatus = false;
  }   
}


/* Hamburger Menu Open/Close */
let toggleNavStatus = false;
let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebar.style.width = "275px";
  
    toggleNavStatus = true;
  } 
  
  else if (toggleNavStatus === true) {
    getSidebar.style.visibility ="hidden";
    getSidebar.style.width ="0px";
  
    toggleNavStatus = false;
  }   
}

/* Image Carousel */
const slides = document.querySelectorAll('.banner-slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {
  // Get Current Class
  const current = document.querySelector('.current');
  // Remove Current Class
  current.classList.remove('current');
  // Check for next slide
  if(current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  // Get Current Class
  const current = document.querySelector('.current');
  // Remove Current Class
  current.classList.remove('current');
  // Check for prev slide
  if(current.previousElementSibling && current.previousElementSibling.classList.contains("banner-slide") ) {
    current.previousElementSibling.classList.add("current");
  } else {
  slides[slides.length - 1].classList.add("current");
}
  setTimeout(() => current.classList.remove('current'));
};

// Button Events
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});