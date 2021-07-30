import React from "react";
import pokedex from "../hooks/pokedex";

function SearchInput({ setFilteredPokemon }) {
	function handleOnChange(event) {
		//remove any whitespace 
		const value = (event.target.value.trim()).toLowerCase();
		if (value === "") return setFilteredPokemon([]);
		
		const filteredList = pokedex.filter(element => element.toLowerCase().includes(value)).slice(0, 10);
		setFilteredPokemon(filteredList);
	};
	
	return (
		<input
			className="searchBox-input"
			type="text"
			autoComplete="false"
			placeholder="Search for Pokémon"
			onChange={handleOnChange}
		>
		</input>
	)

};

export default SearchInput;