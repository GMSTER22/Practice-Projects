const leftArrow = document.querySelector(".slider_box-arrow.left");
const rightArrow = document.querySelector(".slider_box-arrow.right");
const slides = document.querySelectorAll(".slide");
const container = document.querySelector(".container");

let activeSlide = 0;

rightArrow.addEventListener("click", () => {
    activeSlide < slides.length -1 ? activeSlide++ : activeSlide = 0;
    setActiveSlide();
    setBgToContainer();
});

leftArrow.addEventListener("click", () => {
    activeSlide <= 0 ? activeSlide = slides.length - 1 : activeSlide--;
    setActiveSlide();
    setBgToContainer();
});

function setBgToContainer() {
    container.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove("active");
    })

    slides[activeSlide].classList.add("active");
}
