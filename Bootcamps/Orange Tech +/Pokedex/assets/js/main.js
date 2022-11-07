
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

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getPokemons().then((pokemons = []) => {
    listHTML = pokemons.map(convertPokemonToLi).join('')    
    pokemonList.innerHTML = listHTML
})
