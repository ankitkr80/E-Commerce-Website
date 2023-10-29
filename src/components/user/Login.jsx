import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../../redux/actions/User.action';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth = false, loading = true , error } = useSelector((state)=>state.user);
  const handleEmail = (e) =>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(login)(email, password);
  }
  useEffect(()=>{
    if(error) {
      toast.error(error, {
        duration: 4000,
        position: 'top-center',
      });
      dispatch({
        type: 'clearLoginError'
      })
    }
    if(isAuth) {
      navigate('/');
    }
  },[navigate, isAuth, error])

  return (
    <div
      style={{ height: '37rem' }}
      className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className='container-fluid bg-dark text-white d-flex align-content-center flex-column justify-content-center'
        style={{ height: '80%', width: '50%', border: '5px solid white' }}
      >
        <h1 className='align-self-center'>REGEX</h1>
        <form className='container bg-light text-dark p-3 d-flex align-content-center flex-column w-75 justify-content-center' onSubmit={formSubmit}>
          <div className='m-2'>
            <label for='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              class='form-control'
              placeholder='Enter your email'
              aria-label='email'
              value={email}
              onChange={handleEmail}
            ></input>
            <div className='invalid-feedback'>Valid Email is required.</div>
          </div>
          <div className='m-2'>
            <label for='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              class='form-control'
              placeholder='Enter your password'
              aria-label='password'
              value={password}
              onChange={handlePassword}
            ></input>
            <div className='invalid-feedback'>Valid Password is required.</div>
          </div>
          <button type='submit' className='btn btn-primary w-50 align-self-center'>
            Login
          </button>
        </form>
        <div className='d-flex justify-content-center align-item-center mt-1'>
          <a
            for='signin'
            className='col-sm-4 mt-3 text-success'
            style={{
              fontSize: '15px',
              marginBottom: '-8rem',
              marginLeft: '70px',
              textDecoration: 'none',
            }}
            href='/sign-up'
          >
            Sign-up
          </a>
          <div
            className='v1'
            style={{
              borderLeft: '1.5px solid white',
              height: '35px',
              marginBottom: '-2.5rem',
              marginTop: '10px',
              marginLeft: '-50px',
            }}
          ></div>
          <a
            for='forgotpass'
            className='col-sm-4 mt-3 text-danger'
            style={{
              fontSize: '15px',
              marginBottom: '-8rem',
              marginLeft: '50px',
              textDecoration: 'none',
            }}
            href='/forgotPassword'
          >
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
