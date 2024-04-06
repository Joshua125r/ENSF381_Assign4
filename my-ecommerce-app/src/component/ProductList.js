import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ addToCart }) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProductsData(data))
      .catch((error) => {
          console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {productsData.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
