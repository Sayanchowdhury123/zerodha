import React from 'react';

function Awards() {
    return (

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='i' />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ milion Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul style={{listStyle:"none"}}>
                                <li >
                                    <p>future of investing</p>
                                </li>
                                <li>
                                    <p>Stocks and ipo</p>
                                </li>
                                <li>
                                    <p>direct mutual fund</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul style={{listStyle:"none"}}>
                                <li>
                                    <p>currency directives</p>
                                </li>
                                <li>
                                    <p>future of investing</p>
                                </li>
                                <li>
                                    <p>future of investing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width:"90%"}} alt='i'/>

                </div>
            </div>
        </div>
    );
}

export default Awards;