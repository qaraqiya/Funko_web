import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary'; // Просто импортируем CartSummary
import products from '../data/products.json'; // Импорт данных из JSON

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totals, setTotals] = useState({
    subtotal: 0,
    shipping: 'Calculated at Checkout',
    estimatedTotal: 0,
  });

  useEffect(() => {
    // Заглушка: в будущем связь с бэкендом для добавления товаров в корзину
    const initialCartItems = products.slice(0, 3).map(product => ({
      ...product,
      qty: 1, // По умолчанию количество товара = 1
    }));
    setCartItems(initialCartItems);
    updateTotals(initialCartItems);
  }, []);

  // Функция для обновления итогов (subtotal и total)
  const updateTotals = (items) => {
    const subtotal = items.reduce((acc, item) => {
      let price;
  
      // Если строка DefaultPrice содержит более одного символа (например, есть информация о скидке)
      if (item.DefaultPrice.length > 10) { 
        // Парсим цену из DefaultPrice, игнорируя текст до "$" и символы переноса строки
        price = parseFloat(item.DefaultPrice.replace('Price reduced from\n$', '').replace('\nto', '').trim());
      } else {
        // Если цена без дополнительной информации, просто парсим ее
        price = parseFloat(item.DefaultPrice.replace('$', '').trim());
      }
  
      // Если есть скидка, используем цену со скидкой
      if (item.DiscountPrice && item.DiscountPrice !== "N/A") {
        price = parseFloat(item.DiscountPrice.split(' ')[0].replace('$', '').trim()); // Парсим цену до скидки
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
      item.Id === productId ? { ...item, qty: newQty } : item
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
            <div className="flex ">
                <span className='mr-28'>QTY</span>
                <span className='mx-10'>TOTAL</span>
            </div>
          </div>
          <div className="2xl:h-[400px] 2xl:overflow-y-auto w-full">

          <div className="grid grid-cols-1 gap-5 w-full">
            {cartItems.map(item => (
              <CartItem key={item.Id} item={item} onQtyChange={handleQtyChange} />
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
