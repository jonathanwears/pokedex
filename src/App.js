import React, { useState } from 'react';
import './App.css';
import pokedex from './assets/pokedex.json';
import RandomPokemon from './components/RandomPokemon';
import SearchBox from "./components/SearchBox";

function App() {

  const [pokemon, setPokemon] = useState(0);

  function findPokemonIndex(pokemon) {
      setPokemon(pokemon)
  }


  return (
    <div className="App">
      <div className="searchBox">
        <SearchBox 
         findPokemonIndex={findPokemonIndex}
        />   
      </div>

      <div className="Statistics">

        <p>HP {pokedex[pokemon].base.HP}</p>
        <p>Attack {pokedex[pokemon].base.Attack}</p>
        <p>Defense {pokedex[pokemon].base.Defense}</p>
        <p> Sp. Attack {pokedex[pokemon].base["Sp. Attack"]}</p>
        <p>Sp. Defense {pokedex[pokemon].base["Sp. Defense"]}</p>
        <p>Speed {pokedex[pokemon].base.Speed}</p>
      </div>

      <div className="Sprite">

        <img
          className='pokemonImg'
          name={pokemon}
          src={`https://img.pokemondb.net/artwork/large/${pokedex[pokemon].name.english.toLowerCase()}.jpg`}
          alt={pokemon}
        >
        </img>
      </div>
      <RandomPokemon 
        findPokemonIndex={findPokemonIndex}
      />
      
     
    </div>
  );
};
export default App;