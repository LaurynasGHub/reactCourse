import React, { useState, createContext, useEffect } from 'react';
import { mockData } from '../mockData';
import { json } from 'react-router-dom';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  const [favoritesData, setFavoritesData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  // const [cartData, setCartData] = useState([]);
  // const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    console.log('useEffect triggered');
    // localStorage.setItem('data', JSON.stringify(filteredData));
    localStorage.setItem('data', JSON.stringify([data]));
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [data, cartData]);

  useEffect(() => {
    localStorage.setItem('favoritesData', JSON.stringify(favoritesData));
  }, [favoritesData]);

  const handleAddToCard = (item) => {
    setCartData([...cartData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([item, ...data]);

    const filteredCardData = cartData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setCartData(filteredCardData);
  };

  const handleAddToFavorites = (item) => {
    setFavoritesData([...favoritesData, item]);
  };

  const handleRemoveFromFavorites = (item) => {
    const filteredFavoritesData = favoritesData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setFavoritesData(filteredFavoritesData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cartData,
        setCartData,
        favoritesData,
        setFavoritesData,
        handleAddToCard,
        handleRemoveFromCard,
        handleAddToFavorites,
        handleRemoveFromFavorites,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
