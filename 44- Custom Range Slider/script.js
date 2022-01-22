const track = document.getElementById("range");

let thumbStartingPosition = getComputedStyle(track.nextElementSibling).
    getPropertyValue("left");
    thumbStartingPosition = +thumbStartingPosition.substring(0, thumbStartingPosition.length - 2);
    console.log(thumbStartingPosition)


track.addEventListener("input", (e) => {

    //get values of track and thumb width
    let trackWidth = getComputedStyle(e.target).getPropertyValue("width");    
    let thumbWidth = getComputedStyle(e.target.nextElementSibling).
    getPropertyValue("width");

    //transform values into numbers
    trackWidth = +trackWidth.substring(0, trackWidth.length - 2);
    thumbWidth = +thumbWidth.substring(0, thumbWidth.length - 2);

    //get the distance the thumb must cover on the left and right
    const leftDistance = thumbStartingPosition - (trackWidth / 2) + 10;
    const rightDistance = thumbStartingPosition + (trackWidth / 2) - 10;

    // console.log( e.target.nextElementSibling.style.left);

    const min = +e.target.min;
    const max = +e.target.max;

    e.target.nextElementSibling.innerText = e.target.value;
    e.target.nextElementSibling.style.left = `${scale(e.target.value, min, max, leftDistance, rightDistance)}px`;
});

//function used to convert a range of number to another range of number
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}