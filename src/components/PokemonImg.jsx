import React, { useContext } from "react";
import pokedex from "../assets/pokedex";
import { PokemonIndexContext } from "../hooks/pokemonContext";

function PokemonImg() {
	const [pokemon] = useContext(PokemonIndexContext);

	return (
		<div className="img-container">
			<img
				className='pokemonImg'
				name={pokemon}
				src={`https://img.pokemondb.net/artwork/large/${pokedex[pokemon].name.english.toLowerCase()}.jpg`}
				alt={pokemon}
			>
			</img>
		</div>
	)
};

export default PokemonImg;