import React from 'react';
import Card from '../Card/Card';

function Favorites({ cardData, setCardData }) {
  return (
    <main className="container">
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

export default Favorites;
