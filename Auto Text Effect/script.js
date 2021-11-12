const heading = document.querySelector("h1");

const text = heading.getAttribute("data-saying");

const dec = text.split("")

let time = 100;

for (let i = 0; i < dec.length; i++) {
    let span = document.createElement("span");
    span.innerText = dec[i];
    console.log(span)

    setTimeout(() => {
        heading.appendChild(span);
    }, (i * time));
}

