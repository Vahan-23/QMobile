import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import WelcomePage from './components/WelcomePage';
import Homepage from './components/Homepage';
import Marketplace from './components/Marketplace';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
