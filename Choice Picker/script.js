const textArea = document.querySelector("#choices");
const list = document.querySelector(".list");


textArea.focus();

textArea.addEventListener("keyup", (e) => {

    createTags(e.target.value);

    if (e.key === "Enter") {

        setInterval(() => {
            e.target.value === ""
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())

    list.innerText = ""
    
    tags.forEach(tag => {
        li = document.createElement("li");
        li.classList.add("tag")
        li.innerText = tag;
        list.appendChild(li);
    });
}

function randomSelect() {
    const times = 20

    const interval = setInterval( function() {
        const randomTag = pickRandomTag();

        highlight(randomTag);

        setTimeout(function() {
            removeHighlight(randomTag);
        }, 100)

    }, 100)

    setTimeout( function() {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlight(randomTag)
        }, 100)

        
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
    tag.classList.add("pick");
}

function removeHighlight(tag) {
    tag.classList.remove("pick");
}

// pou, bou, zou, kou, dou