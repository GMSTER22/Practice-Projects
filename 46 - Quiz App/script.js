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

const correctAnswers = [quizData[0].answers[3], quizData[1].answers[1], quizData[2].answers[0], quizData[3].answers[0]];
let i = 0;
let givenAnswers = [];
let testScore = 0;

askQuestion();

function askQuestion(i=0) {
    const questionShown = quizData[i];

    question.innerText = questionShown["question"];
    answewrA.innerText = questionShown["answers"][0];
    answewrB.innerText = questionShown["answers"][1];
    answewrC.innerText = questionShown["answers"][2];
    answewrD.innerText = questionShown["answers"][3];
}

submitBtn.addEventListener("click", () =>  {
    i++;

    inputEl.forEach(element => {
        if (element.checked === true) {
            givenAnswers.push(element.nextElementSibling.innerText);
        }

        element.checked = false;
    });

    if (i < answers.length) {
        console.log(i)
        askQuestion(i);
    } else if (i === answers.length) {
        choicesBox.innerHTML = ""
        question.innerHTML = "Your result is: "
        submitBtn.innerText = "Reload";
        // console.log(givenAnswers);
        checkAnswers(givenAnswers);
        // askQuestion(i);
    }

    console.log(givenAnswers, i);
});

function checkAnswers(answers) {

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] = correctAnswers[i]) {
            testScore++;
        }
    }

    choicesBox.innerHTML = `<h2>Your score is: ${testScore}</h2>`;
    console.log("your score is " + testScore)
}