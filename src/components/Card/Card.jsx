import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const { favoritesData, handleAddToFavorites, handleRemoveFromFavorites } =
    useContext(AppContext);

  const isFavorite = favoritesData.some((item) => item.title === title);

  const handleAddToCard = () => {
    handleCardButton({ title, description });
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
              ? handleRemoveFromFavorites({ title, description })
              : handleAddToFavorites({ title, description });
          }}
        />
      </div>
      <p>{description}</p>
      <Button type="teal" onClick={handleAddToCard}>
        {card ? 'remove' : 'add to cart'}
      </Button>
    </div>
  );
}

export default Card;
