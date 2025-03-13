import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Verticalchart } from './Verticalchart';

function Holdings() {

const[allholdings,setallholdings] = useState([]);

useEffect(() => {
    axios.get("http://localhost:8000/allholdings").then(res => {
        setallholdings(res.data);

    }) 
})

const labels = allholdings.map((subarray) => subarray["name"])

const data = {
    labels,
    datasets:[
    {
        label:"stock price",
        data: allholdings.map((stock) => stock.price),
        backgroundColor : "rgba(255,99,132,0.5)"
    }
    ]
}

    return (
        <>

            <h3 className="title">Holding {allholdings.length}</h3>

            <div className="order-table">
                <table >
                    <thead>
                    <tr>
                        <th>Invesment</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>
                    </thead>
                   

                    {
                        allholdings.map((stock, index) => {
                            const curvalue = stock.price * stock.qty;
                            const isprofit = curvalue - stock.avg * stock.qty >= 0.0;
                            const profitclass = isprofit ? "profit" : "loss";
                            const daychange = stock.isLoss ? "loss" : "profit";

                            return (
                                <tbody>
                                        <tr key={index} className=''>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td>{curvalue.toFixed(2)}</td>
                                    <td className={profitclass}>{(curvalue - stock.avg * stock.qty).toFixed(2)}</td>
                                    <td className={profitclass}>{stock.net}</td>
                                    <td className={daychange}>{stock.day}</td>

                                </tr>
                                </tbody>
                               
                            )
                        })
                    }


                </table>
            </div>



            <div className="row">
                <div className="col">
                    <h5>29.875.<span>55</span>{""}</h5>
                    <p>Total invesment</p>
                </div>

                <div className="col">
                    <h5>31,428.<span>95</span>{""}</h5>
                    <p>current value</p>
                </div>

                <div className="col">
                    <h5>
                        1,553.40 (+5.20%)
                    </h5>
                    <p>P&L</p>
                </div>
            </div>




            <Verticalchart data={data}/>


        </>
    );
}

export default Holdings;