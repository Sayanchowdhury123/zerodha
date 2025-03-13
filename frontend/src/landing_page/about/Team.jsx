import React from 'react';

function Team() {
    return ( 
        <div className='container'>
        <div className='row  mt-5  '>
            <h1 className=' text-center '>People</h1>
        </div>



        <div className='row p-5  mb-3  text-muted ' style={{lineHeight:"1.8"}}>
            <div className="row p-5">
                  <div className="col-6  text-center">
                    <img src="media/nithinKamath.jpg" alt="j" style={{borderRadius:"50%"}} width={"55%"}/>
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <h6 className='mt-3'>Founder, CEO</h6>
                  </div>
                <div className="col-6 " style={{fontSize:"18px"}}>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a>/ <a href="#"style={{textDecoration:"none"}} >TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>

                </div>
            </div>
        </div>
    </div>
     );
}

export default Team;