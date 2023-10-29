import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import './Designs/App.css';
import './Designs/Common.css';

import Footer from './components/Common/Footer';
import Home from './components/Common/Home';
import Navbar from './components/Common/Navbar';
import ProductsPage from "./components/products/ProductsPage";
import NotFound from "./components/Common/NotFound";
import OrdersPage from "./components/orders/OrdersPage";
import AdminProductsPage from "./components/admin/products/AdminProductsPage";
import UsersPage from "./components/admin/users/UsersPage";
import Login from "./components/user/Login";
import Cart from "./components/cart/Cart";
import ShippingDetails from "./components/cart/ShippingDetails";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import SignUp from "./components/user/SignUp";
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import Contact from "./components/Common/Contact";
import Profile from "./components/user/Profile";
import CreateNewProduct from "./components/admin/products/CreateNewProduct";
import Protected from "./components/Common/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/orders',
    element: <Protected><OrdersPage /></Protected>
  },
  {
    path: '/admin/orders',
    element: <Protected isAdminRoute={true} > <OrdersPage isAdminPage={true} /></Protected>
  },
  {
    path: '/admin/products',
    element:<Protected isAdminRoute={true} ><AdminProductsPage /></Protected> 
  },
  {
    path: '/admin/users',
    element: <Protected isAdminRoute={true} ><UsersPage /></Protected>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/shippingDetails',
    element: <ShippingDetails />
  },
  {
    path: '/confirmOrder',
    element: <Protected ><ConfirmOrder /></Protected>
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />
  },
  {
    path: '/reset',
    element: <ResetPassword />
  },
  {
    path: '/contact-us',
    element: <Contact />
  },
  {
    path: '/me',
    element: <Protected><Profile/></Protected>
  },
  {
    path: '/product-new',
    element:  <Protected isAdminRoute={true} ><CreateNewProduct /></Protected>
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
