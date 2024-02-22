import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCart from './components/MyCart/MyCart';

import './App.scss';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
