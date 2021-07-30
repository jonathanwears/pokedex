import pokedexJson from '../assets/pokedex';

const pokedex = pokedexJson.map(pokemon => pokemon.name.english);

export default pokedex;