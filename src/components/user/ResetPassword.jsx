import React from 'react'

function ResetPassword() {
  return (
    <div
    className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className="container bg-dark text-white d-flex align-content-center col-sm-10 col-lg-6 flex-column justify-content-center p-3 px-5"
        style={{ border: "5px solid white" }}
      >
        <h1 className="align-self-center">REGEX</h1>
        <label className="align-self-center">Please fill this form to reset</label>
        <form className="container bg-light text-dark p-3 d-flex align-content-center flex-column mb-2 justify-content-center">

          <div className="m-2">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter your password"
              aria-label="password"
            ></input>
            <div className="invalid-feedback">Valid Password is required.</div>
          </div>

          <div className="m-2">
            <label for="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter your password again"
              aria-label="password"
            ></input>
            <div className="invalid-feedback">Password should be match.</div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-50 align-self-center"
          >
            <a href='/login' className='text-white'>

            Proceed to login
            </a>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
