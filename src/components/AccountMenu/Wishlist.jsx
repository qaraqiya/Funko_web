// import React, { useState, useEffect } from 'react';
// import AccountMenu from './AccountMenu';
// import MAccountMenu from "./MAccountMenu"
// import ProductCard from '../ProductCard';
// import ProductModal from "../ProductModal";
// import products from '../data/products.json'; // Импорт данных из JSON
// import axios from 'axios';


// const Wishlist = () => {
//   const [wishlistt, setWishlists] = useState([]); // Состояние для хранения продуктов
//   const [selectedProduct, setSelectedProduct] = useState(null); // Состояние для выбранного продукта (для модального окна)
//   const [menuOpen, setMenuOpen] = useState(false); // Состояние для меню

//   const wishlistItems = products.slice(0, 2); // Используем первые 2 товара для примера

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
  
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//     // Заголовки для авторизации с токеном
//   const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcm9uIiwiaWF0IjoxNzM0NzEyMTE0LCJleHAiOjE3MzQ3MTMwMTR9.EbQpWaiN1IqUBZLihH3JBLbCFF7yXHqtwqtkSCL5dto"; // Замените на ваш токен
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     accept: "*/*"
//   };

//   useEffect(() => {
//     axios
//       .get('https://funko-store.onrender.com/api/wishlist', { headers })
//       .then((response) => {
//         setWishlists(response.data);
//       }, {})
//       .catch((error) => {
//         console.log("Error fetching products:", error);
//       });
//   }, []);

//   const openModal = (product) => setSelectedProduct(product); // Открыть модальное окно
//   const closeModal = () => setSelectedProduct(null); // Закрыть модальное окно

//   return (
//     <div className="relative bg-primary-white mt-12 lg:mt-12 h-svh 
//                     mx-auto 2xl:w-full xl:w-[1280px] lg:w-[968px] 
//                     md:w-[712px] sm:w-[594px] w-[350px] transition-all">
//       <h1 className="text-6xl ml-4 font-black mb-4 text-center 2xl:text-left">WISHLIST</h1>

//       {/* Гамбургер меню */}
//       <button
//         className="absolute xl:left-56 lg:left-44 md:left-36 sm:left-32 
//                    left-20 top-32 p-4 bg-black text-white rounded 
//                    focus:outline-none cursor-pointer 2xl:hidden"
//         onClick={toggleMenu}
//       >
//         <span className="block w-6 h-0.5 bg-white mb-1"></span>
//         <span className="block w-6 h-0.5 bg-white mb-1"></span>
//         <span className="block w-6 h-0.5 bg-white"></span>
//       </button>

//       {/* Контент WishList */}
//       <div className="flex justify-center mt-[50px]">
//         <div className="hidden 2xl:block">
//           <AccountMenu />
//         </div>
//         <div className="w-2/3 p-12 bg-white h-fit flex flex-col justify-center items-center">
//           <div className="custom-scroll grid grid-cols-1 gap-5 w-full overflow-y-auto max-h-[410px] overflow-x-auto cursor-pointer">
//             {wishlistItems.map(item => (
//               <ProductCard
//                 key={item.Id}
//                 imgSrc={item.Images[0]}
//                 title={item.Name}
//                 description={item.Category}
//                 price={`${item.DefaultPrice}`}
//                 onClick={() => openModal(item)} // Открытие модального окна при клике на товар
//               />
//             ))}
//           </div>

//           {/* Чекбокс "Hide from Public" */}
//           <div className="flex items-center mt-4">
//             <input
//               type="checkbox"
//               id="hideFromPublic"
//               className="w-5 h-5 mr-2 border-2 border-gray-400 rounded-md text-black focus:ring-black transition duration-300 ease-in-out"
//             />
//             <label htmlFor="hideFromPublic" className="text-lg font-medium">
//               Hide from Public
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Account Menu с затемнением фона */}
//       {menuOpen && (
//         <>
//           <div
//             className={`fixed top-0 left-0 w-[300px] h-full bg-white z-20 p-6 shadow-lg
//               transform transition-transform duration-600 ease-in-out 
//               ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
//           >
//             {/* Мобильное меню */}
//             <MAccountMenu />
//             <button
//               className="mt-4 px-4 py-2 bg-black text-white rounded focus:outline-none"
//               onClick={closeMenu}
//             >
//               Done
//             </button>
//           </div>
//           <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={closeMenu}></div>
//         </>
//       )}

