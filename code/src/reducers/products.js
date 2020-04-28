import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: {
    item: {},
    scanStarted: false,
  },

  reducers: {
    setProduct: (state, action) => {
      state.item = action.payload
    },
    restart: (state) => {
      state.scanStarted = false
    },
    isScanned: (state) => {
      state.scanStarted = true
    },
  }
})

export const fetchProduct = (code) => {
  return (dispatch) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(products.actions.setProduct(json)) 
    });
  }
};