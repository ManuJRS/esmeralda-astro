window.addEventListener("DOMContentLoaded", () => {
    const news = document.querySelector(".news");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const firstCardWhidth = news.querySelector(".card").offsetWidth;
    const carouselChildrens = [...news.children];

    let isDragging = false, startX, startScrollLeft;
    let cardPerView = Math.round(news.offsetWidth / firstCardWhidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        news.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        news.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            news.scrollLeft += btn.id === "left" ? -firstCardWhidth : firstCardWhidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        news.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = news.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        news.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        news.classList.remove("dragging");
    };

    const infiniteScroll = () => {
        if (news.scrollLeft === 0) {
            news.classList.add("no-transition");
            news.scrollLeft = news.scrollWidth - (2 * news.offsetWidth);
            news.classList.remove("no-transition");
        } else if (Math.ceil(news.scrollLeft) === news.scrollWidth - news.offsetWidth) {
            news.classList.add("no-transition");
            news.scrollLeft = news.offsetWidth;
            news.classList.remove("no-transition");
        }
    };

    news.addEventListener("mousedown", dragStart);
    news.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    news.addEventListener("scroll", infiniteScroll);
});
