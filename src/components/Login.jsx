import { Padding } from "@mui/icons-material";
import React from "react";

const Login = () => {
  return (
    <div
      className="container-fluid bg-dark text-white"
      style={{ height: "25rem", width: "45rem", border: "5px solid white" ,margin:'30px 0 10px 16rem'}}
    >
      <h1 className="d-flex justify-content-center" style={{ margin: "25px" }}>
        REGEX
      </h1>

      <div
        className="container bg-light text-dark"
        style={{
          width: "30rem",
          marginTop: "20px",
          border: "4px solid",
          padding: "30px 10px",
        }}
      >
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 mr-1 col-form-label">
            Email:
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 mr-2 col-form-label">
            Password:
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div className="d-grid">
          <input
            type="button"
            value="login"
            name="Login"
            className="btn btn-sm mt-4 btn-primary"
          />
        </div>
       
          </div>
          <div className="d-flex justify-content-center align-item-center mt-1">
          <label
            for="signin"
            className="col-sm-4 mt-3 text-success"
            style={{ fontSize: "15px", marginBottom: "-8rem" , marginLeft: "70px"}}
          >
            Signin
          </label>
          <div
            className="v1"
            style={{
              borderLeft: "1.5px solid white",
              height: "35px",
              marginBottom: "-2.5rem",
                marginTop: "10px",
                marginLeft: "-50px",
            }}
          ></div>
          <label
            for="forgotpass"
            className="col-sm-4 mt-3 text-danger"
            style={{
              fontSize: "15px",
              marginBottom: "-8rem",
              marginLeft: "50px",
            }}
          >
            Forgot Password
          </label>
        </div>
    </div>
  );
};

export default Login;
