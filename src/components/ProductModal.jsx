import React, { useEffect, useState } from 'react';
import RandomRec from './RandomRec';
import products from './data/products.json';

const ProductModal = ({ product, onClose }) => {
  const [randomRecommendations, setRandomRecommendations] = useState([]);

  useEffect(() => {
    // Генерируем случайные рекомендации только для модального окна
    const randomRecs = products
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    setRandomRecommendations(randomRecs);
  }, [product]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="text-gray-500 hover:text-gray-800 text-xl font-bold absolute top-4 right-4"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={product.Images[0]}
              alt={product.Name}
              className="w-64 h-auto rounded-lg shadow"
            />
          </div>

          {/* Description Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{product.Name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Category:</strong> {product.Category}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ${product.CurrentPrice}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Status:</strong> {product.Status}
            </p>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.Description}</p>
          </div>
        </div>

        {/* Recommended Products Section - Random Recommendations */}
        <RandomRec randomRecommendations={randomRecommendations} />
      </div>
    </div>
  );
};

export default ProductModal;
