import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCart from './components/MyCart/MyCart';
import Admin from './components/Admin/Admin';

import './App.scss';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Main />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
