
const resetBtn = document.getElementById('resetBtn')

function loadPokemonItemsRandom(offset, limit) {
    
    function convertPokemonToLi(pokemon) {
        return `
        </div>

            <button id="pokemonBtn" onclick="document.querySelector('.${pokemon.name}Modal').style.display='block';" style="all:unset; cursor:pointer;">
            <li class="random-pokemon ${pokemon.type}">
                    <span class="number">${'#'+pokemon.nationalDex.toString().padStart(3,'0')}</span>
                    <span class="name">${pokemon.name.replace('-', ' ')}</span>
    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src=${pokemon.image} onerror="this.onerror=null; this.src='../images/missingno.png'"
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
                            <img src="../images/pokeball.svg" alt="pokeball" class="pokeballModal">
                            <img class="pokemonImageModal" src=${pokemon.image} onerror="this.onerror=null; this.src='../images/missingno.png'"
                            alt="${pokemon.name}">
                        </div>
                    </div>
                    <div class="subModal">
                        <h2 style="margin-bottom: 1rem; font-size:2.5vmax;">About</h2>
                        <hr class="pad">
                        <span class="informationModal flavorText">${pokemon.flavor_text}</span>
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
        document.getElementById('pokemonRandomList').innerHTML += listHTML
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

resetBtn.addEventListener('click', () => {
    document.querySelector('.random-pokemon').remove()
    getPokemonsMax()
})