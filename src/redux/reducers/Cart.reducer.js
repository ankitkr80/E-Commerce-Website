import { createReducer } from '@reduxjs/toolkit';


export const cart = createReducer({
  shippingDetails: {},
  orderDetails: {},
  loading: false,
  error: null
},{
  loadCartRequest: (state) =>{
    state.loading = true;
  },
  addToCart: (state,action) => {
    state.loading = false;
    const { product } = action.payload;
    let isItemPresent = false;
    let cartItems = JSON.parse(JSON.stringify(state.cartItems));
    if(!state.cartItems || !state.cartItems.length){
      cartItems = [{
        id: product.id, name:product.name, price:product.price, quantity: 1
      }];
    } else {
      cartItems.forEach(item=>{
        if(item.id === product.id){
          isItemPresent=true;
          item.quantity ++;
        }
      });
      if(!isItemPresent){
        cartItems.push({
          id: product.id, name:product.name, price:product.price, quantity: 1
        });
      }
    }
    state.cartItems = cartItems;
    let total=0;
    cartItems.forEach(item=>{
      total+=item.quantity*item.price;
    });
    state.orderDetails = {
      total,
      tax: total*12/100,
      deliveryPrice: total*2/100,
      totalAmount: Number(total + total*2/100 + total*12/100).toFixed(2)
    };
  },
  incrementQuantity: (state,action) => {
    const { product } = action.payload;
    let isItemPresent = false;
    if(!state.cartItems){
      state.error = 'No products found';
      return;
    } else {
      state.cartItems.forEach(item=>{
        if(item.id === product.id){
          isItemPresent=true;
          item.quantity ++;
        }
      });
      if(!isItemPresent){
        state.error = 'No matching products found';
        return;
      }
    }
    let total=0;
    state.cartItems.forEach(item=>{
      total+=item.quantity*item.price;
    });
    state.orderDetails = {
      total,
      tax: total*12/100,
      deliveryPrice: total*2/100,
      totalAmount: Number(total + total*2/100 + total*12/100).toFixed(2)
    };
  },
  decrementQuantity: (state,action) => {
    const { product } = action.payload;
    let isItemPresent = false;
    let index = -1;
    if(!state.cartItems){
      state.error = 'No products found';
      return;
    } else {
      state.cartItems.forEach((item,i)=>{
        if(item.id === product.id){
          isItemPresent=true;
          item.quantity --;
          if(item.quantity === 0) {
            index = i;
          }
        }
      });
      if(!isItemPresent){
        state.error = 'No matching products found';
        return;
      }
      if(index !== -1){
        state.cartItems.splice(index,1);
      }
    }
    let total=0;
    state.cartItems.forEach(item=>{
      total+=item.quantity*item.price;
    });
    state.orderDetails = {
      total,
      tax: total*12/100,
      deliveryPrice: total*2/100,
      totalAmount: Number(total + total*2/100 + total*12/100).toFixed(2)
    };
    
  },
  deleteProduct: (state,action) => {
    const { product } = action.payload;
    let isItemPresent = false;
    let index = -1;
    if(!state.cartItems){
      state.error = 'No products found';
      return;
    } else {
      state.cartItems.forEach((item,i)=>{
        if(item.id === product.id){
          isItemPresent=true;
          index = i;
        }
      });
      if(!isItemPresent){
        state.error = 'No matching products found';
        return;
      }
      if(index !== -1){
        state.cartItems.splice(index,1);
      }
    }
    let total=0;
    state.cartItems.forEach(item=>{
      total+=item.quantity*item.price;
    });
    state.orderDetails = {
      total,
      tax: total*12/100,
      deliveryPrice: total*2/100,
      totalAmount: Number(total + total*2/100 + total*12/100).toFixed(2)
    };
    
  },
  addShippingDetails: (state,action) => {
    //add shipping details
  },
  clearError: (state)=>{
    state.error = null;
  }
});
