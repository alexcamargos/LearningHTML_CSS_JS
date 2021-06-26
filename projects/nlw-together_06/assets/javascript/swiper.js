/*
# -------------------------------------------------------------------------------------------------
#
# Name: swiper.js
# Version: 0.0.1
#
# Summary: NLW/Together - Origin #6
#         
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/

// Initialize Swiper JS
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
    // Responsive breakpoints
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
    },
});
