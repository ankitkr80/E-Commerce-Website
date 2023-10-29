import React from 'react'

function ForgotPassword() {
  return (
    <div
    className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className="container bg-dark text-white d-flex align-content-center col-sm-10 col-lg-6 flex-column justify-content-center p-3 px-5"
        style={{ border: "5px solid white" }}
      >
        <h1 className="align-self-center">REGEX</h1>
        <label className="align-self-center">Please fill this form to Reset password</label>
        <form className="container bg-light text-dark p-3 d-flex align-content-center flex-column mb-2 justify-content-center">
          <div className="m-2">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
              aria-label="email"
            ></input>
            <div className="invalid-feedback">Valid Email is required.</div>
          </div>

          <div className="m-2">
            <label for="question" className="form-label">
              Security Question
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your question"
              aria-label="question"
            ></input>
            <div className="invalid-feedback">Valid Question is required.</div>
          </div>
          <div className="m-2">
            <label for="answer" className="form-label">
            Security Answer
            </label>
            <input
              type="anwser"
              class="form-control"
              placeholder="Enter your phone number"
              aria-label="answer"
            ></input>
            <div className="invalid-feedback">
              Valid answer is required.
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-50 align-self-center"
          >
            <a href='/reset' className="text-white">
            Reset Password
          </a>
          </button>
        </form>
        <div className="d-flex align-item-center justify-content-around">
          <a
            for="login"
            className="text-success"
            style={{
              fontSize: "15px",
              textDecoration: "none",
            }}
            href="/login"
          >
            Login 
          </a>
          <div
            className=""
            style={{
              borderLeft: "1.5px solid white",
              height: "35px",
            }}
          ></div>
          <a
            for="forgotpass"
            className="text-danger"
            style={{
              fontSize: "15px",
              textDecoration: "none",
            }}
            href="/sign-up"
          >
            sign-up
          </a>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
