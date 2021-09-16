import React, { useContext } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Basket } from './components/Basket';
import DataContext from './context/UseContext';

function App() {
  const { products, onAdd, cartItems, onRemove } = useContext(DataContext);

  /* const onRemove = product => {
    const elementAdded = getItemFromCart(product);
    if (elementAdded.qty === 1) {
      const removeItem = cartItems.filter(item => item.id !== product.id);
      setCartItems(removeItem);
    } else {
      const updateCart = cartItems.map(item =>
        item.id === product.id
          ? { ...elementAdded, qty: elementAdded.qty - 1 }
          : item
      );
      setCartItems(updateCart);
    }
  }; */

  return (
    <>
      <div className='App'>
        <Header countCartItems={cartItems.length} />
        <div className='row'>
          <Main onAdd={onAdd} products={products} />
          <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
}

export default App;
