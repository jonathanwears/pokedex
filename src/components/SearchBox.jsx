import React, { useState } from "react";
import lookUp from "../assets/pokemonLookUp";
import SearchResultBox from "./SearchResultBox";

function SearchBox(props) {

	// sets the list of pokemon to search through.
	const [pokemonList, setPokemonList] = useState(lookUp);
	const [filteredPokemon, setFilteredPokemon] = useState([]);
	const [input, setInput] = useState();

	function findPokemonId(pokemon) {
		props.findPokemonIndex(pokemonList.indexOf(pokemon))
		setFilteredPokemon([]);
		setInput([])
	}

	function handleOnChange(event) {
		//remove any whitespace 
		const value = event.target.value.trim();
		setInput(value)
		const filteredList = pokemonList.filter(element => element.toLowerCase().includes(value.toLowerCase()));
		setFilteredPokemon(filteredList);
	};

	return (
		<div>
			<form>
				<input
					className="searchBox-input"
					type="text"
					placeholder="Search for Pokémon"
					id="search-box"
					onChange={handleOnChange}
					value={input}
				>
				</input>

				{filteredPokemon.length >= 1 &&
					filteredPokemon.map((pokemon, index) => {
						return <SearchResultBox
							key={index}
							input={pokemon}
							value={pokemon}
							findPokemonId={findPokemonId}
						/>

					})}
			</form>
		</div>
	)
}
export default SearchBox;