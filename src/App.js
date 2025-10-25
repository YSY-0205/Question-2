import React from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo-container">
          <img 
            src={require('./components/resonate-1.webp')} 
            alt="Resonate Logo" 
            className="logo-image"
          />
        </div>
        <p className="header-description"></p>
      </header>
      <main className="app-main">
        <Contacts />
      </main>
    </div>
  );
}

export default App;
