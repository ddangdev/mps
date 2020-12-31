import React, { useState } from 'react';

const Navigation = () => {
  const [number, setNumber] = useState(null);

  function randomColor() {
    let random = Math.floor(Math.random() * 100)
    setNumber(random);
  }

  return (
    <div>
      <h1 onClick={randomColor}>I am the Navigation Bar Bitch {number}</h1>
    </div>
  )
}

export default Navigation;
