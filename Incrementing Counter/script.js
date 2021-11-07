const counters = document.querySelectorAll(".count");

window.addEventListener("load", () => {

    counters.forEach( (counter) => {
        counter.innerText = 0;
        
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            console.log(target)

            const c = +counter.innerText;
            
            const increment = target/100;

            if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 100)
            }
        }

        updateCounter()
    })
    
})