import React from 'react';
import {useNavigate} from "react-router-dom";

function Openaccount() {
      const navigate = useNavigate();
    return ( 

        <div className='container' style={{marginTop:"150px"}}>
              <div className='row'>
                         <div className='col-12 text-center'>
                               <h1 className='mb-4 fs-2'>Open a Zerodha account</h1>
                               <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                               <button style={{width:"20%", margin:"auto"}} className='p-2 btn btn-primary' onClick={() => navigate("/signup")}>Sign Up for free</button>
                         </div>
              </div>
        </div>
    

     );
}

export default Openaccount;