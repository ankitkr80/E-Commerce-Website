import React from 'react';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';

function ProductCard(props) {
  const dispatch = useDispatch();
  const { price, name, stock, image, description, rating, id } = props;
  const addToCart = (e) => {
    e.preventDefault();
    dispatch({
      type: 'addToCart',
      payload: {
        product: {
          id,name, price, stock
        }
      }
    });
  }
  return (
    <div className='m-2'>
      <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..." style={{height: '200px'}}/>
  <div className="card-body">
    <h5 className="card-title">Rs {price}</h5>
    <p className="card-text">{name}</p>
    <p className="card-text">{description}</p>
    <Rating name="read-only" value={rating} precision={0.5} readOnly />
    <div className='d-flex justify-content-around'>
    <button href="#" className="btn btn-primary">Add Review</button>
    {
      stock > 0 ?
      <button className="btn btn-primary" onClick={addToCart}>Add to cart</button> :
      <button href="#" className="btn btn-secondary" >Out of stock</button>
    }
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCard
