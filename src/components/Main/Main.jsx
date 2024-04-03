import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
// components
import Card from '../Card/Card';
import SortButtons from '../sortBtn/SortButtons';

import './main.scss';

function Main() {
  const [searchValue, setSearchValue] = useState('');
  const { data, setData, handleAddToCard } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <SortButtons handleSortData={handleSortData} />

        <div className="searchBtn">
          <input
            type="text"
            placeholder="Type to search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase());
            }}
          />
        </div>
      </div>
      {data.length == 0 && <h2>No items in the shop</h2>}
      {data
        .filter((item) => {
          return item.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map((item) => (
          <Card
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
            handleCardButton={handleAddToCard}
          />
        ))}
    </main>
  );
}

export default Main;
