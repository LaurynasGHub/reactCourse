import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import './card.scss';

function Card({ title, description, handleCardButton, card, price }) {
  const { favoritesData, handleAddToFavorites, handleRemoveFromFavorites } =
    useContext(AppContext);

  const isFavorite = favoritesData.some((item) => item.title === title);

  const handleAddToCard = () => {
    handleCardButton({ title, description, price });
  };

  return (
    <div className="card">
      <div className="title-container">
        <h3>{title}</h3>
        <FontAwesomeIcon
          className={`favorite-icon ${
            isFavorite ? 'favorite-icon--active' : ''
          }`}
          icon={faHeart}
          onClick={() => {
            isFavorite
              ? handleRemoveFromFavorites({ title, description, price })
              : handleAddToFavorites({ title, description, price });
          }}
        />
      </div>
      <p>{description}</p>
      <h4>{'price: ' + price + '€'}</h4>
      <Button type="teal" onClick={handleAddToCard}>
        {card ? 'remove' : 'add to cart'}
      </Button>
    </div>
  );
}

export default Card;
