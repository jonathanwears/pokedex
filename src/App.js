import React, { useState } from 'react';

import './App.css';
import pokedex from './assets/pokedex.json';
import { pokemonLookUp } from './assets/pokemonLookUp.js'


function App(props) {

  const [pokemon, setPokemon] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  
  function randomise() {
    console.log("test " + pokemonLookUp[2])
    const randomNumber = Math.round(Math.random() * Math.floor(150));

    console.log(randomNumber);

      if(pokemon === randomNumber){
        randomise();
        console.log("new number required")

      }

      else {
        setPokemon(randomNumber); 
  
      }

}

  function handleChange(e) {
    
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    const filterItems = (query) => {
      return pokemonLookUp.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    
    console.log(filterItems(searchValue)) 
    
  










  }
  

  return (
    <div className="App">
      <div className="searchBox">
      
       <input type="text" placeholder="Search for Pokémon" name="search-box" onInput={handleChange}></input>
       <p>{}</p>
        
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
        
        </div>

      <div id="randomise">
          
        <button name="Random" onClick={randomise}>Random</button>
        
      </div> 

    </div>
  );
}

export default App;
