import React, { useReducer } from 'react';
import data from '../data';
import { reducer } from './CustomReducer';
import DataContext from './UseContext';

const DataState = props => {
  const { products } = data;
  const [state, dispatch] = useReducer(reducer, products);

  const cartItems = state.filter(item => item.qty !== 0);

  const getItemFromCart = (cartItems, product) =>
    cartItems.find(item => item.id === product.id);

  const onAdd = product => {
    const elementAdded = getItemFromCart(state, product);
    if (elementAdded) {
      const updateCart = state.map(item =>
        item.id === product.id
          ? { ...elementAdded, qty: elementAdded.qty + 1 }
          : item
      );
      dispatch({ type: 'add', payload: updateCart });
    }
  };

  const onRemove = product => {
    const elementToRemove = getItemFromCart(state, product);
    if (elementToRemove.qty === 1) {
      const removeItem = cartItems.filter(item => item.id !== elementToRemove.id);
      dispatch({ type: 'remove', payload: removeItem });
    } else {
      const updateCart = cartItems.map(item =>
        item.id === product.id
          ? { ...elementToRemove, qty: elementToRemove.qty - 1 }
          : item
      );
      dispatch({type: 'remove', payload: updateCart});
    }
  };

  return (
    <DataContext.Provider
      value={{
        products: state,
        cartItems,
        onAdd,
        onRemove,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
