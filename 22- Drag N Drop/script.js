// function dragStart() {}
const dropBoxes = document.querySelectorAll(".boxes__drop")
const dragBox = document.querySelector(".drag")

dragBox.addEventListener("dragstart", dragStart)
dragBox.addEventListener("dragend", dragEnd)

for (const box of dropBoxes) {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragdrop", dragDrop)
}

function dragStart() {
    this.className += "hold"
    this.className += "invisible"
}

function dragEnd() {
    console.log("drag end")
}

function dragOver() {
    console.log("drag over")
}

function dragEnter() {
    console.log("drag leave")
}

function dragLeave() {
    console.log("drag leave")
}

function dragDrop() {
    console.log("drag drop")
}