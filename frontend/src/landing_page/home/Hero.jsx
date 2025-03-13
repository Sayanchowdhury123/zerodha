import React from 'react';
import {useNavigate} from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
    return( 

        <div className='container p-5'>


          <div className='row text-center'>
                  
                    <img src='media/homehero.png' alt='heroimage' className='mb-5' />

                     <h1 className='mt-5'>Invest in everything</h1>
                     <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                      <button style={{width:"20%", margin:"auto"}} className='p-2 btn btn-primary' onClick={() => navigate("/signup")}>Sign Up for free</button>
                     
          </div>

        </div>
     )
}

export default Hero;