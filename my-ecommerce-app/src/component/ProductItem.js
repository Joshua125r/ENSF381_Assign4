import React, { useState } from 'react';

export default function ProductItem({ product, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <img src={product.image} alt={product.name} className='product-image' />
      <p onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
        {product.name}
      </p>
      <p>${product.price}</p>
      {showDetails && <p>{product.description}</p>}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
