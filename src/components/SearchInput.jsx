import React, { useRef } from "react";

import pokedexJson from "../assets/pokedex.json"



function SearchInput({ setFilteredPokemon }) {
console.log(setFilteredPokemon)
	const pokedex = useRef(pokedexJson.map(pokemon => pokemon.name.english))

	function handleOnChange(event) {
		//remove any whitespace 
		const value = (event.target.value.trim()).toLowerCase();

		if (value === "") {
			setFilteredPokemon([]);
		} else {
			const filteredList = pokedex.current.filter(element => element.toLowerCase().includes(value)).slice(0, 10);
			setFilteredPokemon(filteredList);
		};
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