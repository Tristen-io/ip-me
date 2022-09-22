
import './App.css';
import React from 'react';
import WaveBackground from './components/WaveBackground';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import UserIp from './components/UserIp';
function App() {
  // 
  // console.log(process.env.REACT_APP_IP_API_KEY)
  return (
    <>
      <Hero />
      <UserIp />
      <SearchBar />
      <WaveBackground />
    </>
  );
}

export default App;
