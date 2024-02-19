import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
// components
import Card from '../Card/Card';
import SortButtons from '../sortBtn/SortButtons';

function Favorites() {
  const { favoritesData, setFavoritesData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favoritesData, direction);
    setFavoritesData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <SortButtons handleSortData={handleSortData} />
      </div>

      {favoritesData.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          handleCardButton={() => {}}
        />
      ))}
    </main>
  );
}

export default Favorites;
