const users = document.querySelector(".users");
const search = document.getElementById("search");
const url = "https://randomuser.me/api/?results=50";


function filterUser() {
    search.addEventListener("input", () => {
        const searchInput = search.value;
        const usersName = document.querySelectorAll(".user__name");

        Object.values(usersName).filter(name => {

            // console.log(name)

            if (!name.textContent.includes(searchInput)) {
                name.parentElement.parentElement.style.display = "none";
            } else {
                name.parentElement.parentElement.style.display = "block"
            }

            // console.log(name.textContent.includes(searchInput))
            // return name.textContent.indexOf(searchInput); 
        });        
    });
}

filterUser();


async function fetchUsers() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        users.innerHTML = `
                            <h3 style="text-align: center; padding: 1rem 0; font-size: 1.6rem; color: red;">
                                    ${error}
                            </h3">`
    }
}

fetchUsers().then(data =>  {
                                const users = data.results;

                                users.forEach(user => {
                                    createUser(user); 
                                });
                            });



const createUser = (user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const userInfo = `
                        <img src=${user.picture.medium} alt="User image">
                        <div class="user__info">
                            <span class="user__name">${user.name.first} ${user.name.last}</span>
                            <span class="user__location">${user.location.city}, ${user.location.country}</span>
                        </div>`;

    userDiv.innerHTML = userInfo;
    users.appendChild(userDiv);
}