import React from 'react'
import ProductCart from './ProductCart'

function Products(props) {
  const { products } = props;
  return (
    <div className='d-flex w-80  justify-content-center height'>
      <div className='text-black w-100 d-flex flex-column justify-content-center'>
        <h1 className='text-white'>Products</h1>
        <hr></hr><hr></hr>
        {
          products && products.length && products.map((product,index)=>{
            return <ProductCart product={product} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Products
