const images = document.getElementById("imgs");
const previousBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");
const numberOfImages = images.children.length;

let times = 0

let interval = setInterval(()=> run, 2000);

function run() {
    times++
    changeImage()
}

function changeImage() {
    if (times > numberOfImages - 1) {
        times = 0
    } else if (times < 0) {
        times = numberOfImages - 1
    }
    images.style.transform = `translateX(${times * -50}rem)`;  
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

previousBtn.addEventListener("click", ()=> {
    times--
    changeImage()
    resetInterval()
})

nextBtn.addEventListener("click", ()=> {
    times++
    changeImage()
    resetInterval()
})