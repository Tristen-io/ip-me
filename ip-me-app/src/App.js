
import './App.css';
import React from 'react';
import WaveBackground from './components/WaveBackground';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import UserIp from './components/UserIp';

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  // 
  // console.log(process.env.REACT_APP_IP_API_KEY)
  const [ip, setIP] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data)
        setIP(res.data.IPv4)
    }

    useEffect( () => {
        getData()
    }, [])
  return (
    <>
      <Hero />
      <UserIp currentIp={ip}/>
      <SearchBar currentIp={ip}/>
      <WaveBackground />
    </>
  );
}

export default App;
