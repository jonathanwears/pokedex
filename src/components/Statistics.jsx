import React from "react";
import pokedex from '../assets/pokedex.json';

function Statistics(props) {

	return (
		<div className="statistics-container">
			<h1>{pokedex[props.pokemon].name.english}</h1>
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
					<li>{pokedex[props.pokemon].base.HP}</li>
					<li>{pokedex[props.pokemon].base.Attack}</li>
					<li>{pokedex[props.pokemon].base.Defense}</li>
					<li>{pokedex[props.pokemon].base["Sp. Attack"]}</li>
					<li>{pokedex[props.pokemon].base["Sp. Defense"]}</li>
					<li>{pokedex[props.pokemon].base.Speed}</li>
				</ul>
			</div>
		</div>
	)
};

export default Statistics;