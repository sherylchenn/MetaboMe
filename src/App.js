import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Metabolic Rate Calculator</h1>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
