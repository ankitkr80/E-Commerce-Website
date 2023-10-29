import React from 'react';

const categories = [
  {
    name: 'Cloths',
    image: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75'
  },
  {
    name: 'Electronics',
    image: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75'
  },
  {
    name: 'Home appliances',
    image: 'https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75'
  }
]

function Home() {
  return (
    <div>
      <div id='carouselExampleIndicators' className='carousel slide home-images'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src='https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518206%2Fbanner-3_mczlxb.jpg&w=1920&q=75' className='d-block w-100' alt='...' style={{width:"100%", height:"460px"}}/>
          </div>
          <div className='carousel-item'>
            <img src='https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518195%2Fbanner-2_htripb.jpg&w=1920&q=75' className='d-block w-100' alt='...'  style={{width:"640px", height:"460px"}}/>
          </div>
          <div className='carousel-item'>
            <img src='https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518190%2Fbanner-1_sysmlz.jpg&w=1920&q=75' className='d-block w-100' alt='...' style={{width:"640px", height:"460px"}} />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <div className='w-80 position-relative m-3'>
         <h2>Categories</h2>
         <div className='d-flex wrap justify-content-around flex-wrap position-relative '>
          {
            categories.map(category=>{
              const { name, image } = category;
              const url=`/products?category=${name}`;
              return (
                <a href={url}>
                <div className="card m-3" style={{width: "30rem", height: "20rem", position: 'relative'}}>
                <img src={image} className="card-img-top" alt="..."  style={{width: "30rem", height: "20rem"}}/>
                <div className="card-body" style = {{position: 'absolute', top: '10', left: '20', zIndex: '9'}}>
                  <p className="card-text">{name}</p>
                </div>
              </div>
              </a>
              )
            })
          }
         </div>
      </div>
    </div>
  );
}

export default Home;
