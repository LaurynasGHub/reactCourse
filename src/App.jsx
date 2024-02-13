import React, { useState } from 'react';
import './App.css';

//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';

function App() {
  const [tab, setTab] = useState('all');
  const [cardData, setCardData] = useState([]);

  return (
    <>
      <Navbar setTab={setTab} />
      {tab === 'all' && <Main setCardData={setCardData} />}
      {tab === 'card' && (
        <MyCard cardData={cardData} setCardData={setCardData} />
      )}
    </>
  );
}

export default App;
