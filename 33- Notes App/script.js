const container = document.querySelector(".container");
const addBtn = document.getElementById("add");
const writeBtn = document.getElementById("write");
const deleteBtn = document.getElementById("delete");
const noteCard = document.getElementById("note");

addBtn.addEventListener("click", ()=> {
   const newNote = `
                        <div class="note" id="note">
                        <div class="note__options">
                            <button id="write"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button id="delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                        <textarea name="note__textarea" id="note__textarea" autofocus></textarea>
                        </div>` 

    container.appendChild(newNote);
});