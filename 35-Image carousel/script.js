const images = document.getElementById("imgs");
const previousBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const numberOfImages = images.children.length;
let times = 0

function slidding() {
    setInterval(()=> {
        images.style.transform = `translateX(${times * -50}rem)`;

        times < numberOfImages - 1 ? times++ : times = 0 
        
    },1000)
}

previousBtn.addEventListener("click", ()=> {
    times <= numberOfImages - 1 ? times-- : times = 0;
})

slidding()