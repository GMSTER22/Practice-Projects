//function select to fill any cup and prior cups to that one

const smallCups = document.querySelectorAll(".small_cup");

smallCups.addEventListener("click", () => {
    fillCup()
})

console.log(smallCups)

const fillCup = (cup) => {
    cup.classList.toggle("filled")
}