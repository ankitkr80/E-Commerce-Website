import React from 'react'
import OrderFilter from './OrderFilter';
import OrderCard from './OrderCard';

const orders = [
  {
    totalAmount: 30,
    address: {line1: 'line1', line2: 'line2', city:'Delhi', country: 'india', pincode: '100009'},
    productsCount: 3,
    status: 'delivered',
    products: [{name:'product', price: 23, quantity: 2, productId: '98765432wdfgg'}]
  },
  {
    totalAmount: 30,
    address: {line1: 'line1', line2: 'line2', city:'Delhi', country: 'india', pincode: '100009'},
    productsCount: 3,
    status: 'processing',
    products: [{name:'product', price: 23, quantity: 2, productId: '98765432wdfgg'}]
  },
  {
    totalAmount: 30,
    address: {line1: 'line1', line2: 'line2', city:'Delhi', country: 'india', pincode: '100009'},
    productsCount: 3,
    status: 'processing',
    products: [{name:'product', price: 23, quantity: 2, productId: '98765432wdfgg'}]
  },
]

function OrdersPage(props) {
  const { isAdminPage = false } = props;
  return (
    <div className='bg-secondary p-3 w-100 row'>
      <OrderFilter />
      <div className='bg-white m-2 p-3 col-8'>
        <h2>Orders</h2>
        <div className='d-flex flex-wrap'>
          {
            orders && orders.length && orders.map(order => {
              const { totalAmount, address, productsCount, status, products } = order;
              return <OrderCard totalAmount={totalAmount} address={address} productsCount={productsCount} status={status} products={products} isAdminPage={isAdminPage}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
