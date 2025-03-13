import React from 'react';

function Universe() {
    return (
        <div className="container " style={{ marginTop: "100px" }} >
            <div className="row  " style={{ marginBottom: "100px" }}>
                <h3 className='text-center  fs-5'>Want to know more about our technology stack? Check out the <a href="#" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</h3>
            </div>

            <div className="row text-center mb-5">
                <h1 className='mb-3 fs-2'>The Zerodha Universe</h1>
                <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row text-center " style={{padding:"30px 90px"}}>
                <div className="col-4 ">
                    <img src="media/zerodhaFundhouse.png" alt="m" style={{width:"189px", marginBottom:"20px"}} />
                    <p className='text-muted' style={{fontSize:"12px"}}  >Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/sensibullLogo.svg" alt="y" style={{width:"228px", marginBottom:"20px"}} />
                    <p className='text-muted ' style={{fontSize:"12px",padding:"0 97px"}}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4">
                    <img src="/media/tijori.svg" alt="b" style={{width:"145px", marginBottom:"20px"}}/>
                    <p className='text-muted' style={{fontSize:"12px"}}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>


            <div className="row text-center "  style={{padding:"30px 90px"}}>
                <div className="col-4 ">
                    <img src="media/streak-logo.png" alt="m" style={{width:"189px", marginBottom:"20px"}} />
                    <p className='text-muted' style={{fontSize:"12px"}}  >Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/smallcaseLogo.png" alt="y" style={{width:"228px", marginBottom:"20px"}} />
                    <p className='text-muted ' style={{fontSize:"12px",padding:"0 97px"}}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4">
                    <img src="/media/dittoLogo.png" alt="b" style={{width:"145px", marginBottom:"20px"}}/>
                    <p className='text-muted' style={{fontSize:"12px",padding:"0 97px"}}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>
 
           <div className="row text-center">
           <button style={{width:"15%", margin:"auto"}} className='p-2 btn btn-primary'>Sign Up for free</button>
           </div>
          

        </div>


    );
}

export default Universe;