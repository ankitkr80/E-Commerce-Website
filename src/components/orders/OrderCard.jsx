import React from 'react';

const orderStatuses = [
  'processing',
      'out for delivery',
      'confirmed',
      'delivered',
      'canceled'
]

function OrderCard(props) {
  const { productsCount, totalAmount, address, status, isAdminPage } = props;
  return (
    <div className='m-2'>
      <div className='card' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Order total :- Rs {totalAmount}</h5>
          <p className='card-text'>products count :- {productsCount}</p>
          <p className='card-text'>
            Address: {address.line1 + ',' + address.line2}
          </p>
          <p className='card-text'>
            {' '}
            {address.city + ',' + address.country + ',' + address.pincode}
          </p> {
            isAdminPage ?
            <div>
              <form>
          <div>
            <select
              className='form-select form-select-sm'
              aria-label='Small select example'
            >
              {orderStatuses.map((statusValue) => {
                if(statusValue===status){
                  return <option value={statusValue} selected>{statusValue}</option>;
                }
                return <option value={statusValue}>{statusValue}</option>;
              })}
            </select>
            <div className='invalid-feedback'>Valid Status is required.</div>
          </div>
          <div className='d-flex justify-content-around'>

          <button type="button submit" className="btn btn-primary mt-3" >Update Order</button>
          <button type="button submit" className="btn btn-primary mt-3" >View Order</button>
          </div>
        </form>
            </div> :
          <div className='d-flex justify-content-around'>
             <p className='card-text'>current status :- {status}</p>
            <button href='#' className='btn btn-primary'>
              view order
            </button>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
