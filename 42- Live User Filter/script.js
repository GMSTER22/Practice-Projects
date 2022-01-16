const users = document.querySelector(".users");
const search = document.getElementById("search");
const url = "https://randomuser.me/api/?results=50";


async function fetchUsers() {
    try {
        const res = await fetch(url);
        const results = await res.json();
        return results;
    } catch (error) {
        console.log(error);
    }

}

fetchUsers()

console.log(fetchUsers().then(res=> res.json())

