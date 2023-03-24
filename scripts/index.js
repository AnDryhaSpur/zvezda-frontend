let slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [1000, 5000],
    step: 100,
    connect: true,
    range: {
        'min': 1000,
        'max': 5000,
    }
});

function upd() {
    slider.dispatchEvent(new Event('sliderupdate'))
}
slider.noUiSlider.on('update', upd);


const heroSwiper = new Swiper(".hero .swiper", {
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

const catalogSwiper = new Swiper(".catalog .swiper", {
    // Optional parameters
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 16,
    grid: {
        fill: 'row',
        rows: 2,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const aboutSwiper = new Swiper(".about-us .swiper", {
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
