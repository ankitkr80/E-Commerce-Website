import React from 'react';
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

function ProductCard(props) {
  const { price, name, stock, image, description, rating, category } = props
  return (
    <div className='m-2'>
      <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..." style={{height: '200px'}}/>
  <div className="card-body">
  <form>
          <div className='m-2'>
            <label for='firstName' className='form-label'>
              Name
            </label>
            <input type="text" class="form-control" placeholder="Enter product name" aria-label="product name" value={name}></input>
            <div className='invalid-feedback'>Valid Name is required.</div>
          </div>
          <div  className='m-2'>
            <label for='description' className='form-label'>
              Product description
            </label>
            <input type="text" class="form-control" placeholder="Enter product description" aria-label="description" value={description}></input>
            <div className='invalid-feedback'>Valid description is required.</div>
          </div>
          <div  className='m-2'>
            <label for='firstName' className='form-label'>
              Category
            </label>
            <select
              className='form-select form-select-sm'
              aria-label='Small select example'
            >
              {categories.map((productCategory) => {
                const { name } = productCategory;
                if (name === category) {
                  return <option value={name} selected>{name}</option>;
                }
                return <option value={name}>{name}</option>;
              })}
            </select>
            <div className='invalid-feedback'>Valid Category is required.</div>
          </div>
          <div  className='m-2'>
            <label for='productPrice' className='form-label'>
              Price
            </label>
            <input type="text" class="form-control" placeholder="Enter product price" aria-label="productPrice" value={price}></input>
            <div className='invalid-feedback'>Valid Price is required.</div>
          </div>
          <div  className='m-2'>
            <label for='productStock' className='form-label'>
              stock
            </label>
            <input type="text" class="form-control" placeholder="Enter product stock" aria-label="productStock" value={stock}></input>
            <div className='invalid-feedback'>Valid Stock is required.</div>
          </div>
          <div  className='m-2'>
            <label for='productImage' className='form-label'>
              Image
            </label>
            <input type="file" class="form-control" placeholder="select product image" aria-label="productStock"></input>
            <div className='invalid-feedback'>Valid image is required.</div>
          </div>
          <button type="button submit" className="btn btn-primary m-2" >Edit</button>
        </form>
  </div>
</div>
    </div>
  )
}

export default ProductCard
