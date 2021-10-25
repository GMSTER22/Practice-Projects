const ps = document.querySelector(".ps");
const xbox = document.querySelector(".xbox");


const stretchElement = (element) => {
    element.addEventListener("mouseenter", () => {
        element.classList.add("active");
    })
    element.addEventListener("mouseleave", () => {
        element.classList.remove("active");
    })
}

stretchElement(ps);
stretchElement(xbox);