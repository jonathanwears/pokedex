import React, { useState, createRef } from 'react';
import './App.css';
import pokedex from './assets/pokedex.json';
import { pokemonLookUp } from './assets/pokemonLookUp.js'

function App(props) {

  const [pokemon, setPokemon] = useState(0);
  const [searchValue, setSearchValue] = useState([]);
  const searchEl = createRef();

  function randomise() {
    const randomNumber = Math.round(Math.random() * Math.floor(150));

    if (pokemon === randomNumber) {
      randomise();
    }

    else {
      setPokemon(randomNumber);

    }

  }

  function handleChange(e) {

    const inputValue = e.target.value.trim();

    if (inputValue.length === 0) {

      setSearchValue([]);

    } else {

      const pokemonFilteredArr = pokemonLookUp.filter(el =>el.toLowerCase().includes(inputValue.toLowerCase()))

      setSearchValue(pokemonFilteredArr);

    }

  }

  function test(e) {

    const a = (parseInt(e.target.id))
    setPokemon(a)

  }

  function next() {

    return searchValue.slice(0, 10).map(i =>

      <button
        className="searchValueButton"
        key={i}
        id={pokemonLookUp.indexOf((i))}
        value={i}
        ref={searchEl}
        onClick={test}
      >
        {i}
      </button >
    )

  }

  return (
    <div className="App">
      <div className="searchBox">

        <input type="text" placeholder="Search for Pokémon" name="search-box" onInput={handleChange}></input>

        <ul>
          {next()}
        </ul>

      </div>

      <div className="Statistics">

        <h1>{pokedex[pokemon].name.english}</h1>
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

      <div id="randomise">

        <button name="Random" onClick={randomise}>Random</button>

      </div>

    </div>
  );
}

export default App;