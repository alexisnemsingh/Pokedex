
const POKEMON_API = "https://pokeapi.co/api/v2/";

// getPokemonList: Receives all the pokemon from the API
export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=100000&offset=0"); // offset=0 is the starting point of the data
    const data = await response.json();
    return data.results;
}

// getPokemon: Given a string with the name of the pokemon, it returns the pokemon data
export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await response.json();
    return data;
}

