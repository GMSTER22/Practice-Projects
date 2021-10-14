const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
const li = document.querySelector("li");

circle.addEventListener("click", () => {
    circle.classList.toggle("active");
    container.classList.toggle("show-nav");
});