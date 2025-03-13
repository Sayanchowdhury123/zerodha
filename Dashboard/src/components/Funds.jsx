import React from 'react';
import { Link } from 'react-router-dom';

function Funds() {
    return ( 
        <>
        <div className="funds">
            <p style={{marginTop:"31px"}}>instant, zero-cost fund transfers with UPI</p>
            <Link className='btn btn-green'>Add funds</Link>
            <Link className='btn btn-blue'>Withdraw</Link>
        </div>
        

        <div className="row">
            <div className="col">
                <span>
                    <p>Equity</p>
                </span>


                <div className="table">
                    <div className="data">
                        <p>Available margin</p>
                        <div className="imp colored">4,043.10</div>
                    </div>


                    <div className="data">
                        <p>Used margin</p>
                        <div className="imp" style={{position:"relative",left:"130px"}}>3,757.30</div>
                    </div>


                    <div className="data">
                        <p>Avaliable cash</p>
                        <p className='imp'> 4,043.10</p>
                    </div>


                    <hr />


                    <div className="data">
                        <p>Opening balance</p>
                        <p className='i1'>4,043.10</p>
                    </div>


                    <div className="data">
                        <p>paying</p>
                        <p  className='i1'>4064.00</p>
                    </div>

                    <div className="data">
                        <p>span</p>
                        <p  className='i1'>0.00</p>
                    </div>

                    <div className="data">
                        <p>Delivery margin</p>
                        <p  className='i1'>0.00</p>
                    </div>

                    <div className="data">
                        <p>Exposure</p>
                        <p  className='i1'>0.00</p>
                    </div>

                    <div className="data">
                      <p> Options premium</p> 
                      <p  className='i1'>0.00</p>
                    </div>

                    <div className="data">
                        <p>Collateral (Liquid funds)</p>
                        <p  className='i1'>0.00</p>
                    </div>

                    <div className="data">
                        <p>collatreal (Equity)</p>
                        <p  className='i1'>0.00</p>
                    </div>

                    <div className="data">
                        <p>Total collateral</p>
                        <p  className='i1'>0.00</p>
                    </div>
                </div>
            </div>

     <div className="col">
        <div className="commodity">
            <p >you don't have a commodity</p>
            <Link  className='btn btn-blue'>Open account</Link>
        </div>
     </div>


        </div>
        
        </>
     );
}

export default Funds;