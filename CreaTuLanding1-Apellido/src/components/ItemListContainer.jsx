import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '¡Buenos días!';
    if (hour < 18) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{getTimeBasedGreeting()} {greeting}</h2>
    </div>
  );
};

export default ItemListContainer;