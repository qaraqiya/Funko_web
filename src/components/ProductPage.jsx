// import React, { useState } from 'react';
// import ProductModal from './ProductModal';
// import products from './data/products.json'; // Импортируем все продукты
// import Red_heart from '../assets/red_heart.png'; // Изображение красного сердечка
// import White_heart from '../assets/white_heart.png'; // Изображение белого сердечка
// import axios from 'axios';

// const ProductPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Статичные рекомендации (первые 50 продуктов)
//   const staticRecommendations = products.slice(0, 50); // Берем первые 50 продуктов

//   // Состояние для каждого продукта (с сердечками)
//   const [favoriteProducts, setFavoriteProducts] = useState(
//     products.reduce((acc, product) => {
//       acc[product.Id] = false; // Изначально все продукты не в избранном
//       return acc;
//     }, {})
//   );

//   // Функция для переключения состояния избранного для конкретного продукта
//   const toggleFavorite = (productId) => {
//     setFavoriteProducts((prevState) => ({
//       ...prevState,
//       [productId]: !prevState[productId],
//     }));
//   };

//   const openModal = (product) => setSelectedProduct(product);
//   const closeModal = () => setSelectedProduct(null);

//   return (
//     <div className="flex flex-wrap justify-center p-6 bg-white min-h-screen">
//       {/* Отображение всех продуктов */}
//       {products.map((product) => (
//         <div
//           key={product.Id}
//           className="w-80 min-h-80 bg-white rounded-lg border-4 shadow-md m-4 transition-transform transform hover:scale-105"
//         >
//           <div className="relative p-4">
//             <img
//               src={product.Images[0]}
//               alt={product.Name}
//               className="w-full h-100 object-cover rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
//               onClick={() => openModal(product)}
//             />
//             {/* Сердечко с анимацией для каждого продукта */}
//             <div
//               className="absolute top-4 right-4 cursor-pointer"
//               onClick={() => toggleFavorite(product.Id)} // Переключаем состояние сердечка для конкретного продукта
//             >
//               <img
//                 src={favoriteProducts[product.Id] ? Red_heart : White_heart}
//                 alt="Heart"
//                 className="w-8 h-6 transition-transform duration-200"
//               />
//             </div>
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800 text-center">{product.Name}</h2>
//             <p className="text-sm text-gray-500 text-center">Category: {product.Category}</p>
//             <div className="flex justify-between items-center mt-4">
//               <div className="text-left">
//                 <p className="text-xl font-bold text-black">{product.DefaultPrice}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Статичные рекомендации */}
//       <div className="w-full mt-6">
//         <h3 className="text-xl font-semibold mb-4">You might also like:</h3>
//         <div className="flex overflow-x-auto gap-4 pb-4">
//           {staticRecommendations.map((item) => (
//             <div
//               key={item.Id}
//               className="min-w-[200px] bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transform transition-transform duration-200"
//             >
//               <img
//                 src={item.Images[0]}
//                 alt={item.Name}
//                 className="w-full h-32 object-cover rounded-lg mb-4"
//               />
//               <h4 className="text-center text-lg font-semibold">{item.Name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Модальное окно */}
//       {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
//     </div>
//   );
// };

// export default ProductPage;


// import React, { useState, useEffect } from 'react';
// import ProductModal from './ProductModal';
// import Red_heart from '../assets/red_heart.png'; // Изображение красного сердечка
// import White_heart from '../assets/white_heart.png'; // Изображение белого сердечка
// import axios from 'axios';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]); // Состояние для хранения продуктов
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Состояние для каждого продукта (с сердечками)
//   const [favoriteProducts, setFavoriteProducts] = useState({});

//   // Заголовки для авторизации с токеном
//   const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTczNDY5MzIzMywiZXhwIjoxNzM0Njk0MTMzfQ.Dv4V3foFf6h9JvwhEmGRiC1yr-iRfnynFG6qb-Phpe4";
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   // Загружаем данные с API
//   useEffect(() => {
//     axios
//       .get('https://funko-store.onrender.com/api/products', { headers }) // Подключение к API
//       .then((response) => {
//         setProducts(response.data); // Устанавливаем полученные продукты в состояние
//         setFavoriteProducts(
//           response.data.reduce((acc, product) => {
//             acc[product.id] = false; // Изначально все продукты не в избранном
//             return acc;
//           }, {})
//         );
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   // Функция для переключения состояния избранного для конкретного продукта
//   const toggleFavorite = (productId) => {
//     setFavoriteProducts((prevState) => ({
//       ...prevState,
//       [productId]: !prevState[productId],
//     }));
//   };

//   const openModal = (product) => setSelectedProduct(product);
//   const closeModal = () => setSelectedProduct(null);

