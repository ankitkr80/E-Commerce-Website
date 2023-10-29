import React from 'react'

function ShippingDetailsList(props) {
  const { shippingDetails = {} } = props;
  return (
    <div className='m-3'>
      <h1 className='text-white'> Delivery summary</h1>
      <hr></hr>
      <hr></hr>
      <nav className='bg-body-tertiary bg-white border border-primary border-3 p-0 w-100'>
        <div className='p-2 m-0 text-black'>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>Address Line 1</h3>
            <h3 className="">
              {shippingDetails.line1}
            </h3>
          </div>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>Address line 2</h3>
            <h3 className="">
              {shippingDetails.line2}
            </h3>
          </div>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>State</h3>
            <h3 className="">
              {shippingDetails.state}
            </h3>
          </div>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>pincode</h3>
            <h3 className="">
              {shippingDetails.pincode}
            </h3>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ShippingDetailsList
