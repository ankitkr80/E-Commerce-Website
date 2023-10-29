import React from "react";

function Profile() {
  return (
    <div className="m-2 p-3  d-flex align-content-center flex-column justify-content-center  ">
      <div
        className="container bg-dark text-white d-flex col-sm-10 col-lg-6 flex-column justify-content-center p-3 px-5"
        style={{
          border: "5px solid white",
          backgroundImage:
            "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
        }}
      >
        <h2 className="align-self-center">Profile</h2>

        <div className="container d-flex flex-row bg-white text-dark justify-content-around p-3">
          <div className="conatiner mt-5 d-flex flex-column">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              className=" img-thumbnail "
              alt="..."
              style={{ height: "150px", width: "10rem" }}
            />

            <h3 className="mt-4 align-self-center">John</h3>
          </div>
          <div
            className="mt-5"
            style={{
              borderLeft: "1.5px solid grey",
              height: "15rem",
            }}
          ></div>
          <div className="d-flex flex-column">
            <h3>
              Info
              <hr />
            </h3>
            <h5>Email</h5>
            <p>john@example.com</p>
            <h5>Mobile</h5>
            <p>9886473632</p>
            <h5>Address</h5>
            <p>addressline1, 302001</p>
            <a className="btn btn-primary" href="/">
              Logout
            </a>
          </div>
        </div>

        {/* <div className='card d-flex flex-row' style={{ width: '15rem' }}>
            <div className='card-body'>
              <h5 className='card-title'>User :-</h5>
              <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp' className=" img-thumbnail " alt="..." style={{height: '170px', width:"14rem"}}/>
              <p className='card-text'>email:- </p>
              <p className='card-text'>mobile:- </p>
              <div className='d-grid gap-2'>
                <button href='#' className='btn btn-primary lg'>
                  view order
                        </button>
                        
                        <button href='#' className='btn btn-primary lg'>
                  wishlist
                </button>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Profile;
