import React from 'react';
import { useEffect, useState } from 'react';
import Products from  './Products';
import Cals from './Cals';
import { useSelector } from 'react-redux';
import ShippingDetailsList from './ShippingDetailsList';

function ConfirmOrder() {
  const { cartItems, orderDetails, ShippingDetails } = useSelector((state)=>state.cart);
  const { isAuth } = useSelector((state)=>state.user);
  function confirmOrder(){
    // logic to check user logged in or not
    // if not redirect to login page
    //else
    // write action to confirm order
    // dispatch above details to action
    // navigate to orders page
  }
  return (
    <div
      className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className='container-fluid bg-dark text-white d-flex align-content-center flex-column justify-content-center'
        style={{ height: '80%', width: '75%', border: '5px solid white' }}
      >
        <h1 className='align-self-center'>Confirm Order</h1>
        <ShippingDetailsList ShippingDetails={ShippingDetails}/>
        <Products products={cartItems} />
        <Cals total={orderDetails && orderDetails.total ? orderDetails.total : 0} />
        <div className='w-100 d-flex justify-content-center'>
          <button className='btn btn-primary m-3 align-self-center' onClick={confirmOrder}>confirm Order</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmOrder
