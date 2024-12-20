import React from 'react';
import ShippingProgress from './ShippingProgress';
import Button from '../common/Button';

const CartSummary = ({ subtotal, shipping, estimatedTotal }) => {

  return (
    <div className="border-t border-black pt-4">
      {/* Shipping Progress */}
      <ShippingProgress subtotal={subtotal} />

      <div className="flex justify-between text-lg font-semibold mb-2">
        <span>Subtota: </span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-lg font-semibold mb-2">
        <span>Shipping: </span>
        <span className='italic justify-end'>{shipping}</span>
      </div>
      <div className="flex justify-between text-lg font-semibold mb-2">
        <span>Estimated Total:</span>
        <span>${estimatedTotal.toFixed(2)}</span>
      </div>

      <Button text="BUY" className='w-full py-4' />

    </div>
  );
};

export default CartSummary;
