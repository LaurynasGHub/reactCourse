import React, { useContext } from 'react';
import { AppContext } from '../../index';
//components
import './card.scss';
import '../MyCard/MyCard';
// import '../Main/Main';

function Card({ title, description, setCardData, card, favorite }) {
  const myData = useContext(AppContext);

  console.log(myData.setData);
  const handleAddToCard = () => {
    setCardData({ title, description });
  };

  const handleAddToFavorites = () => {
    setCardData({ title, description });
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {card ? 'remove from card' : 'add to card'}
      </button>
      <button onClick={handleAddToFavorites}>
        {favorite ? 'remove from favorites' : 'add to favorites'}
      </button>
    </div>
  );
}

export default Card;
