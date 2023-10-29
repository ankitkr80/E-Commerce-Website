import React, { useState } from 'react';
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

function ProductFilter(props) {
  const { handleFilters } = props;
  const [cateSelected, setCategory] = useState('Open this select menu');
  const [rating, setRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0,10000]);
  const handleCatetegory = (e) =>{
    e.preventDefault();
    setCategory(e.target.value);
  }
  const handleRating = (e,value) =>{
    e.preventDefault();
    console.log(value);
    setRating(value);
  }
  const handlePriceRange = (e,value) =>{
    setPriceRange(value);
  }
  const formSubmit = (e) => {
    e.preventDefault();
    handleFilters(cateSelected, priceRange, rating);
  }
  return (
    <div className='p-3 m-3 bg-white col-2 h-50'>
      <div className='border border-5 border-dark-subtle p-3'>
        <h2>Filters</h2>
        <form onSubmit={formSubmit}>
          <div>
            <label for='firstName' className='form-label'>
              Price Range
            </label>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={priceRange}
              valueLabelDisplay='auto'
              max={Number(1000)}
              min={Number(0)}
              onChange={handlePriceRange}
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
              value={cateSelected}
              onChange={handleCatetegory}
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
        value={rating}
        precision={0.5}
        onChange={handleRating}
      />
            <div className='invalid-feedback'>Valid Rating is required.</div>
          </div>
          <button type="button submit" className="btn btn-primary" >Apply</button>
        </form>
      </div>
    </div>
  );
}

export default ProductFilter;
