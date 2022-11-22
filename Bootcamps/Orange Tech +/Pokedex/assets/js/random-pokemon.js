
function loadPokemonItemsRandom(offset, limit) {
    
    function convertPokemonToLi(pokemon) {
        return `
            <li class="pokemon ${pokemon.type}">
                    <span class="number">${'#'+pokemon.id.toString().padStart(3,'0')}</span>
                    <span class="name">${pokemon.name}</span>
    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src=${pokemon.image}
                        alt="${pokemon.name}">
                    </div>
            </li>
        `
    }

    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        listHTML = pokemons.map(convertPokemonToLi).join('')    
        document.getElementById('body').innerHTML += listHTML
    })
}

function getPokemonsMax(){
    const url = `https://pokeapi.co/api/v2/pokemon?offset=1&limit=1`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        randomPokemon = Math.floor(Math.random() * jsonBody.count) + 1;
        loadPokemonItemsRandom(randomPokemon, 1)})
    }

getPokemonsMax()