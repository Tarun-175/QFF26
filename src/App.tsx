import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Organizers from './pages/Organizers';
import PastEvent from './pages/PastEvent';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/past-event" element={<PastEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;