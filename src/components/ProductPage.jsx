import React, { useState } from 'react';
import ProductModal from './ProductModal';
import products from './data/products.json'; // Импортируем все продукты
import Red_heart from '../assets/red_heart.png'; // Изображение красного сердечка
import White_heart from '../assets/white_heart.png'; // Изображение белого сердечка

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Статичные рекомендации (первые 50 продуктов)
  const staticRecommendations = products.slice(0, 50); // Берем первые 50 продуктов

  // Состояние для каждого продукта (с сердечками)
  const [favoriteProducts, setFavoriteProducts] = useState(
    products.reduce((acc, product) => {
      acc[product.Id] = false; // Изначально все продукты не в избранном
      return acc;
    }, {})
  );

  // Функция для переключения состояния избранного для конкретного продукта
  const toggleFavorite = (productId) => {
    setFavoriteProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="flex flex-wrap justify-center p-6 bg-white min-h-screen">
      {/* Отображение всех продуктов */}
      {products.map((product) => (
        <div
          key={product.Id}
          className="w-80 min-h-80 bg-white rounded-lg border-4 shadow-md m-4 transition-transform transform hover:scale-105"
        >
          <div className="relative p-4">
            <img
              src={product.Images[0]}
              alt={product.Name}
              className="w-full h-100 object-cover rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              onClick={() => openModal(product)}
            />
            {/* Сердечко с анимацией для каждого продукта */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => toggleFavorite(product.Id)} // Переключаем состояние сердечка для конкретного продукта
            >
              <img
                src={favoriteProducts[product.Id] ? Red_heart : White_heart}
                alt="Heart"
                className="w-8 h-6 transition-transform duration-200"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 text-center">{product.Name}</h2>
            <p className="text-sm text-gray-500 text-center">Category: {product.Category}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-left">
                <p className="text-xl font-bold text-black">{product.DefaultPrice}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Статичные рекомендации */}
      <div className="w-full mt-6">
        <h3 className="text-xl font-semibold mb-4">You might also like:</h3>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {staticRecommendations.map((item) => (
            <div
              key={item.Id}
              className="min-w-[200px] bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transform transition-transform duration-200"
            >
              <img
                src={item.Images[0]}
                alt={item.Name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-center text-lg font-semibold">{item.Name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductPage;
