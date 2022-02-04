const input = document.getElementById("input");
const tasksContainer = document.getElementById("tasks");
const tasks = document.querySelectorAll(".task");

input.addEventListener("keydown", (e) => {

    if (e.code === "Enter") {
        if (!input.value) { 
            return alert("enter your task") 
        };

        console.log("clicked", input.value)
        addTask()
        input.value = ""
    }
});

function addTask() {
    const listElement = document.createElement("li");
    listElement.classList = "task";
    listElement.innerHTML = input.value;
    tasksContainer.appendChild(listElement);
}

tasks.forEach(task => {
    console.log(task)
    task.addEventListener( "contextmenu", (e) => {
        e.preventDefault();
        task.remove();
    });
    
    task.addEventListener( "click", (e) => {
        e.preventDefault();
        task.classList.toggle("complete");
    });
});