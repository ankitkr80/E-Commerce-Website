import React from 'react';

function Cals(props) {
  const { total } = props;
  return (
    <div className='m-3'>
      <h1 className='text-white'> Order summary</h1>
      <hr></hr><hr></hr>
      <nav className='bg-body-tertiary bg-white border border-primary border-3 p-0 w-100'>
        <div className='p-2 m-0 text-black'>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>Item Total</h3>
            <h3 className="">
              Rs {total}
            </h3>
          </div>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>Tax</h3>
            <h3 className="">
              Rs {total*12/100}
            </h3>
          </div>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>shipping Price</h3>
            <h3 className="">
              Rs {total*2/100}
            </h3>
          </div>
          <hr></hr>
          <div className='d-flex flex-row w-100 justify-content-between'>
            <h3 className='p-0'>Grand Total</h3>
            <h3 className="">
              Rs {Number(total + total*2/100 + total*12/100).toFixed(2)}
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Cals;
