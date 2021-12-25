const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll("div").length

let slideIndex = 0

leftSlide.style.top = `-${(slidesLength - 1)*100}%`

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction === "up") {
        slideIndex++

        if (slideIndex > slidesLength - 1) {
            slideIndex = 0;
        }
    } else if (direction === "down") {
        slideIndex--

        if (slideIndex < 0) {
            slideIndex = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${slideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${slideIndex * sliderHeight}px)`
}