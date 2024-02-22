import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
import './myCart.scss';
// components
import Card from '../Card/Card';
import SortButtons from '../sortBtn/SortButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

function MyCard() {
  const { cartData, setCartData, handleRemoveFromCard } =
    useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };

  const calcPrice = cartData.reduce((prev, current) => {
    return prev + +current.price;
  }, 0);

  // const calcPrice = (cartData) => {
  //   let price;
  // };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <SortButtons handleSortData={handleSortData} />
        <p className="kaina">{'total : ' + calcPrice + '€'}</p>
      </div>

      {cartData.map(({ title, description, price }) => (
        <Card
          key={title}
          title={title}
          price={price}
          description={description}
          handleCardButton={handleRemoveFromCard}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
