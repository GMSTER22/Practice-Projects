const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e)=> {
    const passwordVal = e.target.value;
    const blurVal = 20 - (passwordVal.length * 2)

    background.style.filter = `blur(${blurVal}px)`;

    console.log(passwordVal);
});