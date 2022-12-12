
const pokeAPI = {}

let max_pokemon = 0;

async function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon;
    const pokemonSpecies = {}

    pokemon.name = pokeDetail.name;
    pokemon.id = pokeDetail.id;
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    const [ability] = abilities;

    pokemon.abilities = abilities;
    pokemon.abilities = pokemon.abilities.map((ability) => ability.replace(/-/g, ' '));
    pokemon.ability = ability;

    pokemon.weight = pokeDetail.weight / 10;
    pokemon.height = pokeDetail.height / 10;
    
    pokemon.image = `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" `

    pokemon.species = pokeDetail.species.url;

    const urlSpecies = pokemon.species;

    pokemonSpecies.getEggGroups = () => {
        return fetch(urlSpecies)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.egg_groups.map((eggSlot) => eggSlot.name))
    }

    pokemon.egg_groups = await pokemonSpecies.getEggGroups();
    pokemon.egg_groups = pokemon.egg_groups.join(', ');

    pokemonSpecies.getPokedexNumber = () => {
        return fetch(urlSpecies)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.pokedex_numbers.map((pokedexSlot) => pokedexSlot.entry_number))
    }

    pokemon.pokedex_numbers = await pokemonSpecies.getPokedexNumber();
    pokemon.nationalDex = pokemon.pokedex_numbers[0];

    pokemonSpecies.getGenderRate = () => {
        return fetch(urlSpecies)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.gender_rate)
    }

    pokemon.gender_rate = await pokemonSpecies.getGenderRate();

    if (pokemon.gender_rate === -1) {
        pokemon.gender_rate = "Genderless"
    } 
    else {
        let eights = pokemon.gender_rate / 8 * 100
        let male_rate = 100 - eights;
        let female_rate = eights;
        pokemon.gender_rate = ["<img src='/assets/images/mars.svg'/>&nbsp;"+male_rate+"%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        "<img src='/assets/images/venus.svg'/>&nbsp;"+female_rate+"%"]
        pokemon.gender_rate = pokemon.gender_rate.join("  ")
    }

    pokemonSpecies.getGeneration = () => {
        return fetch(urlSpecies)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.generation.name)
    }

    pokemon.generation = await pokemonSpecies.getGeneration();
    pokemon.generation = pokemon.generation.replace(/generation-/, "");
    pokemon.generation = pokemon.generation.toUpperCase();

    pokemonSpecies.getFlavorText = () => {
        return fetch(urlSpecies)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.flavor_text_entries.filter((flavor) => flavor.language.name === "en"))
    }

    pokemon.flavor_text_entries = await pokemonSpecies.getFlavorText();
    pokemon.flavor_text = pokemon.flavor_text_entries[0].flavor_text;
    pokemon.flavor_text = pokemon.flavor_text.replace(/[^a-zA-ZÀ-ÿ0-9.,!?’']/g, ' ');
    pokemon.flavor_text = pokemon.flavor_text.replace("POKéMON", "Pokémon");
    pokemon.flavor_text = pokemon.flavor_text.replace("POKé BALL", "Poké Ball");
    
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