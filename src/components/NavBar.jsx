import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Tienda</div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
