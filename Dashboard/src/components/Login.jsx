import { Height, Password } from '@mui/icons-material';
import { width } from '@mui/system';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Login() {
   const[formdata,setformdata] = useState({phone:"",Password:""})
   const navigate = useNavigate();

   const handlechange = (e) => {
      setformdata({
        ...formdata, [e.target.name] : e.target.value
      })
   }

   const handlesubmit = async (e) => {
      e.preventDefault();
      try {
     
         const response = await axios.post("http://localhost:8000/login", formdata,{
            headers: {
               "Content-Type": "application/json"
            }
         });
         localStorage.setItem("token",response.data.token);
         navigate("/*");
         alert("logged in")
         
      } catch (error) {
         console.log(error);
         alert("error loggin in")
         console.log(formdata);
      }
       
          

   }
    return ( 
        <>
        
        <div style={{Height:"100vh",display:'flex',justifyContent:"center",alignItems:"center"}}>

  <form onSubmit={handlesubmit}>
  <div style={{width:"276px",padding:"65px 45px",marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"5px"}} className='main'>
           <img src="/kite-logo.svg" alt="l" style={{width:"60px",marginBottom:"10px"}} />
           <p style={{fontSize:"25px",color:"#444444",fontWeight:""}}>Login to Kite</p>
           
           <input type="text" name='phone' placeholder='Phone or User ID' style={{display:"block",width:"245px",padding:"10px 15px",outline:"none", border:"0.8px solid #d1d1d1",marginTop:"10px"}} className='i1' onChange={handlechange}/>
           <input type="password" name='password' placeholder='Password' style={{display:"block",width:"245px",padding:"10px 15px",outline:"none", border:"0.8px solid #d1d1d1",marginTop:"25px"}} className='i1' onChange={handlechange}/>

           <button style={{display:"block",marginTop:"25px",marginBottom:"15px",background:"#ff5722",color:"white",width:"275px",padding:"10px 20px",border:"none",borderRadius:"5px"}} type='submit'>Login</button>
           <a href="#" style={{textDecoration:"none",color:"gray",fontSize:"12px"}}>Forget User ID or Password?</a>
           </div>
        

  </form>
          

        </div>
        
        
        </>
     );
}

export default Login;