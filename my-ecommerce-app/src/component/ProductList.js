import React, { useState, useEffect, useContext } from 'react';
import ProductItem from './ProductItem';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';



export default function ProductList({ addToCart }) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn){
    navigate('/login');
  }

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
