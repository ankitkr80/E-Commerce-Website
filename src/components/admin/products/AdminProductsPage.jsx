import React from 'react';
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'arpit',
    price: 30,
    description: 'this is description',
    rating: 3.4,
    stock: 0,
    image: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582456742%2Flongsleeves-hershel_mampai.jpg&w=640&q=75',
    category: 'Home appliances'
  },
  {
    name: 'arpit',
    price: 30,
    description: 'this is description',
    rating: 3.4,
    stock: 100,
    image: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582456742%2Flongsleeves-hershel_mampai.jpg&w=640&q=75',
    category: 'Home appliances'
  },
  {
    name: 'arpit',
    price: 30,
    description: 'this is description',
    rating: 3.4,
    stock: 100,
    image: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582456742%2Flongsleeves-hershel_mampai.jpg&w=640&q=75',
    category: 'Home appliances'
  }
]
function AdminProductsPage() {
  return (
    <div className='bg-secondary p-3 w-100 row'>
      <ProductFilter />
      <div className='bg-white m-2 p-3 col-8'>
        <h2>Products</h2>
        <a href='/product-new' className='btn btn-primary w-75 align-self-center m-3'>Create new Product</a>
        <div className='d-flex flex-wrap'>
          {
            products && products.length && products.map(product => {
              const { name, description, stock, price, image, rating } = product;
              return <ProductCard name={name} description={description} stock={stock} price={price} image={image} rating={rating} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AdminProductsPage
