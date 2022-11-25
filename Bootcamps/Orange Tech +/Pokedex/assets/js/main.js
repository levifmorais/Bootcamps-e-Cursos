
const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const limit = 50
let offset = 0;

function loadPokemonItems(offset, limit) {
    
    function convertPokemonToLi(pokemon) {
        return `
            <li class="pokemon ${pokemon.type}">
                    <span class="number">${'#'+pokemon.id.toString().padStart(3,'0')}</span>
                    <span class="name">${pokemon.name}</span>
    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src=${pokemon.image} onerror="this.onerror=null; this.src='/assets/images/missingno.png'"
                        alt="${pokemon.name}">
                    </div>
            </li>
        `
    }

    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        listHTML = pokemons.map(convertPokemonToLi).join('')    
        pokemonList.innerHTML += listHTML
    })
}

loadPokemonItems(offset, limit)

loadMore.addEventListener('click', () => {
    
    offset += limit
    
    nextPage = offset + limit

    if(nextPage >= max_pokemon) {
        loadPokemonItems(offset, (max_pokemon - offset))
        loadMore.parentElement.removeChild(loadMore)
     }
    else{
        loadPokemonItems(offset, limit)
    }
})