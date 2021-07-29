import React from 'react';
import './App.css';
import PokemonImg from './components/PokemonImg';
import RandomPokemon from './components/RandomPokemon';
import SearchBox from "./components/SearchBox";
import Statistics from './components/Statistics';
import { PokemonIndexProvider } from './hooks/pokemonContext';

function App() {
  return (
    <PokemonIndexProvider>
      <div className="App">
      <SearchBox />
      <section className="container">
        <Statistics />
        <PokemonImg />
      </section>
      <RandomPokemon />
    </div>
    </PokemonIndexProvider>
  );
};

export default App;
