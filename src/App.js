import React, { useState } from 'react';
import './App.css';
import PokemonImg from './components/PokemonImg';
import RandomPokemon from './components/RandomPokemon';
import SearchBox from "./components/SearchBox";
import Statistics from './components/Statistics';

function App() {

  const [pokemon, setPokemon] = useState(0);

  function findPokemonIndex(pokemon) {
    setPokemon(pokemon);
  }

  return (
    <div className="App">
    
      <SearchBox
        findPokemonIndex={findPokemonIndex}
      />

      <div className="container">
        <Statistics
          pokemon={pokemon}
        />

        <PokemonImg
          pokemon={pokemon} />

      </div>

      <RandomPokemon
        findPokemonIndex={findPokemonIndex}
      />

    </div>
  );
};

export default App;