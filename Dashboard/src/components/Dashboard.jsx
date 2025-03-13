import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Funds from './Funds';
import Watchlist from './Watchlist';
import Orders from './Orders';
import Holdings from './Holdings';
import Apps from './Apps';
import Summary from './Summary';
import Positions from './Positions';
import { Generalcontextprovider } from './Generalcontext';
import { Link,useNavigate } from 'react-router-dom';
import { useGeneral } from './Generalcontext';
function Dashboard() {
    const {drop,cancel} = useGeneral();
    const navigate = useNavigate();

    const click = () => {
        localStorage.removeItem("token");
        navigate("/login")
        alert("logged out")
    }

    return (
        <>
        <div className="dashboard-container">

         
         <Watchlist/>
       
      

        <div className="content">
        {
                        drop && (
                            <div style={{width:"50px",zIndex:"1000",height:"0px",background:"white",position:"relative",top:"-43px",left:"941px"}} onClick={cancel}>
                               <button onClick={click} style={{border:"none"}}>Logout</button>
                            </div>              
                          )
             }

        <Routes>
            <Route path='/' element={<Summary/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/funds' element={<Funds/>} />
            <Route path='/holdings' element={<Holdings/>} />
            <Route path='/apps' element={<Apps/>} />
            <Route  path='/positions' element={<Positions/>}/>
        </Routes>

        </div>
      

        </div>
     
        
        </>
      );
}

export default Dashboard;