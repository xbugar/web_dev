import React from 'react';

const RandomComponent: React.FC = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Random Number Generator</h1>
      <p>Your random number is:</p>
      <h2>{getRandomNumber()}</h2>
    </div>
  );
};

export default RandomComponent;