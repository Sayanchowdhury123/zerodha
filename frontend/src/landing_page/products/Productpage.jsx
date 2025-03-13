import React from 'react';
import Hero from './Hero';
import Left from './Left';
import Right from './Right';
import Universe from './Universe';


function Productpage() {
    return (
        <>


            <Hero />
            <Left imageurl="media/kite.png" productdesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                productname="Kite" trydemo="Try Demo" learnmore="Learn More" googleplay="" appstore="" />

            <Right imageurl="media/console.png" productdesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." productname="Console" learnmore="Learn more " trydemo="" googleplay="" appstore="" />


           <div className="container" style={{marginLeft:"20px"}}>
            <div className="row">
                <div className="col-6" style={{width:"623px"}}>
                    <img src="media/coin.png" alt="n" style={{width:"573px"}} />
                </div>
                <div className="col-6" style={{width:"373px",marginLeft:"145px",marginTop:"50px"}}>
                    <h1>Coin</h1>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <a href="#" style={{marginTop:"20px",textDecoration:"none"}}>Coin   <i class="fa-solid fa-arrow-right" style={{marginLeft:"5px"}}></i> </a>

                    <div style={{marginTop:"20px"}}>
                        <img src="media/googlePlayBadge.svg" alt="k" />
                        <img src="media/appstore-badge.svg" alt="n" style={{marginLeft:"10px"}} />
                    </div>
                </div>
            </div>
           </div>

             
           <div className="container" style={{marginLeft:"271px",marginTop:"120px"}}>
            <div className="row">


            <div className="col-6" style={{width:"373px",marginTop:"50px"}}>
                    <h1>Kite Connect API</h1>
                    <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                    <a href="#" style={{marginTop:"20px",textDecoration:"none"}}>Kite Connect   <i class="fa-solid fa-arrow-right" style={{marginLeft:"5px"}}></i> </a>

                    
                </div>




                <div className="col-6" style={{width:"623px",marginLeft:"145px"}}>
                    <img src="media/kiteconnect.png" alt="n" style={{width:"573px"}} />
                </div>
            
            </div>
           </div>



           <div className="container" style={{marginLeft:"129px",marginTop:"120px"}}>
            <div className="row">
                <div className="col-6" style={{width:"623px"}}>
                    <img src="media/varsity.png" alt="n" style={{width:"444px"}} />
                </div>
                <div className="col-6" style={{width:"373px",marginLeft:"26px",marginTop:"50px"}}>
                    <h1>Varsity mobile</h1>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                   

                    <div style={{marginTop:"20px"}}>
                        <img src="media/googlePlayBadge.svg" alt="k" />
                        <img src="media/appstore-badge.svg" alt="n" style={{marginLeft:"10px"}} />
                    </div>
                </div>
            </div>
           </div>




            <Universe />

        </>
    );
}

export default Productpage;