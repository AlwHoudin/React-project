import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart className="me-2" />
      <span className="badge bg-danger">3</span>
    </div>
  );
}

export default CartWidget;
