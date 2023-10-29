import { createReducer } from '@reduxjs/toolkit';


export const product = createReducer({
  products: [],
  pageCount: 0,
  loading: false,
  error: null
},{
  loadProductRequest: (state) =>{
    state.loading = true;
  },
  loadProductSuccess: (state,action) => {
    state.loading = false;
    state.products = action.payload.products;
    state.pageCount = action.payload.pageCount;
  },
  loadProductFailed: (state,action) => {
    state.loading = false;
    state.error = action.payload.message;
  },
  ClearError: (state)=>{
    state.error = null;
  }
});
