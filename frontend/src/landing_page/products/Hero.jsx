import React from 'react';

function Hero() {
    return ( 
      <div className="container border-bottom mb-5">
        <div className="row text-center mt-5 text-muted p-5">
             <h1 className='mt-3' style={{fontSize:"50px"}}>Zerodha Products</h1>
             <h3 className='mt-3' style={{fontSize:"22px"}}>Sleek, modern, and intuitive trading platforms</h3>
             <p className='mt-3' style={{fontSize:"18px"}}>Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
      </div>
     );
}

export default Hero;