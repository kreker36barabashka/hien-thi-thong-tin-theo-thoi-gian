import React from 'react';
import Weather from './components/Weather';
import ExchangeRates from './components/ExchangeRates';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <h1>Thông Tin Thời Gian Thực</h1>
      <Weather />
      <ExchangeRates />
      <News />
    </div>
  );
}

export default App;