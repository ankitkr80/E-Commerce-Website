import { Search, SensorOccupied } from '@mui/icons-material'
import React from 'react'
const users = [
  {
      name: 'John',
      image:'data:image/jpeg;base64,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',
      email: 'john@email.com',
      mobile: '9835289735'
    }
]
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