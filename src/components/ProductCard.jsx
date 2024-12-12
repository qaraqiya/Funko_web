import React, { useState } from 'react';
import Red_heart from '../assets/red_heart.png'; // Изображение красного сердечка
import White_heart from '../assets/white_heart.png'; // Изображение белого сердечка

const ProductCard = ({ imgSrc, title, description, price }) => {
  const [isFavorited, setIsFavorited] = useState(true); // Состояние избранного
  const [isPressed, setIsPressed] = useState(false); // Состояние нажатия

  // Функция для переключения состояния избранного
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Обработка нажатия
  const handlePress = () => {
    setIsPressed(true);
  };

  // Обработка отпускания кнопки
  const handleRelease = () => {
    setIsPressed(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 border-b border-black relative">
      <div className="relative">
        <button
          onClick={toggleFavorite}
          onMouseDown={handlePress}
          onMouseUp={handleRelease}
          onMouseLeave={handleRelease}
          className="absolute -top-4 -right-4 p-2 focus:outline-none z-10"
        >
          <img
            src={isFavorited ? Red_heart : White_heart}
            alt="Heart"
            className={`w-8 h-6 ${isPressed ? 'scale-90' : 'scale-100'} transition-transform duration-200`}
          />
        </button>
        <img src={imgSrc} alt={title} className="w-[96px] h-[96px] mb-4 sm:mb-0" />
      </div>
      <div className="text-lg font-semibold justify-around flex flex-col lg:flex-row lg:gap-10 lg:items-center items-start gap-4">
        <div className='flex flex-col mx-auto'>
          <img src="https://funko.com/on/demandware.static/Sites-FunkoUS-Site/-/default/dwc42b97ef/images/funko/svg/site-logo.svg" alt="" 
          className="align-baseline inline-block w-[2.625rem] h-[.9375rem]" />
          <p className="uppercase font-thin text-sm sm:text-base w-[133px] break-words">{title}</p>
          <p className="font-bold text-sm sm:text-base">{description}</p>
          <p className="uppercase text-sm sm:text-base mb-4">{price}</p>
        </div>
        <button
          className="px-4 py-2 bg-black text-white rounded-3xl 
                    border-solid border-2 font-black border-black hover:bg-white hover:text-black 
                    uppercase transition-all duration-300"
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
