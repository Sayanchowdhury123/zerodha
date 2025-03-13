import React from 'react';

function Summary() {
    return (
        <>


            <div className="username">
                <h6>Hi, User!</h6>
                <hr className='divider' />
            </div>


            <div className="section">
                <span>
                    <p>Equity</p>
                </span>
                <div className="data">
                    <div className="first">
                        <h3>3.74K</h3>
                        <p>Margin avaliable</p>
                    </div>

                    <hr />

                    <div className="second">
                        <p>
                            Margin used <span>0</span>{""}
                        </p>

                        <p>
                            opening balance <span>3.74K</span>{""}
                        </p>

                    </div>

                    <hr className="divider" />
                </div>

                <div className="section">
                    <span>
                        <p>Holding</p>
                    </span>


                    <div className="data">
                        <div className="first">
                            <h3 className="profit">
                                1.55K <small>+5.20%</small>{""}
                            </h3>
                            <p>P&L</p>
                        </div>
                        <hr />

                        <div className="second">
                            <p>Current value <span>31.43K</span>{""}</p>
                            <p>Invesment <span>29.8K</span>{""}</p>
                        </div>
                    </div>
                    <hr className="divider" />
                </div>



            </div>
        </>

    );
}

export default Summary;