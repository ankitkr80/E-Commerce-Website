import React from 'react';
import { Slider } from '@mui/material';
import Rating from '@mui/material/Rating';

const categories = [
  {
    name: 'Cloths',
    image:
      'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75',
  },
  {
    name: 'Electronics',
    image:
      'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75',
  },
  {
    name: 'Home appliances',
    image:
      'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75',
  },
];

function ProductFilter() {
  return (
    <div className='p-3 m-3 bg-white w-30 col-3 h-50'>
      <div className='border border-5 border-dark-subtle p-3'>
        <h2>Filters</h2>
        <form>
          <div>
            <label for='firstName' className='form-label'>
              Price Range
            </label>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={[0, 5000]}
              valueLabelDisplay='auto'
              max='10000'
              min='0'
            />
            <div className='invalid-feedback'>Valid Price range is required.</div>
          </div>
          <div>
            <label for='firstName' className='form-label'>
              Category
            </label>
            <select
              className='form-select form-select-sm'
              aria-label='Small select example'
            >
              <option selected>Open this select menu</option>
              {categories.map((category) => {
                const { name } = category;
                return <option value={name}>{name}</option>;
              })}
            </select>
            <div className='invalid-feedback'>Valid Category is required.</div>
          </div>
          <div className='pt-2 d-flex flex-column'>
            <label for='firstName' className='form-label'>
              Rating
            </label>
            <Rating
        name="simple-controlled"
        value={3.5}
        precision={0.5}
      />
            <div className='invalid-feedback'>Valid Category is required.</div>
          </div>
          <button type="button submit" className="btn btn-primary" >Apply</button>
        </form>
      </div>
    </div>
  );
}

export default ProductFilter;
