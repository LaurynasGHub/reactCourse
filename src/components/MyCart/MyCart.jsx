import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
import './myCart.scss';
// components
import Card from '../Card/Card';
import SortButtons from '../sortBtn/SortButtons';

function MyCard() {
  const { cartData, setCartData, handleRemoveFromCard } =
    useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <SortButtons handleSortData={handleSortData} />
      </div>

      {cartData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          handleCardButton={handleRemoveFromCard}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
