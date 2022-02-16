export default function () {
    const serviceItems = document.querySelectorAll('.service__item');
    if (!serviceItems) return;
    for (let i = 0; i < serviceItems.length; i++) {
        serviceItems.item(i).addEventListener('click', () => {
            serviceItems.item(i).classList.toggle('active');
        });
    };
}