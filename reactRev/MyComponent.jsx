import React, { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('Guest');
  const [quantity, setQuantity] = useState();

  function handelNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handelNameChange}></input>
      <p>Name: {name}</p>

      <input
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      ></input>
      <p>Quantity : {quantity}</p>
    </div>
  );
}

export default MyComponent;
