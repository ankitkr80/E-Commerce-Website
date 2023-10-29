import React from 'react';

function UsersCard(props) {
  const { name, image, email, mobile } = props;
  return (
    <div className='m-2'>
      <div className='card' style={{ width: '15rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>User :- {name}</h5>
          <img
            src={image}
            className=' img-thumbnail '
            alt='...'
            style={{ height: '200px', width: '18rem' }}
          />
          <p className='card-text'>email:- {email}</p>
          <p className='card-text'>mobile:- {mobile}</p>
          <div className='d-grid gap-2'>
            <button href='#' className='btn btn-danger lg'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
