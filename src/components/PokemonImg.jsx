import React, { useContext } from "react";
import pokedex from "../assets/pokedex";
import { PokemonIndexContext } from "../hooks/pokemonContext";

function PokemonImg() {
	const [pokemon] = useContext(PokemonIndexContext);
	const validatedPokemon = pokemon === 121 ? 'mr-mime' : pokedex[pokemon].name.english.toLowerCase().trim();

	return (
		<div className="img-container">
			<img
				className='pokemonImg'
				name={pokemon}
				src={`https://img.pokemondb.net/artwork/large/${validatedPokemon}.jpg`}
				alt={pokemon}
			>
			</img>
		</div>
	)
};

export default PokemonImg;