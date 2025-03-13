import React from 'react';
import { Link } from 'react-router-dom';

function Nvabar() {
    return ( 
        <div>
              <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src='media/logo (1).svg' alt='a' style={{width: "25%"}}/>
          </Link>
         
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/signup" style={{color:"black"}}>SignUp</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about" style={{color:"black"}}>About</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/product" style={{color:"black"}}>Products</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/pricing" style={{color:"black"}}>Pricing</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/support" style={{color:"black"}}>Support</Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" >
                       <img  src='media/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png' alt='t' style={{width:"25%"}}/>
                </a>
              </li>
            
            </ul>
            </form>
          </div>
        </div>
      </nav>
        </div>
       
     );
}

export default Nvabar;