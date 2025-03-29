import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPokemon } from '../fetchData';
import './battle.css';

const Battle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const poke1Name = params.get('poke1');
  const poke2Name = params.get('poke2');

  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const poke1 = await getPokemon(poke1Name);
      const poke2 = await getPokemon(poke2Name);
      setPokemon1(poke1);
      setPokemon2(poke2);
    }
    fetchData();
  }, [poke1Name, poke2Name]);

  const declareWinner = () => {
    if (!pokemon1 || !pokemon2) return;
    const winner = pokemon1.stats[1].base_stat > pokemon2.stats[1].base_stat ? pokemon1.name : pokemon2.name;
    navigate(`/winner?winner=${winner}`);
  };

  return (
    <div className="battle-container">
      <h1 className="battle-title">Pokémon Battle</h1>
      
      <div className="battle">
        {pokemon1 && (
          <div className="pokemon">
            <img src={pokemon1.sprites.front_default} alt={pokemon1.name} className="pokemon-image" />
            <h2 className="pokemon-name">{pokemon1.name.toUpperCase()}</h2>
            <p className="pokemon-stats"><strong>HP:</strong> {pokemon1.stats[0].base_stat}</p>
            <p className="pokemon-stats"><strong>Attack:</strong> {pokemon1.stats[1].base_stat}</p>
          </div>
        )}

        <h2 className="vs-text">VS</h2>

        {pokemon2 && (
          <div className="pokemon">
            <img src={pokemon2.sprites.front_default} alt={pokemon2.name} className="pokemon-image" />
            <h2 className="pokemon-name">{pokemon2.name.toUpperCase()}</h2>
            <p className="pokemon-stats"><strong>HP:</strong> {pokemon2.stats[0].base_stat}</p>
            <p className="pokemon-stats"><strong>Attack:</strong> {pokemon2.stats[1].base_stat}</p>
          </div>
        )}
      </div>

      <button onClick={declareWinner} className="battle-btn">See who the Champion is!!</button>
    </div>
  );
};

export default Battle;
