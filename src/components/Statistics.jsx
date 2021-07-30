import React, { useContext } from "react";
import pokedex from '../assets/pokedex';
import { PokemonIndexContext } from "../hooks/pokemonContext";

function Statistics() {
	const[pokemon] = useContext(PokemonIndexContext);
	console.log(pokemon)
	return (
		<div className="statistics-container">
			<h1>{pokedex[pokemon].name.english}</h1>
			<div className="statistics">
				<ul>
					<li>HP</li>
					<li>Attack </li>
					<li>Defense</li>
					<li>Sp. Attack</li>
					<li>Sp. Defense</li>
					<li>Speed</li>

				</ul>
				<ul>
					<li>{pokedex[pokemon].base.HP}</li>
					<li>{pokedex[pokemon].base.Attack}</li>
					<li>{pokedex[pokemon].base.Defense}</li>
					<li>{pokedex[pokemon].base["Sp. Attack"]}</li>
					<li>{pokedex[pokemon].base["Sp. Defense"]}</li>
					<li>{pokedex[pokemon].base.Speed}</li>
				</ul>
			</div>
		</div>
	)
};

export default Statistics;