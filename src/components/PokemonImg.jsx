import React from "react";
import pokedex from "../assets/pokedex";
import usePokemon from '../hooks/usePokemon';

function PokemonImg() {
const { pokemon } = usePokemon();

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