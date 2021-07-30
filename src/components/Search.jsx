import React, { useState } from "react";
import SearchResultBox from "./SearchResultBox";
import SearchInput from "./SearchInput";

function Search() {
	const [filteredPokemon, setFilteredPokemon] = useState([]);
	
	return (
		<div>
			<form>
				<SearchInput 
					setFilteredPokemon={setFilteredPokemon}
				  />
				<SearchResultBox
					setPokemon
					filteredPokemon={filteredPokemon}
					setFilteredPokemon={setFilteredPokemon}			
				/>
			</form>
		</div>
	);
};

export default Search;