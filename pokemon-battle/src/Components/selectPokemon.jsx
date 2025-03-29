import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPokemon } from '../fetchData'; 
import "./select.css";

const SelectPokemon = () => {
  const navigate = useNavigate();
  const [pokemon1, setPokemon1] = useState('');
  const [pokemon2, setPokemon2] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePokemon = async (name) => {
    const data = await getPokemon(name.toLowerCase());
    return data !== null; 
  };

  const startBattle = async () => {
    if (!pokemon1 || !pokemon2) {
      alert("Please enter both Pokémon names.");
      return;
    }

    setLoading(true);
    const isValidPoke1 = await validatePokemon(pokemon1);
    const isValidPoke2 = await validatePokemon(pokemon2);
    setLoading(false);

    if (!isValidPoke1 || !isValidPoke2) {
      alert("Invalid Pokémon name! Please check and enter valid Pokémon.");
      return;
    }

    navigate(`/battle?poke1=${pokemon1}&poke2=${pokemon2}`);
  };

  return (
    <div className="select-area">
      <h1>Select Your Pokémon</h1>
      <input type="text" placeholder="Enter Pokémon 1" onChange={(e) => setPokemon1(e.target.value)} />
      <input type="text" placeholder="Enter Pokémon 2" onChange={(e) => setPokemon2(e.target.value)} />
      <button onClick={startBattle} disabled={loading}>
        {loading ? "Checking..." : "Start Battle"}
      </button>
    </div>
  );
};

export default SelectPokemon;