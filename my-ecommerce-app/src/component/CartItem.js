import React from 'react';

export default function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <img src={item.image} alt={item.name} className='product-image'/>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: {item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}