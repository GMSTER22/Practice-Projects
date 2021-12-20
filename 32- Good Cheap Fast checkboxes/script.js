const goodBox = document.getElementById("good");
const cheapBox = document.getElementById("cheap");
const fastBox = document.getElementById("fast");
const toggles = document.querySelectorAll(".toggle");


toggles.forEach(box => {
    box.addEventListener("change", (e) => {
        doTheTrick(e.target)
    })
})

function doTheTrick(elementClicked) {
    if (goodBox.checked && cheapBox.checked && fastBox.checked) {
        if(goodBox === elementClicked) {
            fastBox.checked = false
        }

        if(cheapBox === elementClicked) {
            goodBox.checked = false
        }

        if(fastBox === elementClicked) {
            cheapBox.checked = false
        }
    }
}