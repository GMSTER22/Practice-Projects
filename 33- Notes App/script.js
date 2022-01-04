const container = document.querySelector("body");
const addBtn = document.getElementById("add");

const noteCard = document.getElementById("note");


addBtn.addEventListener("click", () => addNewNote("Hello world"));

function addNewNote (text = "") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
                        <div class="note__options">
                            <button id="write"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button id="delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>

                        <div class="main ${ text? "" : "hidden" }"></div>
                        <textarea name="note__textarea" id="textarea" class="${ text? "hidden" : "" }" ></textarea>`;

    container.appendChild(note);

    const writeBtn = note.querySelector("#write");
    const deleteBtn = note.querySelector("#delete");
    const textareaEl = note.querySelector("#textarea");
    const mainDiv = note.querySelector(".main");

    // textareaEl.value = text;
    // mainDiv.innerHTML = text;

    writeBtn.addEventListener("click", ()=> {
        textareaEl.classList.toggle("hidden");
        mainDiv.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", ()=> {
        note.remove();
    });

    textareaEl.addEventListener("change", (e)=> {
        const { value } = e.target;
        mainDiv.innerHTML = value;
    });
};