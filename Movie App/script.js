const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4ea057cf927e86156d353490f5b479aa&language=en-EN&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w500"

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=4ea057cf927e86156d353490f5b479aa&query=";

const container = document.getElementById("main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

//Will display the movies the client is searching for

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const searchInput = search.value;

    if (searchInput && searchInput !== "") {
        container.innerHTML = ""
        
        const getSpecificMovie = getMovies(SEARCH_URL + searchInput);

        getSpecificMovie.then( movies => {
            
            movies.forEach(movie => {

                const {title, overview, vote_average, poster_path} = movie;

                let movieEl = document.createElement("div");
                movieEl.classList.add("movie");

                movieEl.innerHTML = `
                <div class="movie">
                    <img src=${IMG_PATH}${poster_path} alt="">
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class=${noteColor(vote_average)}>${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        ${overview}
                    </div>
                </div>`

                container.appendChild(movieEl)                
            })
        })

        search.value = ""

    } else {
        window.location.reload()
    }

})

const getPopularMovies = getMovies(API_URL);

async function getMovies (url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
} 

getPopularMovies.then(movies => {
    
    console.log(movies)

    movies.forEach(movie => {
        const { title, vote_average, overview, poster_path} = movie;

        let movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <div class="movie">
            <img src=${IMG_PATH}${poster_path} alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${noteColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>`

        container.appendChild(movieEl)
    });
})

function noteColor(vote) {
    if (vote < 5) {
        return "red";
    } else if ( vote < 8) {
        return "orange";
    } else {
        return "green";
    }            
}