import React from 'react';

function UsersFilter() {
  return (
      <div className='p-3 m-3 bg-white w-30 col-3 h-50'>
      <div className='border border-5 border-dark-subtle p-3'>
        <h2>Filters</h2>
        <form>
          <div>
                <input type="search" name="userSearch" className='mx-2' id="userSearch"style={{height:'2.5rem', width:'13rem'}} placeholder='search by email/mobile' />
                <button className='btn btn-success m-3' style={{height:'2.5rem', width:'12rem'}}>Search   </button>                          
                   
            </div>
        </form>
        </div>
    </div>
  )
}

export default UsersFilter
