import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function Protected({ isAdminRoute = false, children}) {
  const { isAuth, isAdmin } = useSelector(state=>state.user);
  if(!isAuth) {
    return <Navigate to='/login' replace />
  }
  if(isAdminRoute && !isAdmin) {
    return <Navigate to='/' replace />
  }
  return children
}

export default Protected
