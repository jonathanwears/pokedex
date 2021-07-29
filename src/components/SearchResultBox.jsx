import React, { useContext } from "react";
import { PokemonIndexContext } from "../hooks/pokemonContext";

function SearchResultBox({ pokedex, filteredPokemon, setFilteredPokemon }) {
	const [, setPokemonIndex] = useContext(PokemonIndexContext);
	
	function handleOnClick(event) {
		console.log(" from search box click handler "  )
		let a = pokedex.current.indexOf(event.target.value)
		setPokemonIndex(a);
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