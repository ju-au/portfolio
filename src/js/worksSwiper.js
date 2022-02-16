export default function () {
    if (!document.querySelector(".home-works__slide")) return;
    let swiper = new Swiper(".home-works__slide", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 42,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const dots = document.querySelectorAll(".swiper-pagination-bullet");
    const dotsWidth = (100 / dots.length) + "%";
    dots.forEach(dot => {
        dot.style.width = dotsWidth;
    });
}