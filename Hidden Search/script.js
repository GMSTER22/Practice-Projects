const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");


btn.addEventListener("click", () => {
    input.classList.toggle("active");
    input.focus();
    setInterval(() => {
        container.style.backgroundImage = `linear-gradient(90deg, #1f4753, #07323a)`;
    }, 500);
});