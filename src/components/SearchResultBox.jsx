import React, { useContext } from "react";
import { PokemonIndexContext } from "../hooks/pokemonContext";
import pokedexEnglish from "../assets/pokedexEnglish";

function SearchResultBox({ filteredPokemon, setFilteredPokemon }) {
	const [, setPokemonIndex] = useContext(PokemonIndexContext);
	
	function handleOnClick(event) {
	
		let a = pokedexEnglish.indexOf(event.target.value)
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