//       {/* Модальное окно для выбранного продукта */}
//       {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
//     </div>
//   );
// };

// export default Wishlist;

import React, { useState, useEffect } from 'react'; 
import AccountMenu from './AccountMenu';
import MAccountMenu from "./MAccountMenu";
import ProductCard from '../ProductCard';
import ProductModal from "../ProductModal";
import axios from 'axios';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]); // Данные из API
  const [selectedProduct, setSelectedProduct] = useState(null); // Для модального окна
  const [menuOpen, setMenuOpen] = useState(false); // Для меню
  

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Заголовки для авторизации с токеном
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcm9uIiwiaWF0IjoxNzM0NzIxMDY0LCJleHAiOjE3MzQ3NzUwNjR9.qF-AnRuwBUrkShgHlA-HeYAKsDBI6aD5iP0Oud5_5wk";
  const headers = {
    Authorization: `Bearer ${token}`,
    accept: "*/*",
  };

  useEffect(() => {
    // Получение данных с API
    axios
      .get('https://funko-store.onrender.com/api/wishlist', { headers })
      .then((response) => {
        setWishlist(response.data.wishlistItems); // Сохраняем данные о товарах
      })
      .catch((error) => {
        console.log("Error fetching wishlist:", error);
      });
  }, []);

  // Удаление товара из Wishlist
  const removeFromWishlist = (id) => {
    axios
      .delete(`https://funko-store.onrender.com/api/wishlist/remove/${id}`, { headers })
      .then(() => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
      })
      .catch((error) => {
        console.error("Error removing item from wishlist:", error);
      });
  };

  const openModal = (product) => setSelectedProduct(product.id);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="relative bg-primary-white mt-12 lg:mt-12 h-svh mx-auto 2xl:w-full xl:w-[1280px] lg:w-[968px] md:w-[712px] sm:w-[594px] w-[350px] transition-all">
      <h1 className="text-6xl ml-4 font-black mb-4 text-center 2xl:text-left">WISHLIST</h1>

      <button
        className="absolute xl:left-56 lg:left-44 md:left-36 sm:left-32 left-20 top-32 p-4 bg-black text-white rounded focus:outline-none cursor-pointer 2xl:hidden"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      <div className="flex justify-center mt-[50px]">
        <div className="hidden 2xl:block">
          <AccountMenu />
        </div>
        <div className="w-2/3 p-12 bg-white h-fit flex flex-col justify-center items-center">
          <div className="custom-scroll grid grid-cols-1 gap-5 w-full overflow-y-auto max-h-[410px] overflow-x-auto cursor-pointer">
            {wishlist.map(item => (
              <ProductCard
                key={item.id}
                imgSrc={item.Images[0]?item.Images[0].imageUrl:item.Images[1].imageUrl} // Основное изображение товара
                title={item.Name} // Название товара
                price={item.DefaultPrice} // Цена товара
                isFavorited={item.isFavorited} // По умолчанию товар в избранном
                onClick={() => openModal(item)}
                 
                onToggleFavorite={() => removeFromWishlist(item.id)} // Удаление из Wishlist
              />
            ))}
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="hideFromPublic"
              className="w-5 h-5 mr-2 border-2 border-gray-400 rounded-md text-black focus:ring-black transition duration-300 ease-in-out"
            />
            <label htmlFor="hideFromPublic" className="text-lg font-medium">
              Hide from Public
            </label>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className={`fixed top-0 left-0 w-[300px] h-full bg-white z-20 p-6 shadow-lg transform transition-transform duration-600 ease-in-out 
              ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <MAccountMenu />
            <button className="mt-4 px-4 py-2 bg-black text-white rounded focus:outline-none" onClick={closeMenu}>
              Done
            </button>
          </div>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={closeMenu}></div>
        </>
      )}

      {selectedProduct && <ProductModal productId={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default Wishlist;
