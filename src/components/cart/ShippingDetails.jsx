import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ShippingDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { line1, setLine1 } = useState('');
  const { line2, setLine2 } = useState('');
  const { state, setState } = useState('');
  const { city, setCity } = useState('');
  const { pincode, setPincode } = useState('');
  const handleLine1 = (e) =>{
    e.preventDefault();
    setLine1(e.target.value);
  }
  const handleLine2 = (e) =>{
    e.preventDefault();
    setLine2(e.target.value);
  }
  const handleState = (e) =>{
    e.preventDefault();
    setState(e.target.value);
  }
  const handleCity = (e) =>{
    e.preventDefault();
    setCity(e.target.value);
  }
  const handlePincode = (e) =>{
    e.preventDefault();
    setPincode(e.target.value);
  }
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'addShippingDetails',
      payload: {
        line1, line2, state, city, pincode
      }
    });
    navigate('/confirmOrder');
  }
  return (
    <div
      className='p-3  d-flex align-content-center flex-column justify-content-center'
    >
      <div
        className='container-fluid bg-dark text-white d-flex align-content-center flex-column justify-content-center p-3'
        style={{ height: '80%', width: '50%', border: '5px solid white' }}
      >
        <h1 className='align-self-center'>Add shipping Details</h1>
        <form className='container bg-light text-dark p-3 d-flex align-content-center flex-column w-75 justify-content-center' onSubmit={formSubmit}>
          <div className='m-2'>
            <label for='line1' className='form-label'>
              Address line1
            </label>
            <input
              type='text'
              class='form-control'
              placeholder='Enter your Address line1'
              aria-label='line1'
              value={line1}
              onChange={handleLine1}
              required
            ></input>
            <div className='invalid-feedback'>Valid Address is required.</div>
          </div>
          <div className='m-2'>
            <label for='line2' className='form-label'>
              Address line2
            </label>
            <input
              type='text'
              class='form-control'
              placeholder='Enter your address line2'
              aria-label='line2'
              value={line2}
              onChange={handleLine2}
              required
            ></input>
            <div className='invalid-feedback'>Valid Address is required.</div>
          </div>
          <div className='m-2'>
            <label for='state' className='form-label'>
              state
            </label>
            <input
              type='text'
              class='form-control'
              placeholder='Enter your state'
              aria-label='state'
              value={state}
              onChange={handleState}
              required
            ></input>
            <div className='invalid-feedback'>Valid state is required.</div>
          </div>
          <div className='m-2'>
            <label for='city' className='form-label'>
              City
            </label>
            <input
              type='text'
              class='form-control'
              placeholder='Enter your cit'
              aria-label='city'
              value={city}
              onChange={handleCity}
              required
            ></input>
            <div className='invalid-feedback'>Valid city is required.</div>
          </div>
          <div className='m-2'>
            <label for='pincode' className='form-label'>
              Pincode
            </label>
            <input
              type='number'
              class='form-control'
              placeholder='Enter your pincode'
              aria-label='pincode'
              value = {pincode}
              onChange={handlePincode}
              required
            ></input>
            <div className='invalid-feedback'>Valid Pincode is required.</div>
          </div>
          <button type='submit' className='btn btn-primary w-100 align-self-center'>
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  )
}

export default ShippingDetails
