let API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=4ea057cf927e86156d353490f5b479aa&language=en-EN&page=`;

const IMG_PATH = "https://image.tmdb.org/t/p/w500"

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=4ea057cf927e86156d353490f5b479aa&query=";

const container = document.getElementById("main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

const btns = document.querySelector(".btns");
const prevBtn = document.querySelector("#previous"); 
const nextBtn = document.querySelector("#next"); 

const colorSwitch = document.querySelector("#switch");

let page = 1;
const maxPage = 500;

//Will display the movies the client is searching for

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const searchInput = search.value;

    if (searchInput && searchInput !== "") {
        document.querySelector("body").style.padding = "0 0 0 0";
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

            btns.style.display = "none";
        })

        search.value = ""

    } else {
        window.location.reload()
    }

})

// const getPopularMovies = getMovies(API_URL);

async function getMovies (url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
} 

getMovies(API_URL + page).then(movies => {

    prevBtn.setAttribute("disabled", "")

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
        </div>
        `
        container.appendChild(movieEl)
    });
})

//Fetch and display the next array of popular movies when client click next and update buttons

nextBtn.addEventListener("click", () => {

    if (page === maxPage - 1) {
        nextBtn.setAttribute("disabled", "");
        page++;
    } else if (page < maxPage - 1) {
        page++;
        nextBtn.previousElementSibling.disabled = false;
    } 

    container.innerHTML = ""

    getMovies(API_URL + page).then(movies => {

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
})

//Fetch and display the previous array of popular movies when client click previous

prevBtn.addEventListener("click", () => {

    if (page === 2) {
        prevBtn.setAttribute("disabled", "");
        page--;
    } else if (page > 2) {
        prevBtn.nextElementSibling.disabled = false;
        page--;
    }

    container.innerHTML = ""
    
    getMovies(API_URL + page).then(movies => {

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

function colors () {
    const rootEl = document.querySelector(':root');
    rootEl.classList.toggle("active")
    // console.log(rootEl)
}

colorSwitch.addEventListener("click", () => {
    colors()
})

