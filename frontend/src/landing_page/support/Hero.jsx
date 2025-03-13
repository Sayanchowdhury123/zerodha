import React from 'react';

function Hero() {
    return (
        <div className="container" style={{ margin: "0px 0px" }}>
            <div className="row " style={{ width: "1513px", backgroundColor: "#387ed1", height: "360px" }}>

            

                <div className="col-6 s1 " style={{position:"relative",left:"163px"}} >
                    <div style={{ marginLeft: "20px" }}>
                        <p style={{ fontSize: "20px", marginBottom: "25px", fontWeight: "bolder", color: "white", margin: "40px 0px" }}>Support Portal</p>

                        <p style={{ lineHeight: "1.5", color: "white", marginBottom: "30px", marginTop: "10px", fontSize: "20px" }}>Search for an answer or browse help topics to create a ticket</p>


                        <input type="text" placeholder='
                  Eg: how do i activate F&O, why is my order getting rejected ...' style={{ width: '613px', padding: "10px 10px 10px 25px", marginBottom: "15px" }} />
                        <span><img src="media/search_24dp_B7B7B7_FILL0_wght400_GRAD0_opsz24.png" alt="m" style={{ width: "25px", position: "relative", right: "35px" }} /></span>

                    </div>

                    <br />
                    <a href="#">Track account opening</a>
                    <a href="#">Track segment activation</a>
                    <a href="#">Intraday margins</a>


                    <br />
                    <a href="#" style={{ position: "relative", top: "10px" }}>Kite user manual</a>
                </div>
                <div className="col-6 s2 " style={{ marginTop: "44px",position:"relative",left:"127px" }} >
                    <a href="#" style={{ fontSize: "16px", color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "5px", position: "relative", left: "308px" }}>Train tickets</a>

                    <div className="row">
                        <p style={{ fontSize: "25px", marginBottom: "25px", fontWeight: "bolder", color: "white", marginTop: "70px " }}>Featured</p>
                    </div>

                    <div className="row">
                        <ol style={{ color: "white", marginLeft: "10px" }}>
                            <li style={{ fontSize: "16px", marginBottom: "20px" }}><a href="#" >Latest Intraday leverages and Square-off timings</a></li>
                            <li style={{ fontSize: "16px", marginBottom: "20px" }}><a href="#" >Surveillance measure on scrips - February 2025</a></li>
                        </ol>
                    </div>
                </div>


            </div>



          

        </div>

    );
}

export default Hero;