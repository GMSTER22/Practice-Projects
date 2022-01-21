const track = document.getElementById("range");


track.addEventListener("input", (e) => {
    const min = +e.target.min;
    const max = +e.target.max;

    console.log(e.target)
    console.log(e, min, max)
    e.target.nextElementSibling.innerText = e.target.value;
    e.target.nextElementSibling.style.left = `${scale(e.target.value, min, max, -30, 245)}px`;

});

//function used to convert a range of number to another range of number
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}