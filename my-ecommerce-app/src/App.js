import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProductPage from './component/ProductPage';
import LoginPage from './component/LoginPage';
import SignupForm from './component/SignupForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
