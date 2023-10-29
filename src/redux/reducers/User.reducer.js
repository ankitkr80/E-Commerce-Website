import { createReducer } from '@reduxjs/toolkit';


export const user = createReducer({
  user: {},
  isAuth: false,
  isAdmin: false,
  loading: false,
  error: null
},{
  loadLoginRequest: (state) =>{
    state.loading = true;
  },
  loadLoginSuccess: (state,action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.isAuth = true;
    state.isAdmin = action.payload.user.role == 'admin' ? true: false;
  },
  loadLoginFailed: (state,action) => {
    state.loading = false;
    state.isAuth = false;
    state.isAdmin = false;
    state.error = action.payload.error;
  },
  clearLoginError: (state)=>{
    state.error = null;
  }
});
