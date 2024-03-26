import React from 'react';

export default function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: {item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}