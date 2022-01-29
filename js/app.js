
document.addEventListener("DOMContentLoaded", () => {
    // slider
    const slides = document.querySelectorAll(".slider-content");
    const sliderLine = document.querySelector(".slider-line");

    let count = 0;
    let width;

    function init() {
        console.log("resize");
        width = document.querySelector(".slider").offsetWidth;
        sliderLine.style.width = width * slides.length + "px";

        slides.forEach((el) => {
            el.style.width = width + "px";
            el.style.height = "auto";
        });
        console.log(width);
        rollSlider();
    }

    window.addEventListener("resize", init);
    init();


    setInterval(() => {
        count++;
        if (count >= slides.length) {
            count = 0;
        }
        rollSlider();
    }, 3500);

    function rollSlider() {
        sliderLine.style.transform = `translate(-${+ count * width + "px"})`;
    }


    //  Burger
    const menu = document.querySelector(".menu"),
        menuItem = document.querySelectorAll(".menu_item"),
        hamburger = document.querySelector(".hamburger");


    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });


    menuItem.forEach(element => {
        element.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("menu_active");
        });
    });
});


