import React from "react";
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { products } from './reducers/products'
import { Container } from './components/Container'


const reducer = combineReducers({
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
        <Container />
    </Provider>
  );
};
