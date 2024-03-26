import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

export default function ProductList({ addToCart }) {
  return (
    <div>
      {productsData.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
