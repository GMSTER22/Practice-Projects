const input = document.getElementById("input");
const tasksContainer = document.getElementById("tasks");
let tasks = document.querySelectorAll(".task");
const savedTasks = []


insertTask();

function insertTask() {
    input.addEventListener("keydown", (e) => {

        if (e.code === "Enter") {
            if (input.value.length === 0) { 
                return alert("enter your task") 
            };
            
            addTask(input.value);
            savedTasks.push(input.value)
            window.localStorage.setItem("todoList", JSON.stringify(savedTasks))
            input.value = "";
        }
    });
}

parseList();

function parseList() {
    const taskList = JSON.parse(window.localStorage.getItem('todoList'));

    taskList.forEach(task => {
        addTask(task)
    });
}

window.localStorage.getItem('todoList');
console.log(JSON.parse(window.localStorage.getItem('todoList')));


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