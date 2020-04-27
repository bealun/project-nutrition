import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: {
    product: []
  },

  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    }
  }
})

export const fetchProduct = (code) => {
  return (dispatch) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(products.actions.setProduct(json));
    });
  }
};