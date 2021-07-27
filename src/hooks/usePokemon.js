import { useState } from 'react';

function usePokemon() {
  const [pokemon, setPokemon] = useState(0);
 
  return {
    pokemon,
    setPokemon,
  };
};

export default usePokemon;
