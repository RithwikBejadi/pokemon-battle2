import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>Welcome to Pokémon Battle!</h1>
      <button onClick={() => navigate('/select')}>Start Battle</button>
    </div>
  );
};

export default Main;