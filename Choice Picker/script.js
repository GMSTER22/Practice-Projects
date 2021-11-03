const input = document.querySelector("#choices");
const list = document.querySelector("ul");

input.addEventListener("keypress", (e) => {
    
    let choices;

    const enterCode = e.code;
    if (enterCode === "Enter") {
        // console.log(choices.length);
        choices = input.value.split(",");
        let li;

        for (let i = 0; i < choices.length ; i++) {
            li = document.createElement("li");
            li.classList.add("element")
            li.innerHTML = choices[i];
            list.appendChild(li);
            console.log(li)
        }

        // function flashText() {
        //     let randomPick = Math.floor(Math.random() * choices.length);

        //     if (list.children[randomPick].className === "element") {
        //         list.children[randomPick].className === "pick"; 
        //     }
        // }

        let pick = setInterval( function() {
            let randomPick = Math.floor(Math.random() * choices.length);
            list.children[randomPick].classList.add("pick");
            // list.children[randomPick].classList.remove("pick");
    
            setInterval(function() {
                list.children[randomPick].classList.remove("pick");
            }, 100)
    
        }, 100)
    
        // setTimeout( function() {
        //     clearInterval(pick)
        // }, 20000);
    } 
})

// pou, bou, zou, kou, dou