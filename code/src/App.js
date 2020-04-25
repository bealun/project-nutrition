import React from "react";
import { Provider } from 'react-redux'
import { ScanBarcode } from "components/ScanBarcode";
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { products } from './reducers/products'
import { ProductItem } from 'components/ProductItem'
 
const reducer = combineReducers({
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
      <ProductItem />
    </Provider>
  );
};
