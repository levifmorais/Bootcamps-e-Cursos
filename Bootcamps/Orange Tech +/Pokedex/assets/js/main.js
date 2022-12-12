
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
                    <span class="number">${'#'+pokemon.nationalDex.toString().padStart(3,'0')}</span>
                    <span class="name">${pokemon.name.replace('-', ' ')}</span>
    
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
                            <span style="opacity: 0.7; font-size:2vmax"><i>Generation ${pokemon.generation}</i></span><br>
                            <span class="modalName">${pokemon.name}</span>
                            <span class="modalNumber">${'#'+pokemon.nationalDex.toString().padStart(3,'0')}</span>
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
                        <h2 style="margin-bottom: 1rem; font-size:2.5vmax;">About</h2>
                        <hr class="pad">
                        <div class="descriptionDIV">
                            <span class="descriptionModal">Height</span>
                            <span class="informationModal">${pokemon.height} m</span>
                            <span/>
                        </div>
                        <div class="descriptionDIV">
                            <span class="descriptionModal">Weight</span>
                            <span class="informationModal">${pokemon.weight} kg</span>
                            <span/>
                        </div>
                        <div class="descriptionDIV" style="text-transform: capitalize;">
                            <span class="descriptionModal">Abilities</span>
                            <span class="informationModal">${pokemon.abilities.map((ability) => `<span>${ability}</span>`).join(',&nbsp;')}</span>
                            <span/>
                        </div>
                        <h2 style="margin-bottom: 1rem; font-size:2.5vmax;">Breeding</h2>
                        <hr class="pad">
                        <div class="descriptionDIV">
                            <span class="descriptionModal">Gender</span>
                            <span class="informationModal">${pokemon.gender_rate}</span>
                            <span/>
                        </div>
                        <div class="descriptionDIV">
                            <span class="descriptionModal">Egg Groups</span>
                            <span class="informationModal" style="text-transform: capitalize;">${pokemon.egg_groups}</span>
                            <span/>
                        </div>
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

