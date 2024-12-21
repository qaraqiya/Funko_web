import React from 'react';

const CartItem = ({ item, onQtyChange }) => {
  // Функция для извлечения только числовой части цены из строки
  const extractPrice = (priceString) => {
    console.log(item)
    // Используем регулярное выражение, чтобы извлечь числовую часть после символа "$"
    const match = priceString; // Регулярное выражение для извлечения числа
    return match;
  };

  // Извлекаем стандартную цену и цену со скидкой (если есть)
  console.log(item)
  const price = extractPrice(item.DefaultPrice);
  const discountedPrice = item.DiscountPrice 
    ? extractPrice(item.DiscountPrice) 
    : null;

  // Расчет итоговой цены для товара с учетом скидки (если она есть)
  const totalPrice = discountedPrice ? discountedPrice * item.qty : price * item.qty;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-auto sm:p-4 border-b border-black">
      {/* Информация о товаре */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src={item.Images[0]?.imageUrl} alt={item.Name} className="w-[96px] h-[96px]" />
        <div className="text-lg font-semibold w-auto">
            <p className="break-words whitespace-normal">{item.Name}</p>
        </div>
      </div>

      <div className="flex gap-20">
        {/* Селектор количества */}
        <div>
            <label htmlFor={`qty-${item.id}`} className="font-semibold bg-transparent mr-2">QTY:</label>
            <select
            id={`qty-${item.id}`}
            value={item.qty}
            onChange={(e) => onQtyChange(item.id, parseInt(e.target.value))}
            className="border p-2 rounded-md"
            >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(qty => (
                <option key={qty} value={qty}>
                {qty}
                </option>
            ))}
            </select>
        </div>

        {/* Показываем цену с учетом скидки */}
        <div className="font-semibold">
            <p>
              {discountedPrice ? (
                <>
                  <span className="line-through text-red-500">${price}</span> 
                  <span className="text-green-500"> ${discountedPrice}</span>
                </>
              ) : (
                `$${price}`
              )}
            </p>
            {/* Общая стоимость товара с учетом скидки */}
            <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
