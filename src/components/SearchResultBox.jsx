import React from "react";

function SearchResultBox(props) {

	function handleOnClick() {
		props.findPokemonId(props.value);

	};

	return (
		<li onClick={handleOnClick}>
			{props.input}
		</li>

	);
};

export default SearchResultBox;