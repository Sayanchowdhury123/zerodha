import React from 'react';

function Left({imageurl,productname,productdesc,trydemo,googleplay,appstore,learnmore}) {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={imageurl} alt="r"  />
                </div>
                <div className="col-6  mt-5" style={{padding:"0px 142px"}}>
                    <h1>{productname}</h1>
                    <p>{productdesc}</p>
                    
                        {
                            trydemo || learnmore ? (
                                <div>

                                <a href={trydemo} style={{marginRight:"25px",textDecoration:"none"}}>{trydemo} <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnmore} style={{textDecoration:"none"}}>{learnmore} {learnmore ?  <i class="fa-solid fa-arrow-right"></i> : ""} </a>
                    </div>
                            ) : ""
                        }
                   
                    
                   
                   <div className='mt-3'>
                   <a href={googleplay}>
                    <img src="media/googlePlayBadge.svg" alt="d" style={{marginRight:"25px"}}/>
                    </a>
                    <a href={appstore}>
                    <img src="media/appstore-badge.svg" alt="h" />
                    </a>
                   </div>
                   
                    
                </div>
            </div>
        </div>
     );
}

export default Left;