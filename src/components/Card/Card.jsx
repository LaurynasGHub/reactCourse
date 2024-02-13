import React from 'react';
import './card.scss';
import '../MyCard/MyCard';
// import '../Main/Main';

function Card({ title, description, setCardData, card }) {
  const handleAddToCard = () => {
    setCardData({ title, description });
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {card ? 'remove from card' : 'add to card'}
      </button>
    </div>
  );
}

export default Card;
