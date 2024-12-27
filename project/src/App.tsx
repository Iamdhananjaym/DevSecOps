import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Accounts from './pages/Accounts';
import Help from './pages/Help';
import AirlineDetails from './pages/AirlineDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airline/:id" element={<AirlineDetails />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;