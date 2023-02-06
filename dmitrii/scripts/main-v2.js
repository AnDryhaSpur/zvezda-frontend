var hero = new Swiper(".hero", {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,


  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

var news = new Swiper(".newsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  autoplay: {
    delay: 5000,
  },
});

var catalogSlider = new Swiper(".catalogSlider", {
  slidesPerView: 4,
  grid: {
    columns: 2,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}