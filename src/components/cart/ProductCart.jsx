import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

function ProductCart(props) {
  const dispatch = useDispatch();
  const { product, index } = props;
  const { name, price, quantity } = product;
  const incrementFunction= (e)=>{
    e.preventDefault();
    dispatch({
      type: 'incrementQuantity',
      payload: {
        product: {
          id:product.id,name:product.name, price:product.price,
        }
      }
    });
  }
  const decrementFunction= (e)=>{
    e.preventDefault();
    dispatch({
      type: 'decrementQuantity',
      payload: {
        product: {
          id:product.id,name:product.name, price:product.price,
        }
      }
    });
  }
  const removeProduct = (e)=>{
    e.preventDefault();
    dispatch({
      type: 'deleteProduct',
      payload: {
        product: {
          id:product.id,name:product.name, price:product.price,
        }
      }
    });
  }
  return (
    <div className='m-3 bg-white'>
      <div className="row align-items-center text-black m-3">
    <div className="col-2">
      {name}
    </div>
    <div className="col-4">
    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger" onClick={decrementFunction}>-</button>
  <button type="button" className="btn btn-warning">{quantity}</button>
  <button type="button" className="btn btn-success" onClick={incrementFunction}>+</button>
</div>
    </div>
    <div className="col-2">
      Rs {price}
    </div>
    <div className="col-2">
     Rs {price*quantity}
    </div>
    <div className="col-2">
     <button onClick={removeProduct}><DeleteIcon /></button>
    </div>
  </div>
    </div>
  )
}

export default ProductCart
