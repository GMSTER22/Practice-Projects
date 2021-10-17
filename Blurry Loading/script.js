const loadText = document.querySelector(".percentage");
const bg = document.querySelector(".bg");

let time = 70;

window.addEventListener("load", () => {
    setInterval(function Timer() {
        time--;
        bg.innerText = `${time}%`;
        bg.style.filter = `blur(${time}px)`
    }, 30)
});