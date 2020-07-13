
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


/* Dim screen when hamburger menu is open */
let toggleDimStatus = false;
let toggleDim = function() {
  let getDimScreen = document.querySelector("#dimmer");

  if (toggleDimStatus === false) {
    getDimScreen.style.background = "#000";
    getDimScreen.style.opacity = "0.3";
    getDimScreen.style.position = "fixed";
    getDimScreen.style.width = "100%";
    getDimScreen.style.height = "100%";
    getDimScreen.style.zIndex = "999";

    toggleDimStatus = true;
  } 
  
  else if (toggleDimStatus === true) {
    
    getDimScreen.style.position = "initial";
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

// Price Calculator
$('select').change(function() {
  var sum = 0;
  $('option:selected, input:selected').each(function() {
    sum += parseInt($(this).val(), 10);
  });
  $("#totalPrice").val(sum);
});


// Popup 
var popup = document.getElementById("myPopup");
var btn = document.getElementById("pricing-button");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  popup.style.display = "block";
}

span.onclick = function() {
  popup.style.display = "none";
}