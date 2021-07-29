import React from "react";

function SearchInput({ setFilteredPokemon, pokedex }) {

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