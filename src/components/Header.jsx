import React from 'react';

export const Header = ({ countCartItems }) => {
  return (
    <header className='row block center'>
      <div>
        <a href='#/'>
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>
          Cart{' '}
          {countCartItems ? (
            <button className='badge'>{countCartItems}</button>
          ) : (
            ''
          )}
        </a>
      </div>
    </header>
  );
};
