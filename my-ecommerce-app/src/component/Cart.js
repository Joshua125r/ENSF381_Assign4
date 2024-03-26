import React from 'react';
import CartItem from './CartItem';

export default function Cart({ cartItems, removeFromCart }) {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total Cost: {totalCost}</p>
    </div>
  );
}