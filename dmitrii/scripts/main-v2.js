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
});

var news = new Swiper(".newsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
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