import React, { useState } from 'react';
import products from './data/products.json';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.Id}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl"
              onClick={() => openModal(product)}
            >
              <img
                src={product.Images[0]}
                alt={product.Name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-2">
                <h2 className="text-lg font-bold">{product.Name}</h2>
                <p className="text-gray-600">{product.Category}</p>
                <p className="text-gray-800 font-semibold">{product.DefaultPrice}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4 relative overflow-hidden">
				<button
				className="text-gray-500 hover:text-gray-800 text-xl font-bold absolute top-4 right-4"
				onClick={closeModal}
				>
				&times;
				</button>
				<div className="overflow-y-auto max-h-[80vh] p-4">
				<img
					src={selectedProduct.Images[0]}
					alt={selectedProduct.Name}
					className="w-full h-auto mb-4 rounded"
				/>
				<div>
					<h2 className="text-2xl font-bold mb-2">{selectedProduct.Name}</h2>
					<p className="text-gray-600 mb-1">
					<strong>Category:</strong> {selectedProduct.Category}
					</p>
					<p className="text-gray-600 mb-1">
					<strong>Price:</strong> {selectedProduct.DefaultPrice}
					</p>
					<p className="text-gray-600 mb-4">
					<strong>Status:</strong> {selectedProduct.Status}
					</p>
					<h3 className="text-lg font-semibold mb-1">Description</h3>
					<p className="text-gray-700 mb-4">{selectedProduct.Description}</p>
				</div>
				</div>
			</div>
		</div>
		)}

      </div>
    </div>
  );
};

export default ProductPage;
