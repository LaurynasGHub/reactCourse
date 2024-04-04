import React, { useState, createContext, useEffect, useCallback } from 'react';

import { cfg } from '../cfg/cfg';
// import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );

  const [favoritesData, setFavoritesData] = useState(
    JSON.parse(localStorage.getItem('favoritesData')) || []
  );

  const fetchData = async () => {
    try {
      setLoadingProducts(true);
      console.log('NODE_ENV', process.env.NODE_ENV);
      console.log('host', cfg.API.HOST);

      const response = await fetch(`${cfg.API.HOST}/product/`);
      console.log('Response', response);

      const products = await response.json();

      console.log('data', products);

      const filteredData = products.filter(
        (item) => !cartData.some((cartItem) => cartItem.title === item.title)
      );

      setData(filteredData);
    } catch (error) {
      console.log('error:', error.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log('AppContextProvider useEffect');
    // localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

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
        showLogin,
        setShowLogin,
        fetchData,
        setCartData,
        favoritesData,
        setFavoritesData,
        loadingProducts,
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
