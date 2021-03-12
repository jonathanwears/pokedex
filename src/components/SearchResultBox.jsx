import React from "react";

function SearchResultBox(props) {

	function handleOnClick() {
		props.findPokemonId(props.value)

	};

	return (
		<div>
			<ul className="search-results-dropdown" >
				<li onClick={handleOnClick}>
					{props.input}
				</li>
			</ul>
		</div>
	);
};

export default SearchResultBox;