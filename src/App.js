import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app-container">
      <h1>Fake Store Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details">
          <div className="details-content">
            <button className="close-button" onClick={handleCloseDetails}>
              Close
            </button>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>{selectedProduct.description}</p>
            <p>${selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
