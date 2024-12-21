import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary'; 
import axios from 'axios'; // Импорт библиотеки для запросов к API

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totals, setTotals] = useState({
    subtotal: 0,
    shipping: 'Calculated at Checkout',
    estimatedTotal: 0,
  });

  const token = localStorage.getItem('accessToken');

  const headers = {
    Authorization: `Bearer ${token}`,
    accept: "*/*",
  };

  // Запрос к API для получения товаров в корзине (Wishlist)
  useEffect(() => {
    axios
      .get('https://funko-store.onrender.com/api/wishlist', { headers }) // Запрос на получение товаров
      .then((response) => {
        const wishlistItems = response.data.wishlistItems.map((item) => ({
          ...item,
          qty: 1, // Устанавливаем количество каждого товара по умолчанию
        }));
        
        setCartItems(wishlistItems); // Сохраняем товары в состоянии
        updateTotals(wishlistItems); // Обновляем итоговую сумму
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
      });
  }, []);

  // Функция для обновления итогов (subtotal и total)
  const updateTotals = (items) => {
    const subtotal = items.reduce((acc, item) => {
      let price;
  
      // Если строка DefaultPrice содержит более одного символа (например, есть информация о скидке)
      if (item.DefaultPrice.length > 10) {
        console.log(1);
        
        // Парсим цену из DefaultPrice, игнорируя текст до "$" и символы переноса строки
        price = parseFloat(item.DefaultPrice);
      } else {
        // Если цена без дополнительной информации, просто парсим ее
        price = parseFloat(item.DefaultPrice);
      }
  
      // Если есть скидка, используем цену со скидкой
      if (item.DiscountPrice && item.DiscountPrice !== "N/A") {
        price = parseFloat(item.DiscountPrice); // Парсим цену до скидки
      }
  
      return acc + price * item.qty;
    }, 0);
  
    const estimatedTotal = subtotal >= 150 ? subtotal : subtotal + 20;
    setTotals({
      subtotal,
      shipping: subtotal >= 150 ? 'Free' : 'Calculated at Checkout',
      estimatedTotal,
    });
  };

  // Обработчик изменения количества товара
  const handleQtyChange = (productId, newQty) => {
    const updatedItems = cartItems.map(item =>
      item.id === productId ? { ...item, qty: newQty } : item
    );
    setCartItems(updatedItems);
    updateTotals(updatedItems);
  };

  return (
    <div className="relative mt-12 lg:mt-12 h-auto my-10 mx-auto 2xl:w-full 
                    xl:w-[1280px] lg:w-[968px] md:w-[712px] sm:w-[594px] w-[350px] transition-all">
      <h1 className="text-6xl sm:text-8xl md:text-6xl 2xl:ml-16 font-black mb-4 text-center 2xl:text-left">MY CART</h1>

      <div className="flex flex-col 2xl:flex-row justify-center mt-[20px]">

        {/* Cart Items */}
        <div className="mobile:w-[350px] sm:w-2/3 p-auto sm:p-12 mx-auto 
                        h-fit flex flex-col justify-center items-center
                        overflow-y-auto">
          <div className="lg:flex justify-between border-b border-black w-full font-medium hidden">
            <span className='ml-10'>ITEM</span>
            <div className="flex">
                <span className='mr-28'>QTY</span>
                <span className='mx-10'>TOTAL</span>
            </div>
          </div>
          <div className="2xl:h-[400px] 2xl:overflow-y-auto w-full">

          <div className="grid grid-cols-1 gap-5 w-full">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} onQtyChange={handleQtyChange} />
            ))}
          </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="mobile:w-[300px] sm:w-2/3 2xl:w-1/3 2xl:mt-10 p-8 bg-gray-100 mx-auto">
          <CartSummary 
            subtotal={totals.subtotal} 
            shipping={totals.shipping} 
            estimatedTotal={totals.estimatedTotal} 
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
