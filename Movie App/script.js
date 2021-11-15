const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4ea057cf927e86156d353490f5b479aa&language=en-EN&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w500"

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=4ea057cf927e86156d353490f5b479aa&query=Jack+Reacher";

const container = document.getElementById("main");

const getPopularMovies = getMovies(API_URL);

async function getMovies (url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results)
    return data.results;
} 

getPopularMovies.then(movies => {
    console.log(movies)
    movies.forEach(movie => {
        const { title, vote_average, overview, backdrop_path} = movie;

        let movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <div class="movie">
            <img src=${IMG_PATH}${backdrop_path} alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>`

        container.appendChild(movieEl)
    });
})


// getPopularMovies()
// .then(res => res.json())
// .then(data => {
//     let movies = data.results;
//     console.log(data.results)
//     movies.forEach(movie => {
//         let img = document.createElement("img");
//         img.setAttribute("src",`https://image.tmdb.org/t/p/original${movie.backdrop_path}`)
//         document.body.appendChild(img)
//         console.log(movie.title, movie.vote_average, movie.backdrop_path)
//     });
// })


// const searchMovie = () => {
//     fetch("https://api.themoviedb.org/3/search/movie?api_key=4ea057cf927e86156d353490f5b479aa&query=Jack+Reacher")
//     .then((res) => {
//         return res.json();
//     })
//     .then(data => console.log(data))
// }

// searchMovie()
