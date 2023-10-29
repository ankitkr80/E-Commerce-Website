import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar(props) {
  const { isAuth = false, isAdmin=false } = useSelector((state)=>state.user);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid topNav">
    <a className="navbar-brand" href="/">Regex</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navOptions" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><HomeIcon /> Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products"><Inventory2Icon /> Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact-us"><ContactPhoneIcon/> Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cart"><ShoppingCartIcon /> Cart</a>
        </li>
        {
          !isAuth ?
          <>
            <li className="nav-item ms-2">
            <a className="nav-link" href="/sign-up"><SensorOccupiedIcon /> Sign up</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/login"><LoginIcon /> Login</a>
            </li>
          </> :
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <AccountCircleIcon />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/me">Profile</a></li>
            <li><a className="dropdown-item" href="/orders">Orders</a></li>
            {
              isAdmin ? 
              <>
              <li><a className="dropdown-item" href="/admin/users">Users(edit)</a></li>
            <li><a className="dropdown-item" href="/admin/orders">orders(edit)</a></li>
            <li><a className="dropdown-item" href="/admin/products">products(edit)</a></li>
              </>:<></>
            }
            <li><a className="dropdown-item" href="/">Logout</a></li>
          </ul>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>
  );
}
