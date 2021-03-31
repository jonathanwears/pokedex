import React, { useState } from "react";

import SearchResultBox from "./SearchResultBox";
import SearchInput from "./SearchInput";

function SearchBox(props) {

	
	// sets the list of pokemon to search through.
	const [filteredPokemon, setFilteredPokemon] = useState([]);

	
	return (
		<div>
			<form>

				<SearchInput setFilteredPokemon={setFilteredPokemon} />

				<SearchResultBox
					filteredPokemon={filteredPokemon}
					setFilteredPokemon={setFilteredPokemon}

				/>
			</form>
		</div>
	)
};

export default SearchBox;