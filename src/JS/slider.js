document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".card-list");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    let currentIndex = 0;
    const cardWidth = document.querySelector(".card-item").offsetWidth + 20; // Ancho de cada card + margen

    nextBtn.addEventListener("click", () => {
        if (currentIndex < slider.children.length - 1) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});
