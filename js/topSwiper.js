export default function () {
    if (!document.querySelector('.home')) return;
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });
};