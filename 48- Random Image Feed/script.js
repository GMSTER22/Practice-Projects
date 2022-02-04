const container = document.querySelector(".container");
const rows = +container.getAttribute("data-rows") * 3;
console.log(rows)

function importIMG(rows) {

    for (let i = 0; i < rows; i++) {
        const image = document.createElement("img");
        image.src = `https://source.unsplash.com/random/300*${300 + i}`;
        container.appendChild(image);
    }    
}

importIMG(rows);