import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa' }}>
      <div>
        <img src="/logo.png" alt="Logo de la tienda" style={{ height: '40px' }} /> {/* Logo */}
      </div>
      <div>
        <a href="#home" style={{ margin: '0 10px' }}>Inicio</a>
        <a href="#products" style={{ margin: '0 10px' }}>Productos</a>
        <a href="#contact" style={{ margin: '0 10px' }}>Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;