//   return (
//     <div className="flex flex-wrap justify-center p-6 bg-white min-h-screen">
//       {/* Отображение всех продуктов */}
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="w-80 min-h-80 bg-white rounded-lg border-4 shadow-md m-4 transition-transform transform hover:scale-105"
//         >
//           <div className="relative p-4">
//             <img
//               src={product.images && product.images[0] ? product.images[0] : 'path_to_default_image'} // Обработка изображений
//               alt={product.name}
//               className="w-full h-100 object-cover rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
//               onClick={() => openModal(product)}
//             />
//             {/* Сердечко с анимацией для каждого продукта */}
//             <div
//               className="absolute top-4 right-4 cursor-pointer"
//               onClick={() => toggleFavorite(product.id)} // Переключаем состояние сердечка для конкретного продукта
//             >
//               <img
//                 src={favoriteProducts[product.id] ? Red_heart : White_heart}
//                 alt="Heart"
//                 className="w-8 h-6 transition-transform duration-200"
//               />
//             </div>
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h2>
//             <p className="text-sm text-gray-500 text-center">Category: {product.category}</p>
//             <div className="flex justify-between items-center mt-4">
//               <div className="text-left">
//                 <p className="text-xl font-bold text-black">{product.defaultPrice}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Статичные рекомендации */}
//       <div className="w-full mt-6">
//         <h3 className="text-xl font-semibold mb-4">You might also like:</h3>
//         <div className="flex overflow-x-auto gap-4 pb-4">
//           {products.slice(0, 5).map((item) => ( // Здесь можно показывать другие продукты как рекомендации
//             <div
//               key={item.id}
//               className="min-w-[200px] bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transform transition-transform duration-200"
//             >
//               <img
//                 src={item.images && item.images[0] ? item.images[0] : 'path_to_default_image'} // Обработка изображений
//                 alt={item.name}
//                 className="w-full h-32 object-cover rounded-lg mb-4"
//               />
//               <h4 className="text-center text-lg font-semibold">{item.name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Модальное окно */}
//       {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import Red_heart from '../assets/red_heart.png'; // Изображение красного сердечка
import White_heart from '../assets/white_heart.png'; // Изображение белого сердечка
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]); // Состояние для хранения продуктов
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Состояние для каждого продукта (с сердечками)
  const [favoriteProducts, setFavoriteProducts] = useState({});
  const [isPressed, setIsPressed] = useState(false); 

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcm9uIiwiaWF0IjoxNzM0NzIxMDY0LCJleHAiOjE3MzQ3NzUwNjR9.qF-AnRuwBUrkShgHlA-HeYAKsDBI6aD5iP0Oud5_5wk"; // Замените на ваш токен
  const headers = {
    Authorization: `Bearer ${token}`,
    accept: "*/*"
  };

  // Загружаем данные с API (только 50 товаров)
  useEffect(() => {
    // Загружаем состояние любимых товаров из localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteProducts')) || {};

    axios
      .get('https://funko-store.onrender.com/api/products', {
        headers,
        params: {
          page: 0,
          size: 52,
        },
      })
      .then((response) => {
        setProducts(response.data);
        setFavoriteProducts(storedFavorites); // Устанавливаем сохраненные избранные товары
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Функция для переключения состояния избранного для конкретного продукта
  const toggleFavorite = (productId) => {
    const newFavorites = { ...favoriteProducts, [productId]: !favoriteProducts[productId] };

    setFavoriteProducts(newFavorites);
    // Сохраняем обновленное состояние в localStorage
    localStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));

    const isFavorite = favoriteProducts[productId];
    const apiEndpoint = !isFavorite
      ? `https://funko-store.onrender.com/api/wishlist/add/${productId}`
      : `https://funko-store.onrender.com/api/wishlist/remove/${productId}`;

    const method = !isFavorite ? 'POST' : 'DELETE';

    axios
      .request({
        url: apiEndpoint,
        method: method,
        headers: headers,
      })
      .then((response) => {
        console.log(isFavorite ? 'Product removed from WishList' : 'Product added to WishList');
        console.log(response.data);
      })
      .catch((error) => {
        console.error(isFavorite ? 'Error removing from WishList: ' + error : 'Error adding to WishList: ' + error);
      });
  };

  const openModal = (product) => setSelectedProduct(product.id);
  const closeModal = () => setSelectedProduct(null);

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

      <div className="w-full mt-6">
        <h3 className="text-xl font-semibold mb-4">You might also like:</h3>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {products.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="min-w-[200px] bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transform transition-transform duration-200"
            >
              <img
                src={item.images && item.images[0] ? item.images[0] : 'path_to_default_image'}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-center text-lg font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && <ProductModal productId={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductPage;
