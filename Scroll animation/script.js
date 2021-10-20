const boxes = document.querySelectorAll(".box");

// console.log(window.innerHeight);
// console.log(window.innerHeight/5*4);

window.addEventListener("scroll", animation);

animation();


function animation() {
    const pointOfActivation = window.innerHeight * 0.9;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < pointOfActivation) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

