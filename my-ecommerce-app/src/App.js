import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProductPage from './component/ProductPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          {/* Other routes can be added here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
