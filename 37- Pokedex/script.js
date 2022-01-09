const container = document.getElementById("container");
const count = 150;
const colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    ghost: "grey",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#f5f5f5",
    fighting: "#e6e0d4",
    normal: "#f5f5f5",
    ice: "white"
}

const fetchPokemons = async () => {
    try {
        for (let i = 1; i < count; i++) {
            getPokemons(i);
        }
    } catch(error) {
        console.log(error)
    }
};

const getPokemons = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    // console.log(data, data.forms[0].name, data.id, data.types[0].type.name, data.sprites.back_default)

    pokemonCard(data)
};


const pokemonCard = (data) => {
    const card = document.createElement("div");
    card.classList.add("pokemon");
    card.style.backgroundColor = colors[data.types[0].type.name];
    let pokemonID = data.id;
    let pokemonImg = data.sprites.front_default;
    let pokemonName = data.forms[0].name;
    let pokemonType = data.types[0].type.name;


    if (pokemonID < 10) {
        pokemonID = pokemonID.toString()
        pokemonID = pokemonID.padStart(3, "0")
        console.log( pokemonID, typeof pokemonID)
    } else if (pokemonID < 100) {
        pokemonID = pokemonID.toString()
        pokemonID = pokemonID.padStart(3, "0")
    }

    card.innerHTML = `
            <div class="pokemon__image">
                <img src=${pokemonImg} alt="pokemon image">
            </div>
            <div class="pokemon__info">
                <span class="pokemon__number">#${pokemonID}</span>
                <h2 class="pokemon__name">${pokemonName}</h2>
                <span class="pokemon__type">Type: ${pokemonType}</span>
            </div>`;

    container.appendChild(card)
}

fetchPokemons()