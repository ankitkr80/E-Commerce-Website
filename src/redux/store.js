import { configureStore } from '@reduxjs/toolkit';
import { product } from './reducers/Product.reducer';
import { user } from './reducers/User.reducer';
import { cart } from './reducers/Cart.reducer';

const localStorageMiddleware = ({ getState }) =>{
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  }
}

const reHydrateStore = () =>{
  if(localStorage.getItem('applicationState') != null) {
    return JSON.parse(localStorage.getItem('applicationState'));
  }
}

const store = configureStore({
  reducer: {
    product,
    user,
    cart
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware=>getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
