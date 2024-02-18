import React from 'react';
import Card from '../Card/Card';

function Favorites({ favData, setCardData }) {
  return (
    <main className="container">
      {favData.map(({ title, description }) => (
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
