import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Signup() {
const[formdata,setformdata] = useState({phone:"",password:""})
const navigate = useNavigate();

const handlechange = (e) => {
  setformdata({
    ...formdata, [e.target.name] : e.target.value
  })
}
const handlesubmit = async (e) => {
  e.preventDefault();
  try {
     const response  = await axios.post("http://localhost:8000/signup", formdata)
   
     console.log("signup successfull",response.data);
    console.log(formdata);
    window.location.href = "http://localhost:5173/login";
    
  } catch (error) {
    console.log(error);
  }
} 




    return ( 
        <>
        
        <div className="container">
            <div className="row text-center " style={{marginTop:"100px"}}>
                <h1 style={{fontSize:"44px",color:"#424242"}}>Open a free demat and trading account online</h1>
                <p style={{fontSize:"20px", color:"#666666",marginTop:"10px"}}>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
            </div>


            <div className="row " style={{marginTop:"60px",marginLeft:"100px"}}>
                <div className="col-6" style={{width:"528px"}}>
                 <img src="media/account_open.svg" alt="b" style={{width:"528px"}} />
                </div>

                <div className="col-6" style={{width:"528px",marginLeft:"49px"}}>


                    <form onSubmit={handlesubmit}>
                    <h2 style={{fontSize:"32px",color:"#424242"}}>Signup now</h2>
                      <p style={{color:"#9B9B9B", fontSize:"16px", marginTop:"10px"}}>Or track your existing application</p>

                      <span style={{padding:"16px 10px 17px",width:"70px",border:"0.8px solid #d1d1d1"}} >
                        <img src="media/india-flag.svg" alt="" />
                        <span style={{marginLeft:"7px", fontWeight:"bold",fontSize:"20px"}}>+91</span>
                      </span>

                      <input type="text" name='phone' className='i1' style={{border:"none",outline:"none",width:"302px",padding:"15px",border:"0.8px solid #d1d1d1"}} placeholder='Enter Your Phone Number' onChange={handlechange}  required/>
                     

                      <input type="password" className='i1' name='password' style={{display:"block",marginTop:"10px",outline:"none",width:"397px",padding:"15px",border:"0.8px solid #d1d1d1"}} placeholder='Enter Password' onChange={handlechange} required/>
                      <button className='mt-4' style={{border:"none",background:"#387ed1",fontSize:"19px",fontWeight:"bold",color:"white",padding:"10px 30px",borderRadius:"5px"}} type='submit'>Get OTP</button>
                     <p style={{fontSize:"12px",color:"gray"}} className='mt-4'>By proceeding, you agree to the Zerodha <span style={{color:"#387ed1"}}>terms</span> & <span style={{color:"#387ed1"}}>privacy policy</span></p>
                    </form>
                     
                </div>
            </div>
        </div>
        
        
        </>
     );
}

export default Signup;