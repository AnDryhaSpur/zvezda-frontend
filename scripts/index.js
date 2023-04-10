let capacitySlider = document.getElementById('capacity-slider');
let topCap = Number(capacitySlider.dataset.topCapacity);
let bottomCap = Number(capacitySlider.dataset.bottomCapacity);

noUiSlider.create(capacitySlider, {
    start: [bottomCap, topCap],
    step: 100,
    connect: true,
    range: {
        'min': bottomCap,
        'max': topCap,
    }
});

let volumeSlider = document.getElementById('volume-slider');
let topVol = Number(volumeSlider.dataset.topVolume);
let bottomVol = Number(volumeSlider.dataset.bottomVolume);

noUiSlider.create(volumeSlider, {
    start: [bottomVol, topVol],
    step: 100,
    connect: true,
    range: {
        'min': bottomVol,
        'max': topVol,
    }
});

capacitySlider.noUiSlider.on('update',
    () => capacitySlider.dispatchEvent(new Event('capacityupdate')));
volumeSlider.noUiSlider.on('update',
    () => volumeSlider.dispatchEvent(new Event('volumeupdate')));


const bgSwiper = new Swiper(".hero .bg-swiper", {
    // Optional parameters
    loop: true,
    speed: 500,
    slidesPerView: 1,
    effect: "fade",
});

const heroSwiper = new Swiper(".hero .swiper", {
    // Optional parameters
    loop: true,
    speed: 500,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
    // If we need pagination
    pagination: {
        el: ".hero .swiper-pagination",
        el: ".hero .swiper-pagination",
        type: "fraction"
    },
    // Navigation arrows
    navigation: {
        nextEl: ".hero .swiper-button-next",
        prevEl: ".hero .swiper-button-prev"
    },
    // Other swiper to control
    controller: {
        control: bgSwiper,
    },
});

const catalogSwiper = new Swiper(".catalog .swiper", {
    // Optional parameters
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 16,
    grid: {
        fill: 'column',
        rows: 2,
    },
    breakpoints: {
        50: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                fill: 'column',
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 18,
            grid: {
                fill: 'column',
                rows: 2,
            },
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 16,
            grid: {
                fill: 'column',
                rows: 2,
            },
        },
    },

    // If we need pagination
    scrollbar: {
        el: ".catalog .swiper-scrollbar",
        draggable: "true",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".catalog .swiper-button-next",
        prevEl: ".catalog .swiper-button-prev"
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
        el: ".about-us .swiper-pagination",
        type: "fraction"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".about-us .swiper-button-next",
        prevEl: ".about-us .swiper-button-prev"
    }
});

