const nav = document.querySelector(".nav");
const content = document.querySelector(".content");

window.addEventListener("scroll", ()=> {
    let contentDistanceTop = content.getBoundingClientRect().top;    

    if (contentDistanceTop < 0.5 * window.innerHeight) {
        nav.classList.add("active")        
    } else {
        nav.classList.remove("active")
    }
})
