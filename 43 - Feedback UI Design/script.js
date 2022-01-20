const body = document.querySelector("body");
const choices = document.querySelectorAll(".option");
const button = document.querySelector(".btn-submit");

let chosenOption;


choices.forEach(choice => {
    choice.addEventListener("click", function() {
        console.log(choice)
        Object.values(choice.parentElement.children).forEach(element => element.classList.remove("active"));
        choice.classList.add("active");
        chosenOption = choice;
    });
});

button.addEventListener("click", function() {
    thanksCard(chosenOption.textContent)
})

const thanksCard = (message) => {
    const div = document.createElement("div");
    div.classList.add("thanks");

    const divContent = `<span class="fa-solid fa-heart"></span>
                        <span>Thank You!</span>
                        <span>Feedback: <strong>${message}</strong></span>
                        <span>We'll use your feedback to improve our customer support.</span>`;

    div.innerHTML = divContent;
    body.innerHTML = "";
    body.appendChild(div);
}