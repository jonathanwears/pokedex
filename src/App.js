import React, { useState } from 'react';
import './App.css';
import PokemonImg from './components/PokemonImg';
import RandomPokemon from './components/RandomPokemon';
import SearchBox from "./components/SearchBox";
import Statistics from './components/Statistics';

function App() {

  const [pokemon, setPokemon] = useState(0);

  return (

    <div className="App">

      <SearchBox
        setPokemon={setPokemon}
      />

      <section className="container">
        <Statistics
          pokemon={pokemon}
        />

        <PokemonImg
          pokemon={pokemon}
        />

      </section>

      <RandomPokemon
        setPokemon={setPokemon}
      />

    </div>
  );
};

export default App;