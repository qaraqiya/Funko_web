import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации
import Red_heart from '../assets/red_heart.png'; 
import White_heart from '../assets/white_heart.png'; 
import Button from './common/Button.jsx';

const ProductCard = ({ imgSrc, title, description, price, onClick }) => {
  const [isFavorited, setIsFavorited] = useState(true); 
  const [isPressed, setIsPressed] = useState(false); 

  const navigate = useNavigate(); // Инициализируем navigate

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

  // Функция для перенаправления в корзину
  const moveToCart = () => {
    navigate('/cart'); // Переход на страницу корзины
  };

  return (
    <div 
      className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 border-b border-black relative cursor-pointer"
      onClick={onClick} 
    >
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            toggleFavorite();
          }}
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
          <p className="uppercase text-sm sm:text-base mb-4">${price}</p>
        </div>
        <Button text="Move to Cart" onClick={moveToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
