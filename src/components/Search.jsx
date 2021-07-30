import React, { useState, useRef } from "react";
import SearchResultBox from "./SearchResultBox";
import pokedexJson from "../assets/pokedex.json";
import SearchInput from "./SearchInput";

function Search() {
	const [filteredPokemon, setFilteredPokemon] = useState([]);
	const pokedex = useRef(pokedexJson.map(pokemon => pokemon.name.english));

	return (

		<div>
			<form>
				<SearchInput 
					setFilteredPokemon={setFilteredPokemon}
				 pokedex={pokedex} />
				<SearchResultBox
					setPokemon
					filteredPokemon={filteredPokemon}
					setFilteredPokemon={setFilteredPokemon}
					pokedex={pokedex}
				/>
			</form>
		</div>
	);
};

export default Search;