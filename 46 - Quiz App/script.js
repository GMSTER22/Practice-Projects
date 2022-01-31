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
const displayScore = document.querySelector(".score");

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
        askQuestion(i);
    } else if (i === answers.length) {
        choicesBox.style.display = "none";
        submitBtn.innerText = "Reload";
        checkAnswers(givenAnswers);
        displayScore.innerText = `Your score is: ${testScore}`
        displayScore.style.display = "block";
    } else {
        displayScore.style.display = "none";
        choicesBox.style.display = "block";
        submitBtn.innerText = "Submit";
        i = 0;
        givenAnswers = [];
        testScore = 0;
        askQuestion(i);
    }

});

function checkAnswers(answers) {

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == correctAnswers[i]) {
            testScore++;
        }
    }
}