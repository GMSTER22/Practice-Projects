const dadJokeUrl = "https://icanhazdadjoke.com/";
const myHeader = { headers: { 
                                Accept : "application/json"
} };

const joke = document.querySelector(".joke");
const button = document.querySelector("button");

const getJoke = () => {
    fetch(dadJokeUrl, myHeader)
                .then(res => {
                    if (!res.ok) {
                        console.log("Error", res.status)
                    } else {
                        return res.json()
                    }                   
                })
                .then( data => {
                    joke.innerHTML = data.joke;
                    button.addEventListener("click", getJoke);
                })
                .catch(error => console.log("Error:", error))
}