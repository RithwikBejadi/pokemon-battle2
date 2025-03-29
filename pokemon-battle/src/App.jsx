import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/main';
import SelectPokemon from './Components/selectPokemon';
import Battle from './Components/battle';
import Winner from './Components/winner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<SelectPokemon />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
    </Router>
  );
}

export default App;