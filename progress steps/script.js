const buttonNext = document.querySelector("#next");
const buttonPrevious = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector("#progress");

let [un, deux, trois, quatre] = circles;

let currentActive = 1;

//0 - 35 - 65 - 95

// console.log(buttonNext, buttonPrevious, progress, un , deux, trois, quatre);

// console.log(getComputedStyle(progress).height);
console.log(progress.style.width);

// getComputedStyle(progress).height = "50px";

buttonNext.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    console.log(currentActive);

    update();
})


buttonPrevious.addEventListener("click", () => {
    currentActive--;

    if (currentActive < circles.length) {
        currentActive = 1;
    }

    console.log(currentActive);

    update();
})

