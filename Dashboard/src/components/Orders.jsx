import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import axios from 'axios';

function Orders() {
const[allorders,setallorders] = useState([]);

   useEffect(() => {
        axios.get("http://localhost:8000/allorders").then(res => {
            setallorders(res.data);
    
        }) 
    })

    return (
<>



{
    allorders ? (



        <div className="order-table">
               <h3 className="title">Orders {allorders.length}</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Mode</th>
                   
                </tr>
                </thead>
               

                {
                    allorders.map((stock, index) => {
                      

                        return (
                            <tbody>
                                <tr key={index} className=''>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.price}</td>
                                <td>{stock.mode}</td>
                                
                               

                            </tr>
                            </tbody>
                          
                        )
                    })
                }


            </table>
        </div>


    ): (
        <div className="orders">
        <div className="no-orders">
            <p>you have'nt placed any orders</p>
            <Link to={"/"} className="btn">Get started</Link>
        </div>
         </div>
    )
}


</>
      
      );
}

export default Orders;