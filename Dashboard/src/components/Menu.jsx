import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useGeneral } from './Generalcontext';

function Menu() {
const[selectedmenu,setselectedmenu] = useState(0);
const[isprofiledown,setisprofiledown] = useState(false);
const[drop,setdrop] = useState(false);
const navigate = useNavigate();
const {handledrop} = useGeneral();
const handlemenuclick = (index) => {
    setselectedmenu(index)
}

const handleprofileclick = (index) => {
   setisprofiledown(!isprofiledown);

}


const menuclass = "menu";
const activemenuclass = "menu selected";



    return ( 
        <>
        <div className="menu-container">
            <img src="kite-logo.svg" alt="v" className='logo' style={{width:"60px"}} />

            <div className="menus">
                <ul>
                    <li>
                        <Link to={"/"} onClick={() => handlemenuclick(0)} style={{textDecoration:"none"}}>
                           <p className={selectedmenu === 0 ? activemenuclass : menuclass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                    <Link to={"/orders"} onClick={() => handlemenuclick(1)} style={{textDecoration:"none"}}>
                           <p className={selectedmenu === 1 ? activemenuclass : menuclass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                    <Link to={"/holdings"} onClick={() => handlemenuclick(2)} style={{textDecoration:"none"}}>
                           <p className={selectedmenu === 2 ? activemenuclass : menuclass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/funds"} onClick={() => handlemenuclick(3)} style={{textDecoration:"none"}}>
                        <p className={selectedmenu === 3 ? activemenuclass : menuclass}>Funds</p>
                        </Link>
                    </li>

                    <li>
                    <Link to={"/apps"} onClick={() => handlemenuclick(4)} style={{textDecoration:"none"}}>
                        <p className={selectedmenu === 4 ? activemenuclass : menuclass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile">
                    <div className="avatar">
                        ZU
                    </div>
                    <div className="username" onClick={handledrop}>
                        USERID
                    </div>
                   
                </div>
            </div>
        </div>

    
        
        </>
     );
}

export default Menu;