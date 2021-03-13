import React from "react";
import pokedex from "../assets/pokedex";

function PokemonImg(props) {

	return (
		<div className="img-container">
			<img
				className='pokemonImg'
				name={props.pokemon}
				src={`https://img.pokemondb.net/artwork/large/${pokedex[props.pokemon].name.english.toLowerCase()}.jpg`}
				alt={props.pokemon}
			>
			</img>
		</div>
	)
};

export default PokemonImg;