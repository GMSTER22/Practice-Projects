let userDataHttp = `https://api.github.com/users`;

const container = document.querySelector(".container");
const form = document.getElementById("form");
const input = document.getElementById("search");

const user = document.createElement("div");
user.classList.add("user");


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const searchInput = input.value.trim().split(" ").join("");

    if (searchInput && searchInput !== "" ) {

        makeReq(userDataHttp, `/${searchInput.trim()}`)
        .then((data) => { 

            makeReq(userDataHttp, `/${searchInput}` + "/repos")
            .then(repoData => 
                        
            user.innerHTML = 
                         `            
                            <div class="user__img">
                            <img src="${data.avatar_url}" alt="">
                            </div>
                            <div class="user__info">
                            <h3 class="user__name">${data.name}</h3>
                            <p class="user__bio">${data.bio}</p>
                            <ul class="user__stats">
                                <li class="user__followers">${data.followers} <strong>Followers</strong></li>
                                <li class="user__following">${data.following}<strong>Following</strong></li>
                                <li class="user__repos">${data.public_repos}<strong>Repos</strong></li>
                            </ul>
                            <div class="latest__repos">
                                <span>${repoData[repoData.length - 1].name}</span>
                                <span>${repoData[repoData.length - 2].name}</span>
                                <span>${repoData[repoData.length - 3].name}</span>
                                <span>${repoData[repoData.length - 4].name}</span>
                                <span>${repoData[repoData.length - 5].name}</span>
                            </div>
                        </div>`
            )

            container.appendChild(user)
        })

        searchInput = ""
    }
})


const makeReq = async function (url, user="", repos ="") {    
    try {
        const res = await axios(url + user + repos);
        const data = await res.data;
        return data;
    } catch(error) {
        if (error.response.status == 404) {
            container.innerHTML = `
                                <div class="user">
                                    <h1>No profile for this username</h1>
                                </div>`
        }
    }
}

makeReq(userDataHttp, "/gmster22").then((data)=> console.log(data)).then(makeReq(userDataHttp, "/gmster22", "/repos").then(data=> console.log(data, "repos")))


