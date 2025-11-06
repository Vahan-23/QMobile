import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Marketplace from './components/Marketplace';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
