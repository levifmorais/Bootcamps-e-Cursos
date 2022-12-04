
const pokeAPI = {}

let max_pokemon = 0;

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon;
    
    pokemon.name = pokeDetail.name;
    pokemon.id = pokeDetail.id;
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    const [ability] = abilities;

    pokemon.abilities = abilities;
    pokemon.ability = ability;

    pokemon.weight = pokeDetail.weight / 10;
    pokemon.height = pokeDetail.height / 10;
    
    pokemon.image = `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" `

    return pokemon
}

pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeAPI.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        max_pokemon = jsonBody.count
        return jsonBody.results})
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails
    )
}
  
/*
pokeAPI.getPokemonSpeciesDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemonSpecies)
}

function convertPokeApiDetailToPokemonSpecies(pokeDetail) {
    const pokemonSpecies = new PokemonSpecies;

    const egg_groups = pokeDetail.egg_groups.map((groupSlot) => groupSlot.group.name);
    const [egg_group] = egg_groups;

    pokemonSpecies.egg_groups = egg_groups;
    pokemonSpecies.egg_group = egg_group;
    
    return pokemonSpecies
}

pokeAPI.getPokemonsSpecies = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        return jsonBody.results})
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonSpeciesDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails
    )
} */