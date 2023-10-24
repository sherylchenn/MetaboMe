import React from 'react';
import './App.css';
import MetabolicRateForm from './MetabolicRateForm';  // Import the MetabolicRateForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Metabolic Rate Calculator</h1>
        <MetabolicRateForm />  {/* Render the component here */}
      </header>
    </div>
  );
}

export default App;