// function dragStart() {}
const dropBoxes = document.querySelectorAll(".boxes__drop")
const dragBox = document.querySelector(".drag")

dragBox.addEventListener("dragstart", dragStart)
dragBox.addEventListener("dragend", dragEnd)

for (const box of dropBoxes) {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", dragDrop)
}

function dragStart() {
    this.className += " hold";    
    setTimeout(() => { this.className = "invisible"; }, 10);
}

function dragEnd() {
    this.className = "drag"
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave() {
    this.className = "boxes__drop"
    console.log("leave")
}

function dragDrop() {
    this.className = "boxes__drop";
    this.append(dragBox);
}