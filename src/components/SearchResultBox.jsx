import React from "react";
import usePokemon from "../hooks/usePokemon";

function SearchResultBox({ pokedex, filteredPokemon, setFilteredPokemon }) {

	const { setPokemon } = usePokemon();
	function handleOnClick(event) {
		setPokemon(pokedex.current.indexOf(event.target.value));
		setFilteredPokemon([]);
	};

	return (

		filteredPokemon.length >= 1 &&
		<div className="search-suggestions">
			{filteredPokemon.map((pokemon, index) => {

				return (
					<button key={index} onClick={handleOnClick} value={pokemon}>
						{pokemon}
					</button>
				)
			})}
		</div>
	);
};

export default SearchResultBox;