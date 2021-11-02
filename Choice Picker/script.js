const input = document.querySelector("#choices");
const list = document.querySelector("ul");

input.addEventListener("keypress", (e) => {
    const enterCode = e.code;
    if (enterCode === "Enter") {
        let choices = input.value.split(",");
        let li;

        for (let i = 0; i < choices.length ; i++) {
            li = document.createElement("li");
            li.innerHTML = choices[i];
            list.appendChild(li);

            let randomNumber = Math.random() * choices.length;
        }

        console.log(list);
    } 
})