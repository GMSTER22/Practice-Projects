const input = document.getElementById("input");
const tasksContainer = document.getElementById("tasks");
let tasks = document.querySelectorAll(".task");
let savedTasks = JSON.parse(window.localStorage.getItem("todoList"));


insertTask();

function insertTask() {
    input.addEventListener("keydown", (e) => {

        if (e.code === "Enter") {
            if (input.value.length === 0) { 
                return alert("enter your task") 
            };

            addTask(input.value);
            savedTasks.push(input.value);
            window.localStorage.setItem("todoList", JSON.stringify(savedTasks));
            console.log(JSON.parse(window.localStorage.getItem("todoList")), "first");
            input.value = "";
        }
    });
}

parseList();

function parseList() {
    savedTasks.forEach(task => {
        addTask(task);
    });
}

function addTask(task) {
    const listElement = document.createElement("li");
    listElement.classList = "task";
    listElement.innerHTML = task;
    tasksContainer.appendChild(listElement);
}

tasksContainer.addEventListener("contextmenu", (e)=> {
    e.preventDefault();

    //check if left click
    if (e.button === 2) {
        savedTasks = JSON.parse(window.localStorage.getItem('todoList'));
        const elementIdx = savedTasks.indexOf(e.target.innerText);
        savedTasks.splice(elementIdx, 1);
        console.log(savedTasks);
        window.localStorage.setItem("todoList", JSON.stringify(savedTasks));
        e.target.remove();
    } 
});

tasksContainer.addEventListener("mousedown", (e)=> {

    //check if right click
    if (e.button === 0) {
        e.target.classList.toggle("complete");
    } else if (e.button === 1) {
        input.value =  e.target.innerHTML;    
    }
});