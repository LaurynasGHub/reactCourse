import mockData from '../../mockData.js';
import React, { useState } from 'react';

function SortButton() {
  //   const [data, setData] = useState([mockData]);
  //cant get data to sort?
  const [data, setData] = React.useState(mockData);

  const handleSortData = (direction) => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

      if (fa < fb) return direction === 'az' ? -1 : 1;
      if (fa > fb) return direction === 'az' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <div className="main-action-btn">
      <button
        onClick={() => {
          handleSortData('az');
        }}
      >
        Sort A-Z
      </button>
      <button
        onClick={() => {
          handleSortData('za');
        }}
      >
        Sort Z-A
      </button>
    </div>
  );
}

export default SortButton;
