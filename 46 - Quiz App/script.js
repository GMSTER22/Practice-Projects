const container =  document.querySelector(".container");
const question = document.getElementById("question");
const answewrA =  document.getElementById("a_text");
const answewrB =  document.getElementById("b_text");
const answewrC =  document.getElementById("c_text");
const answewrD =  document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const inputEl = document.querySelectorAll("input[type='radio']");
const choicesBox = document.querySelector(".choices");
const answers = document.querySelectorAll("label");

// console.log(inputEl);
inputEl.forEach(element => {
    // element.checked === true;
    // console.log(element.nextElementSibling)
    if (element.checked === true) {
        console.log(element.nextElementSibling.innerText);
    }
    // console.log(element.checked)
});

const quizData = [
    { 
        question: "Which language runs in a web browser?",
        answers: ["Java", "C", "Python", "JavaScript"]
    },
    { 
        question: "What does CSS stands for?",
        answers: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"]
    },
    { 
        question: "What does HTML stands for?",
        answers: ["HyperText Markup Language", "Hypertext Markdown Language", "Hyperloop Machine", "Helicopters Terminals Motorboats Lamborgini"]
    },
    { 
        question: "What year was JavaScript launched?",
        answers: [1995, 1996, 1994, "none of the above"]
    }
];

let i = 0;

askQuestion();

function askQuestion(i=0) {
    const questionShown = quizData[i];

    inputEl.forEach(element => {
        element.checked = false;
    });

    question.innerText = questionShown["question"];
    answewrA.innerText = questionShown["answers"][0];
    answewrB.innerText = questionShown["answers"][1];
    answewrC.innerText = questionShown["answers"][2];
    answewrD.innerText = questionShown["answers"][3];
}

submitBtn.addEventListener("click", () =>  {
    i++;
    
    if (i < answers.length) {
        askQuestion(i);
    } else {
        console.log(i, "Upload");
        choicesBox.innerHTML = ""
        question.innerHTML = "Your result is: "
        submitBtn.innerText = "Reload";
        i = 0;
        askQuestion(i)
    }

});