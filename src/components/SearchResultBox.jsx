import React from "react";

function SearchResultBox({findPokemonIndex, pokedex, filteredPokemon, value, setFilteredPokemon}) {
	
	function handleOnClick() {
		findPokemonId(value);
	};

	function findPokemonId(pokemon) {
		findPokemonIndex(pokedex.current.indexOf(pokemon));
		setFilteredPokemon([]);
	}
	return (

		filteredPokemon.length >= 1 &&
		<div className="search-suggestions">
			{filteredPokemon.map((pokemon, index) => {
				console.log(pokemon)
				return (
					<button key={index} onClick={handleOnClick} input={pokemon} value={pokemon}>
						{pokemon}
					</button>

				)
			})}
		</div>


	);
};

export default SearchResultBox;