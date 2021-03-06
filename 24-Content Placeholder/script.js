const card = document.querySelector(".card");

window.addEventListener("load", () => {
    card.classList.add("active")
})

setTimeout(loadContent, 3000)

function loadContent() {
    card.classList.remove("active");
    card.innerHTML = `
            <div class="card__image">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Computer">
            </div>
            <div class="card__text">
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut, quaerat aspernatur id provident.</p>

                <div class="card__profile">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="face" class="card__profile--picture">
                    <div class="card__profile--text">
                        <h4>John Doe</h4>
                        <span class="date">Oct 25, 2021</span>
                    </div>
                </div>
            </div>`
}