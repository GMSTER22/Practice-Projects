let userDataHttp = `https://api.github.com/users`;

const form = document.getElementById("form");
const input = document.getElementById("search");
const userName = document.querySelector(".user__name");
const userBio = document.querySelector(".user__bio");
const numberOfFollowers = document.querySelector(".user__followers");
const numberOfFollowing = document.querySelector(".user__following");
const numberOfRepos = document.querySelector(".user__repos");
const userImg = document.querySelector(".user__img > img");


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const searchInput = input.value;

    if (searchInput && searchInput !== "" ) {
        makeReq(userDataHttp, "/bradtraversy")
        .then(data =>{ 
            userImg.setAttribute("src", data.avatar_url)
            userName.textContent = data.name;
            userBio.textContent = data.bio;
            numberOfFollowers.textContent = data.followers + "  Followers";
            numberOfFollowing.textContent = data.following + "  Following";
            numberOfRepos.textContent = data.public_repos + "  Repos";
        })
        // console.log(data.bio)
        // console.log(data, data.bio);
        // console.log(res)
        // console.log(data)
        // console.log(data.bio)
        // console.log(data.following)
        // console.log(data.followers)
        // console.log(data.public_repos)
        // console.log(data.name)
    }
})

const makeReq = async function (url, user="") {    
    try {
        const res = await axios.get(url + user);
        // console.log(res)
        const data = res.data;
        // console.log(data)
        return data;
    } catch(error) {
        console.log(error, "It didn't work")
    }
}

makeReq(userDataHttp, "/gmster22").then( (data)=> console.log(data.bio, "\n" +data.name, data ))



