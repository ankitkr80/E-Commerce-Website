import React from 'react';
import { useEffect, useState } from 'react';
import Products from  './Products';
import Cals from './Cals';
import { useSelector } from 'react-redux';

function Cart() {
  const { cartItems, orderDetails } = useSelector((state)=>state.cart);
  return (
    <div
      className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className='container-fluid bg-dark text-white d-flex align-content-center flex-column justify-content-center'
        style={{ height: '80%', width: '75%', border: '5px solid white' }}
      >
        <h1 className='align-self-center'>Cart</h1>
        <Products products={cartItems} />
        <Cals total={orderDetails && orderDetails.total ? orderDetails.total : 0} />
        <div className='w-100 d-flex justify-content-center'>
          <a href="/shippingDetails"><button className='btn btn-primary m-3 align-self-center'>Add Shipping Details</button></a>
        </div>
      </div>
    </div>
  )
}

export default Cart
