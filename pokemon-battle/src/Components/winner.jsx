import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPokemon } from '../fetchData';
import './winner.css'; 

const Winner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const winnerName = params.get('winner');

  const [winnerData, setWinnerData] = useState(null);

  useEffect(() => {
    async function fetchWinner() {
      if (winnerName) {
        const data = await getPokemon(winnerName);
        setWinnerData(data);
      }
    }
    fetchWinner();
  }, [winnerName]);

  return (
    <div className="winner-container">
      <h1 className="winner-title">Winner: {winnerName?.toUpperCase()} 🎉</h1>

      {winnerData && (
        <div className="winner-box">
          <h2 className="winner-name">{winnerName.toUpperCase()}</h2>
          <img src={winnerData.sprites.front_default} alt={winnerName} className="winner-img" />
          <p className="winner-stat"><strong>HP:</strong> {winnerData.stats[0].base_stat}</p>
          <p className="winner-stat"><strong>Attack:</strong> {winnerData.stats[1].base_stat}</p>
        </div>
      )}

      <button onClick={() => navigate('/')} className="play-again-btn">Play Again</button>
    </div>
  );
};

export default Winner;
