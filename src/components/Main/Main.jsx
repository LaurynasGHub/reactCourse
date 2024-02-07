import React from 'react';
import './main.scss';
import { mockData } from '../../mockData';

//components
import Card from '../Card/Card';

function Main() {
  // console.log(mockData);
  return (
    <main className="main-container">
      {mockData.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </main>
  );
}

export default Main;
