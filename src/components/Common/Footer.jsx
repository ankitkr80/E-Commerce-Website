import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid topNav">
      <h1 className="navbar-brand">© 2020 Dress Shop. All rights reserved.</h1>
      <div class="" id="navbarText">
      <span class="navbar-text">
       <FacebookIcon />
       <InstagramIcon />
       <TwitterIcon />
      </span>
    </div>
    </div>
  </nav>
  )
}

export default Footer
