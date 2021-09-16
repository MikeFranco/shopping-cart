import React from 'react';

export const Product = ({ product, onAdd }) => {
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>
        <button onClick={() => onAdd(product)}>Add Cart</button>
      </div>
    </div>
  );
};
