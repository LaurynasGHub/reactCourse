import React from 'react';
import Card from '../Card/Card';
import SortButton from '../sortBtn/SortButton';
// import './favorites.scss';
import '../MyCard/myCard.scss';

function Favorites({ favData, setCardData }) {
  return (
    <main className="container">
      <SortButton />
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
