import React from 'react';

const CartWidget = () => {
  return (
    <div>
      <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
      <span>3</span> {/* Número de productos en el carrito */}
    </div>
  );
};

export default CartWidget;