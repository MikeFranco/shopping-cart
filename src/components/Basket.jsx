import React from 'react';

export const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce(
    (item, carry) => item + carry.price * carry.qty,
    0
  );
  const taxesPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxesPrice + shippingPrice;
  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map(item => (
        <div key={item.id} className='row'>
          <div className='col-2'>{item.name}</div>
          <div className='col-2'>
            <button onClick={() => onAdd(item)} className='add'>
              +
            </button>
            <button onClick={() => onRemove(item)} className='remove'>
              -
            </button>
          </div>
          <div className='col-2 text-right'>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className='row'>
            <div className='col-2'>Items Price</div>
            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Tax Price</div>
            <div className='col-1 text-right'>${taxesPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Shipping Price</div>
            <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <strong>Total Price</strong>
            </div>
            <div className='col-1 text-right'>
              <strong> ${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};
