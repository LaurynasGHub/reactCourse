import React from 'react';
import Card from '../Card/Card';
import SortButton from '../sortBtn/SortButton';
import './myCard.scss';

function MyCard({ cardData, setCardData }) {
  return (
    <main className="container">
      <SortButton />
      {cardData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          setCardData={setCardData}
          card={true}
          favorite={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
