import React, { useContext } from "react";
import { PokemonIndexContext } from "../hooks/pokemonContext";

function RandomPokemon() {
	const [, setPokemonIndex] = useContext(PokemonIndexContext);

	function handleClick() {
		const randomNumber = Math.round(Math.random() * Math.floor(150));
		setPokemonIndex(randomNumber);
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
