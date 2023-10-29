import React from "react";

function SignUp() {
  return (
    <div
    className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className="container bg-dark text-white d-flex align-content-center col-sm-10 col-lg-6 flex-column justify-content-center p-3 px-5"
        style={{ border: "5px solid white" }}
      >
        <h1 className="align-self-center">REGEX</h1>
        <label className="align-self-center">Please fill this form to sign up</label>
        <form className="container bg-light text-dark p-3 d-flex align-content-center flex-column mb-2 justify-content-center">
          <div className="m-2">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              placeholder="Enter your name"
              aria-label="name"
            ></input>
          </div>

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
            <label for="Mobile No." className="form-label">
              Mobile No.
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your phone number"
              aria-label="mobile"
            ></input>
            <div className="invalid-feedback">
              Valid Mobile Number is required.
            </div>
          </div>
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

          <div class="mb-3">
            <label for="formFile" class="form-label">
              Set Your Profile Pic
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-50 align-self-center"
          >
            SignUp
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
            href="/forgotPassword"
          >
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
