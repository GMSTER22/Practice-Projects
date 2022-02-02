const container = document.querySelector(".container");
const times = +container.getAttribute("data-images");
console.log(times)

function importIMG(times) {

    for (let i = 0; i < times; i++) {
        const image = document.createElement("img");
        image.src = `https://source.unsplash.com/random/300*${300 + i}`;
        container.appendChild(image);
    }    
}

importIMG(times);