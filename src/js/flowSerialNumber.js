export default function () {
    const flowNumber = document.querySelectorAll(".flow__name-number");
    if (!flowNumber) return;
    for (let i = 0; i < flowNumber.length; i++) {
        flowNumber.item(i).innerText = "0" + (i + 1);
    };
}