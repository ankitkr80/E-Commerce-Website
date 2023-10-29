import React, { useEffect, useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';
import { getProducts } from '../../redux/actions/Product.action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Common/Loading';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';
function ProductsPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [currPage, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const { products = [], pageCount = 0, loading = true , error } = useSelector((state)=>state.product);
  const handleFilters = (category, priceRange, rating) => {
    setFilter({ priceRange, category, rating});
  }
  const handlePageChange = (e, p) =>{
    e.preventDefault();
    setPage(p);
  }
  useEffect(()=>{
    if(category) {
      dispatch(getProducts)(currPage, {category});
      setSearchParams();
    } else {
      dispatch(getProducts)(currPage, filter);
    }
  },[dispatch, currPage, filter]);
  return (
    <div className='bg-secondary p-3 w-100 row'>
       <ProductFilter handleFilters={handleFilters}/>
      <div className='bg-white m-2 p-3 col-9 d-flex flex-column justify-content-center '>
        <h2>Products</h2>
        <div className='d-flex flex-wrap'>
          {
            loading ? <Loading /> :
            products && products.length && products.map(product => {
              const { name, description, stock, price, image, rating, _id } = product;
              return <ProductCard name={name} description={description} stock={stock} price={price} image={image} rating={rating} key={_id} id={_id}/>
            })
          }
        </div>
        <div className='pagi'>
        <Pagination 
          count={pageCount} 
          size="large"
          page={currPage}
          onChange={handlePageChange}
        />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
