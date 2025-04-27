import React, { useState } from 'react';
import CounterApp from './app1';
import QuizApp from './app2';
import './App.css';

function App() {
  const [activeApp, setActiveApp] = useState('counter');

  const renderApp = () => {
    switch (activeApp) {
      case 'counter':
        return <CounterApp />;
      case 'quiz':
        return <QuizApp />;
      default:
        return <CounterApp />;
    }
  };

  return (
    <div className="main">
      <button><a href="http://www.johnlechw.nhely.hu/johnlechw.nhely.hu/">Return to index page</a></button>
      <h2>Chose a app you want</h2>
      <nav className="menu">
        <button onClick={() => setActiveApp('counter')}>Counter App</button>
        <button onClick={() => setActiveApp('quiz')}>Quiz App</button>
      </nav>
      <div className="apparea">{renderApp()}</div>
    </div>
  );
}

export default App;