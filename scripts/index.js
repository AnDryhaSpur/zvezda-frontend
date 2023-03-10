const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    speed: 500,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});