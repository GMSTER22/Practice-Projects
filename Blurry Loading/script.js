const loadText = document.querySelector(".percentage");
const bg = document.querySelector(".bg");

let load = 0;

window.addEventListener("load", () => {
    setInterval(function Timer() {
        load > 99 ? clearInterval() : load++;
        loadText.innerText = `${load}%`;
        loadText.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }, 30)
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}