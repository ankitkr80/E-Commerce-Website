import React from 'react';

const orderStatuses = [
  'processing',
      'out for delivery',
      'confirmed',
      'delivered',
      'canceled'
]

function OrderFilter() {
  return (
    <div className='p-3 m-3 bg-white w-30 col-3 h-50'>
      <div className='border border-5 border-dark-subtle p-3'>
        <h2>Filters</h2>
        <form>
          <div>
            <label for='firstName' className='form-label'>
              Order statuses
            </label>
            <select
              className='form-select form-select-sm'
              aria-label='Small select example'
            >
              <option selected>Open this select menu</option>
              {orderStatuses.map((status) => {
                return <option value={status}>{status}</option>;
              })}
            </select>
            <div className='invalid-feedback'>Valid Status is required.</div>
          </div>
          <button type="button submit" className="btn btn-primary mt-3" >Apply</button>
        </form>
      </div>
    </div>
  )
}

export default OrderFilter
