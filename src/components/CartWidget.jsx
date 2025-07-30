import React, { useState } from 'react';

const CartWidget = () => {
  const [count, setCount] = useState(3);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <i className="fas fa-shopping-cart" style={{ fontSize: '24px' }}></i>
      <span style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '5px 10px',
        fontSize: '12px',
      }}>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: '10px' }}>Agregar</button>
    </div>
  );
};

export default CartWidget;