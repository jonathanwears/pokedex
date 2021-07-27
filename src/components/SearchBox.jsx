import React, { useState, useRef } from "react";
import SearchResultBox from "./SearchResultBox";
import pokedexJson from "../assets/pokedex.json";
import SearchInput from "./SearchInput";
import usePokemon from '../hooks/usePokemon';

function SearchBox() {
	const { setPokemon } = usePokemon();
	const [filteredPokemon, setFilteredPokemon] = useState([]);
	const pokedex = useRef(pokedexJson.map(pokemon => pokemon.name.english));

	return (

		<div>
			<form>
				<SearchInput setFilteredPokemon={setFilteredPokemon} pokedex={pokedex} />

				<SearchResultBox
					setPokemon={setPokemon}
					filteredPokemon={filteredPokemon}
					setFilteredPokemon={setFilteredPokemon}
					pokedex={pokedex}
				/>

			</form>
		</div>
	);
};

export default SearchBox;