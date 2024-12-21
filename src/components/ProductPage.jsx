import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import Red_heart from '../assets/red_heart.png'; // Изображение красного сердечка
import White_heart from '../assets/white_heart.png'; // Изображение белого сердечка
import axios from 'axios';
import Button from './common/Button';

const ProductPage = () => {
  const [products, setProducts] = useState([]); // Состояние для хранения продуктов
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favoriteProducts, setFavoriteProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(0); // Текущее значение страницы
  const [hasMoreProducts, setHasMoreProducts] = useState(true); // Для отслеживания, есть ли ещё товары для загрузки
  const [loading, setLoading] = useState(false); // Для отображения индикатора загрузки

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcm9uIiwiaWF0IjoxNzM0Nzc0Njc5LCJleHAiOjE3MzQ4Mjg2Nzl9.0wQyv3qY3gc78Bmao84RCU5WB6a4CpzIdXpwl9K1_Hk"; // Замените на ваш токен
  const headers = {
    Authorization: `Bearer ${token}`,
    accept: "*/*",
  };

  // Функция для загрузки товаров
  const fetchProducts = (page) => {
    setLoading(true);
    axios
      .get('https://funko-store.onrender.com/api/products', {
        headers,
        params: {
          page: page,
          size: 52,
        },
      })
      .then((response) => {
        const newProducts = response.data;
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setHasMoreProducts(newProducts.length > 0); // Если количество товаров 0, значит больше нет
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Загружаем состояние любимых товаров из localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteProducts')) || {};
    setFavoriteProducts(storedFavorites);

    // Загрузка первой страницы товаров при монтировании компонента
    fetchProducts(currentPage);
  }, []);

  // Функция для переключения состояния избранного для конкретного продукта
  const toggleFavorite = (productId) => {
    const newFavorites = { ...favoriteProducts, [productId]: !favoriteProducts[productId] };
    setFavoriteProducts(newFavorites);
  
    // Сохраняем изменения в localStorage
    localStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));
  
    const isFavorite = !favoriteProducts[productId];  // Состояние перед переключением
    const apiEndpoint = isFavorite
      ? `https://funko-store.onrender.com/api/wishlist/add/${productId}`
      : `https://funko-store.onrender.com/api/wishlist/remove/${productId}`;
    const method = isFavorite ? 'POST' : 'DELETE';
  
    axios
      .request({
        url: apiEndpoint,
        method: method,
        headers: headers,
      })
      .then((response) => {
        console.log(isFavorite ? 'Product added to WishList' : 'Product removed from WishList');
      })
      .catch((error) => {
        console.error(isFavorite ? 'Error adding to WishList: ' + error : 'Error removing from WishList: ' + error);
      });
  };

  const openModal = (product) => setSelectedProduct(product.id);
  const closeModal = () => setSelectedProduct(null);

  // Функция для загрузки следующей страницы товаров
  const loadMoreProducts = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchProducts(nextPage);
  };

  return (
    <div className="flex flex-wrap justify-center p-6 bg-white min-h-screen">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-80 min-h-80 bg-white rounded-lg border-4 shadow-md m-4 transition-transform transform hover:scale-105"
        >
          <div className="relative p-4">
            <img
              src={product.images && product.images[0] ? product.images[0] : 'path_to_default_image'}
              alt={product.name}
              className="w-full h-100 object-cover rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              onClick={() => openModal(product)}
            />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => toggleFavorite(product.id)}
            >
              <img
                src={favoriteProducts[product.id] ? Red_heart : White_heart}
                alt="Heart"
                className="w-8 h-6 transition-transform duration-200"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h2>
            <p className="text-sm text-gray-500 text-center">Category: {product.category}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-left">
                <p className="text-xl font-bold text-black">${product.defaultPrice}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Кнопка "Загрузить еще" */}
      {hasMoreProducts && !loading && (
        <div className="w-full flex justify-center mt-6">
          <Button text="More" onClick={loadMoreProducts} />
        </div>
      )}

      {/* Индикатор загрузки */}
      {loading && (
        <div className="w-full flex justify-center mt-6">
          <p>Loading...</p>
        </div>
      )}

      {selectedProduct && <ProductModal productId={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductPage;
