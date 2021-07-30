import pokedexJson from './pokedex';

const pokedexEnglish = pokedexJson.map(pokemon => pokemon.name.english);

export default pokedexEnglish;