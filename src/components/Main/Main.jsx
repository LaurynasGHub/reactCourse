import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
// components
import Card from '../Card/Card';
import SortButtons from '../sortBtn/SortButtons';

import './main.scss';

function Main() {
  const { data, setData, handleAddToCard } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <SortButtons handleSortData={handleSortData} />
      </div>

      {data.map((item) => (
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
