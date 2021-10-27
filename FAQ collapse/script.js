// fa-solid fa-circle-xmark
// fa-solid fa-chevron-down

const buttons = document.querySelectorAll(".faq_icon");
const faq = document.querySelectorAll(".faq");

buttons.forEach( button => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active");
    })
})