export default function () {
    const header = document.getElementById('header');
    if (!header) return;

    const headerHeight = header.clientHeight;
    let startPosition = 0;
    let position = 0;

    window.addEventListener("scroll", () => {
        position = window.scrollY;

        if (position > headerHeight && position > startPosition) {
            header.classList.remove('is-fixed');
        }
        if (position < headerHeight || position < startPosition) {
            header.classList.add('is-fixed');
        }

        startPosition = position;

    });
}