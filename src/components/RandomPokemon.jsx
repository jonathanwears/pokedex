import React from "react";

function RandomPokemon({ setPokemon }) {

	function handleClick() {
		const randomNumber = Math.round(Math.random() * Math.floor(150));
		setPokemon(randomNumber);
	};

	return (
		<div id="randomise">
			<button name="random" className="randomise-btn" onClick={handleClick}>
				Random
			</button>
		</div>
	);
};

export default RandomPokemon;