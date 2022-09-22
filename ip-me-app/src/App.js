
import './App.css';
import React from 'react';
import WaveBackground from './components/WaveBackground';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
function App() {
  return (
    <>
      <Hero />
      <SearchBar />
      <WaveBackground />
    </>
  );
}

export default App;
