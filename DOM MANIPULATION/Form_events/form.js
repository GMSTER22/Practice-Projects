const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const terms = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");
const submitBtn = document.querySelector("#submit");

const form2 = document.querySelector(".form");

const formData = {};

for (let input of [creditCard, terms, veggieSelect]) {
    input.addEventListener("input", ({target}) => {
        const { name, type, value, checked } = target;
        formData[name] = type === "checkbox" ? checked : value;
        // console.log(formData);
        // console.log(e.target.name);
    });
}




// creditCard.addEventListener("input", (e) => {
//     console.log("cc", creditCard.value);
// })
// terms.addEventListener("input", (e) => {
//     console.log("terms", terms.checked);
// })
// veggieSelect.addEventListener("input", (e) => {
//     console.log("veggieSelect", veggieSelect.value);
// })




// window.addEventListener("load", (e) => {
//     console.log(getComputedStyle(form2).backgroundPosition);
// })

// form.addEventListener("submit", (event) => {
//     if (!terms.checked) {
//         console.log("Check the terms and conditions");
//         event.preventDefault();
//     } else {
//         console.log(event);
//         console.log(getComputedStyle(submitBtn));
//         console.log(creditCard.value);
//         console.log(terms.checked);
//         console.log(veggieSelect.value);
//     }
// })
