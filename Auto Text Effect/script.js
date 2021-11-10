const heading = document.querySelector("h1");

const text = heading.getAttribute("data-saying");
console.log(text)

const dec = text.split("")

let time = 150;

for (let i = 0; i < dec.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = dec[i];
    console.log(span)

    setTimeout(() => {
        heading.appendChild(span);
    }, (i * time));
}

