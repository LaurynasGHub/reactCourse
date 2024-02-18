import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { mockData } from './mockData';
//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [data, setData] = React.useState(mockData);
  // const [favData, setFavData] = React.useState(mockData);
  const [favCardData, setFavCardData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
  };

  const handleAddToFavorites = (item) => {
    setFavCardData([...data, item]);

    const filteredFavData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredFavData);
  };

  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setCardData(filteredCardData);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            //sitoj vietoj pakeitus i handelAddToFavorites sumeta i favorites, cia kazkokios logikos reikia kur ka det?
            <Main data={data} setData={setData} setCardData={handleAddToCard} />
          }
        />
        <Route
          path="/my-card"
          element={
            <MyCard cardData={cardData} setCardData={handleRemoveFromCard} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favData={favCardData}
              setCardData={handleAddToFavorites}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
