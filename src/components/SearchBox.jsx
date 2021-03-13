import React, { useEffect, useState } from "react";
import lookUp from "../assets/pokemonLookUp";
import SearchResultBox from "./SearchResultBox";

function SearchBox(props) {

	// sets the list of pokemon to search through.
	const [pokemonList, setPokemonList] = useState(lookUp);
	const [filteredPokemon, setFilteredPokemon] = useState([]);

	function findPokemonId(pokemon) {
		props.findPokemonIndex(pokemonList.indexOf(pokemon));
		setFilteredPokemon([]);
	}

	function handleOnChange(event) {
		//remove any whitespace 
		const value = event.target.value.trim();
		if (value === "") {
			setFilteredPokemon([]);
		} else {
			const filteredList = pokemonList.filter(element => element.toLowerCase().includes(value.toLowerCase())).slice(0, 10);
			setFilteredPokemon(filteredList);
		};
	};

	return (
		<div>
			<form>
				<input
					className="searchBox-input"
					type="text"
					autoComplete="false"
					placeholder="Search for Pokémon"
					onChange={handleOnChange}

				>
				</input>

				{filteredPokemon.length >= 1 ?
					<div className="search-suggestions">
						{filteredPokemon.map((pokemon, index) => {

							return (
								<SearchResultBox
									key={index}
									input={pokemon}
									value={pokemon}
									findPokemonId={findPokemonId}
								/>

							)
						})}
					</div>
					: null
				}
			</form>
		</div>
	)
};
export default SearchBox;