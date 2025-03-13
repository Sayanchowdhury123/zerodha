import React, { useEffect, useState } from 'react';


import axios from 'axios';


function Positions() {
    const[allpositions,setallpositions]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/allpostions").then(res => {
            setallpositions(res.data);
    
        }) 
    })

    return (
        <>
            <h3 className='title'>Positions {allpositions.length}</h3>


            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Invesment</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>


                    {
                        allpositions.map((stock, index) => {
                            const curvalue = stock.price * stock.qty;
                            const isprofit = curvalue - stock.avg * stock.qty >= 0.0;
                            const profitclass = isprofit ? "profit" : "loss";
                            const daychange = stock.isLoss ? "loss" : "profit";

                            return (
                                <tr key={index} className=''>
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>

                                    <td className={profitclass}>{(curvalue - stock.avg * stock.qty).toFixed(2)}</td>
                                    <td className={profitclass}>{stock.net}</td>
                                    <td className={daychange}>{stock.day}</td>

                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    );
}

export default Positions;