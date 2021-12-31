const count = document.getElementById("count");
const car = document.querySelector(".car");

let times = 0;

car.addEventListener("dblclick", (e)=> {

    console.log(e)
    times++;
    count.innerHTML = times;

    let span = document.createElement("span");
    span.classList.add("heart");
    span.innerHTML = "&#9829;";

    const x = e.clientX - e.offsetX;
    const y = e.clientY - e.offsetY;

    span.style.top = `${e.clientY - e.target.offsetTop}px`;
    span.style.left = `${e.clientX - e.target.offsetLeft}px`;

    console.log(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop)

    car.appendChild(span);  
    
    setTimeout(()=>span.remove(),250)
})