
const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const toTop = document.getElementById('toTop');
const toBottom = document.getElementById('toBottom');
const limit = 50
let offset = 0;

function loadPokemonItems(offset, limit) {
    
    function convertPokemonToLi(pokemon) {
        return `
        </div>

            <button id="pokemonBtn" onclick="document.querySelector('.${pokemon.name}Modal').style.display='block';" style="all:unset; cursor:pointer;">
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
            </button>

            <div id="pokemonModal" class="modal ${pokemon.name}Modal">

                <div class="modalContent ${pokemon.type}">
                    <div class="topModal">
                        <button class="close" onclick="document.querySelector('.${pokemon.name}Modal').style.display='none';"></button>
                        <div style="position: relative;">
                            <span class="modalName">${pokemon.name}</span>
                            <span class="modalNumber">${'#'+pokemon.id.toString().padStart(3,'0')}</span>
                        </div>
                        <div>
                            <ol class="modalTypes">
                                ${pokemon.types.map((type) => `<li class="modalType ${type}">${type}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="imgModal">
                            <img src=${pokemon.image} onerror="this.onerror=null; this.src='/assets/images/missingno.png'"
                            alt="${pokemon.name}">
                        </div>
                    </div>
                    <div class="subModal">
                        ${pokemon.abilities.map((ability) => `<li class="${ability}">${ability}</li>`).join('')}
                        <p>${pokemon.weight} kg</p>
                        <p>${pokemon.height} m</p>
                    </div>
                </div>

            </div>
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

//Funcoes relacionadas aos botoes de movimentacao da pagina
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function bottomFunction() {
    loadMore.scrollIntoView({block: "center"});
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      toTop.style.display = "inline-block"
    } else {
      toTop.style.display = "none";
    }

    if (Math.ceil(document.body.scrollHeight - document.body.scrollTop) === document.body.clientHeight) {
        toBottom.style.display = "none";
      } else {
        toBottom.style.display = "inline-block"
      }
  }