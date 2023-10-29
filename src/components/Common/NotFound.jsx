import React from 'react'

function NotFound() {
  return (
    <div
      style={{ height: '37rem' }}
      className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className='container-fluid bg-dark text-white d-flex align-content-center flex-column justify-content-center p-3'
        style={{ height: '80%', width: '50%', border: '5px solid white' }}
      >
        <img src='https://assets.materialup.com/uploads/2ecb2e9c-48ee-498d-bbb4-bae4a791f28a/preview.jpg' alt='404 not found' style={{ width: '90%', height: "90%"}} className='align-self-center'/>
      </div>
    </div>
  );
}

export default NotFound
