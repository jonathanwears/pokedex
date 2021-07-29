import React, { useState, createContext } from 'react';

export const PokemonIndexContext = createContext();
export const PokemonIndexProvider = (props) => {
  const [pokemon, setPokemon] = useState(0);

  return (
    <PokemonIndexContext.Provider value={[pokemon, setPokemon]}>
      {props.children}
    </PokemonIndexContext.Provider>
  )
};