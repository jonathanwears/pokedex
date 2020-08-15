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

      const pokemonFilteredArr = pokemonLookUp.filter(el => el.toLowerCase().includes(inputValue.toLowerCase()))

      setSearchValue(pokemonFilteredArr);

    }

  }

  function searchResulthandleClick(event) {

    const parsedPokemonId = setPokemon((parseInt(event.target.id)))
    const SearchValueReset = document.getElementById("search-box").value = "";
    setSearchValue([])

  }

  function next() {

    if (searchValue === []) {

      return

    } else {

      return searchValue.slice(0, 10).map(i =>

        <button
          className="searchValueButton"
          key={i}
          id={pokemonLookUp.indexOf((i))}
          value={i}
          ref={searchEl}
          onClick={searchResulthandleClick}
        >
          {i}
        </button >
      )

    }



  }

  return (
    <div className="App">
      <div className="searchBox">

        <input type="text" placeholder="Search for Pokémon" id="search-box" onInput={handleChange}></input>
        <ul>
          {next()}
        </ul>



      </div>

      <div className="Statistics">

        {/*Used because url link to Farfetch'd doesnt have "'". Breaks link.  */}
        {pokemon === 82 ? <h1>Farfetch'd</h1> : <h1>HP{pokedex[pokemon].base.Name}</h1>}
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