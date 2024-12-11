import React, { useState } from 'react';
import AccountMenu from './AccountMenu';
import ProductCard from './ProductCard'; // Импорт компонента ProductCard

const wishlistItems = [
  {
    id: 1,
    imgSrc: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw718105db/images/funko/upload/75699_HxH_Chrollo_POP_GLAM-WEB.png?sw=150&sh=150',
    title: 'Hunter x Hunter',
    description: 'Pop! Chrollo',
    price: '$15.00',
  },
  {
    id: 2,
    imgSrc: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw47fc23fe/images/funko/upload/74474-POP-Animation-One-Piece---Marco_GLAM-WEB.png?sw=800&sh=800',
    title: 'One Piece',
    description: 'Pop! Marco',
    price: '$15.00',
  },
];

const Wishlist = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative bg-primary-white mt-12 
                    lg:mt-12 h-svh mx-auto 2xl:w-full 
                    xl:w-[1280px] lg:w-[968px] md:w-[712px] 
                    sm:w-[594px] w-[350px] transition-all">
      <h1 className="text-6xl ml-4 font-black mb-4 sm:text-5xl lg:text-6xl text-center 2xl:text-left">WISHLIST</h1>

      {/* Гамбургер меню */}
      <button
        className="absolute xl:left-56 lg:left-44 md:left-36 sm:left-32 left-20 top-32 p-4 bg-black text-white rounded focus:outline-none 2xl:hidden"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Контент WishList */}
      <div className="flex justify-center mt-[50px]">
        <div className="hidden 2xl:block">
          <AccountMenu />
        </div>
        <div className="w-2/3 p-12 bg-white h-fit flex flex-col justify-center items-center">
          <div className="custom-scroll grid grid-cols-1 gap-5 w-full overflow-y-auto max-h-[410px] overflow-x-auto">
            {wishlistItems.map(item => (
              <ProductCard
                key={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>

          {/* Чекбокс "Hide from Public" */}
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

      {/* Account Menu с затемнением фона */}
      {menuOpen && (
        <>
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white z-20 p-6 shadow-lg">
            <AccountMenu />
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded focus:outline-none"
              onClick={closeMenu}
            >
              Done
            </button>
          </div>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={closeMenu}></div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
