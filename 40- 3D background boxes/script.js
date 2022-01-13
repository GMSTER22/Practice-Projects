const btn = document.getElementById("btn");
const boxes = document.getElementById("boxes");

btn.addEventListener("click", () => {
    boxes.classList.toggle("big")
});

setInterval(()=>  {
    boxes.classList.toggle("big");
},3000)

function createDiv () {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = `${0 + (-100 * y)}px ${-100 * x}px`;
            boxes.appendChild(box);
        }
    }
}

createDiv()