export default function () {
    if (!document.querySelector('.home')) return;
    const swiper = new Swiper('.top__slide', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });
};