import React from 'react'

function Contact() {
  return (
    <div
      style={{ height: '37rem' }}
      className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className='container-fluid bg-dark text-white d-flex  flex-column align-content-center justify-content-center p-3'
        style={{ height: '80%', width: '50%', border: '5px solid white' }}
      >
        <h1>Contact us form</h1>
        <div className='w-100 row p-3 align-self-center justify-content-between'>
        <div className='d-flex col-5'>
        <form className='container bg-light text-dark d-flex align-content-center flex-column w-100 justify-content-center'>
          <div className='m-2'>
            <label for='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              class='form-control'
              placeholder='Enter your email'
              aria-label='email'
            ></input>
            <div className='invalid-feedback'>Valid Email is required.</div>
          </div>
          <div className='m-2'>
            <label for='mobile' className='form-label'>
              Mobile
            </label>
            <input
              type='number'
              class='form-control'
              placeholder='Enter your mobile'
              aria-label='mobile'
            ></input>
            <div className='invalid-feedback'>Valid Mobile is required.</div>
          </div>
          <div className='m-2'>
            <label for='message' className='form-label'>
              Message
            </label>
            <input
              type='Text'
              class='form-control'
              placeholder='Enter your password'
              aria-label='message'
            ></input>
            <div className='invalid-feedback'>ValidMessage is required.</div>
          </div>
          <button type='submit' className='btn btn-primary w-50 align-self-center'>
            contact us
          </button>
        </form>
        </div>
        <div className='col-7'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510282259!2d76.76356975916202!3d28.644287353977727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1696610627023!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
