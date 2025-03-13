import React, { useState } from 'react';

function Hero() {
    const [table, settable] = useState("table1");


    return (

        <div className="container" style={{ marginTop: "100px" }}>
            <div className="row text-center">
                <h1 className='mb-2' style={{ fontSize: "50px" }}>Charges</h1>
                <h4 className='text-muted' style={{ fontSize: "25px" }}>List of all charges and taxes</h4>
            </div>

            <div className="row text-center" style={{ marginTop: "200px", padding: "0px 123px" }} >
                <div className="col-4">
                    <img src="media\pricing0.svg" alt="a" style={{ width: "250px", marginBottom: "20px" }} />
                    <h3 className='mb-3'>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img src="media/intradayTrades.svg" alt="b" style={{ width: "250px", marginBottom: "20px" }} />
                    <h3 className='mb-3'>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img src="media\pricing0.svg" alt="b" style={{ width: "250px", marginBottom: "20px" }} />
                    <h3 className='mb-3'>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>


            <div className="row mt-5 border-bottom  " style={{ width: "1100px", marginLeft: "100px" }}>
                <div className="col " >
                    <button style={{ border: "none", outline: "none", background: "white", width: " 130px", padding: "6px 15px" }} onClick={() => settable("table1")}  >
                        <h4 style={{ fontSize: "30px", color: "#387ED1" }}>Equity</h4>
                    </button>
                    <button style={{ border: "none", outline: "none", background: "white", width: " 140px", padding: "6px 15px" }} onClick={() => settable("table2")}>
                        <h4 style={{ fontSize: "30px", color: "#387ED1" }}>    Currency</h4>

                    </button>
                    <button style={{ border: "none", outline: "none", background: "white", width: " 130px", padding: "6px 15px" }} onClick={() => settable("table3")}>
                        <h4 style={{ fontSize: "30px", color: "#387ED1" }}>Commodity</h4>
                    </button>
                </div>
            </div>

            <div className="row mt-5 " style={{ width: "1100px", marginLeft: "100px" }}>
                {
                    table === "table1" && (
                        <table className='t1'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Equity delivery</th>
                                    <th>Equity intraday</th>
                                    <th>F&O - Futures</th>
                                    <th>F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>


                                <tr>
                                    <td>STT/CTT</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.02% on the sell side</td>
                                    <td>0.125% of the intrinsic value on options that are bought and exercised</td>
                                </tr>


                                <tr>
                                    <td>Transaction charges</td>
                                    <td>NSE: 0.00297%<br></br>
                                        BSE: 0.00375%</td>

                                    <td>NSE: 0.00297% <br />
                                        BSE: 0.00375%</td>

                                    <td>NSE: 0.00173% <br />
                                        BSE: 0</td>

                                    <td>
                                        NSE: 0.03503% (on premium) <br />
                                        BSE: 0.0325% (on premium)
                                    </td>
                                </tr>


                                <tr>
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>


                                <tr>
                                    <td>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>


                                <tr>
                                    <td>Stamp charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }

                {
                    table === "table2" && (
                        <table className='t2'>
                            <thead>
                                <tr>
                                    <th style={{ width: "156px", padding: "12px 15px" }}></th>
                                    <th style={{ width: "426px", padding: "12px 15px" }}>Currency futures</th>
                                    <th style={{ width: "426px", padding: "12px 15px" }}>Currency options</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>Brokerage</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>	0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>₹ 20/executed order</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>STT/CTT</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>No STT</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>No STT</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>Transaction charges</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>NSE: 0.00297%<br></br>
                                        BSE: 0.00375%</td>

                                    <td style={{ width: "426px", padding: "12px 15px" }}>NSE: 0.00297% <br />
                                        BSE: 0.00375%</td>


                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>GST</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>18% on (brokerage + SEBI charges + transaction charges)</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>SEBI charges</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>₹10 / crore</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>₹10 / crore</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>Stamp charges</td>

                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    )



                }



                {
                    table === "table3" && (
                        <table className='t2'>

                            <thead>
                                <tr>
                                    <th style={{ width: "156px", padding: "12px 15px" }}></th>
                                    <th style={{ width: "426px", padding: "12px 15px" }}>Commodity futures</th>
                                    <th style={{ width: "426px", padding: "12px 15px" }}>Commodity options</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>Brokerage</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>	0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>₹ 20/executed order</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>STT/CTT</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.01% on sell side (Non-Agri)</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.05% on sell side</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>Transaction charges</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}> charges	MCX: 0.0021%
                                        <br />  NSE: 0.0001%</td>

                                    <td style={{ width: "426px", padding: "12px 15px" }}>NSE: 0.0047% <br />
                                        BSE: 0.00675%</td>


                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>GST</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>18% on (brokerage + SEBI charges + transaction charges)</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>SEBI charges</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.003% or ₹300 / crore on buy side</td>

                                </tr>


                                <tr>
                                    <td style={{ width: "156px", padding: "12px 15px" }}>Stamp charges</td>

                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.002% or ₹200 / crore on buy side</td>
                                    <td style={{ width: "426px", padding: "12px 15px" }}>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>

                        </table>
                    )
                }

            </div>


            <div className="row mt-5 mb-3 text-center">
                <p style={{ fontSize: "20px" }}><a href="#" style={{ textDecoration: "none" }}>Calculate your costs upfront </a>using our brokerage calculator</p>
            </div>

            <div className="row" style={{ marginLeft: "88px" }}>
                <h2 className='mt-3 mb-5' style={{ fontSize: "24px" }}>Charges explained</h2>
            </div>

            <div className="row r1" style={{padding:"20px 103px"}}   >
                <div className="col-6">

                    <h5>Securities/Commodities transaction tax</h5>
                    <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>



                    <h5>Transaction/Turnover Charges</h5>
                    <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                    <h5>Stamp charges</h5>
                    <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h5>Call & trade</h5>
                    <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                    <h5>NRI brokerage charges</h5>
                    <ul>
                        <li>₹100 per order for futures and options.</li>
                        <li>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    </ul>


                    <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                    <ul>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>


                    <h5>Margin Trading Facility (MTF)</h5>
                    <ul>
                        <li>₹100 per order for futures and options.</li>
                        <li>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    </ul>
                </div>

                <div className="col-6">
                    <h5>GST</h5>
                    <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>


                    <h5>DP (Depository participant) charges</h5>
                    <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p></p>
                    <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                  

                  <h5>AMC (Account maintenance charges)</h5>
                  <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                  <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click her</p>

                   
                 <h5>Pledging charges</h5>
                 <p>₹30 + GST per pledge request per ISIN.</p>


                 <h5>
                 Corporate action order charges
                 </h5>
                 <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console</p>

                 <h5>
                 Off-market transfer charges
                 </h5>
                 <p>₹25 per transaction.</p>


                 <h5>Physical CMR request</h5>
                 <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests</p>

                 <h5>Payment gateway charges</h5>
                 <p>₹9 + GST (Not levied on transfers done via UPI)</p>

                 <h5>
                 Corporate action order charges
                 </h5>
                 <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console</p>



                 <h5>
                 Corporate action order charges
                 </h5>
                 <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console</p>

                 
                </div>
            </div>


            <div className="row mt-4 r2 mb-4"  style={{padding:"20px 103px"}}     >
                <h5>Disclaimer</h5>
                <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>

            
            <div className="row" style={{ marginLeft: "88px" }}>
                <h2 className='mt-3 mb-5' style={{ fontSize: "24px" }}>Charges for account opening</h2>
            </div>

            <div className="row r3 " style={{marginLeft:" 100px"}}  >
                <table>
                    <thead>
                        <tr>
                            <th style={{width:"881px",padding:"12px 15px"}}>Type of account</th>
                            <th style={{width:"187px",padding:"12px 15px"}}>Charges</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td style={{width:"881px",padding:"12px 15px"}}>Online account</td>
                            <td style={{width:"187px",padding:"12px 15px"}} ><button>FREE</button></td>
                        </tr>


                        <tr>
                            <td style={{width:"881px",padding:"12px 15px"}}>Offline account</td>
                            <td style={{width:"187px",padding:"12px 15px"}}><button>FREE</button></td>
                        </tr>

                        <tr>
                            <td style={{width:"881px",padding:"12px 15px"}}>NRI account (offline only)</td>
                            <td style={{width:"187px",padding:"12px 15px"}}>₹ 500</td>
                        </tr>

                        <tr>
                            <td style={{width:"881px",padding:"12px 15px"}}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td style={{width:"187px",padding:"12px 15px"}}>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row" style={{ marginLeft: "88px",marginTop:"80px" }}>
                <h2 className='mt-3 mb-5' style={{ fontSize: "24px" }}>Charges for optional value added services</h2>
            </div>


            <div className="row r4" style={{marginLeft:" 100px"}}>
                <table style={{width:"1100px"}}>
                    <thead>
                        <tr>
                            <th style={{width:"221px",padding:"12px 15px"}}>Service</th>
                            <th style={{width:"221px",padding:"12px 15px"}}>Billing Frequency</th>
                            <th style={{width:"537px",padding:"12px 15px"}}>Charges</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={{width:"221px",padding:"12px 15px"}}>Tickertape</td>
                            <td style={{width:"221px",padding:"12px 15px"}}>Monthly / Annual</td>
                            <td style={{width:"537px",padding:"12px 15px"}}>Free: 0 | Pro: 249/2399</td>
                        </tr>


                        <tr>
                            <td style={{width:"221px",padding:"12px 15px"}}>Smallcase</td>
                            <td style={{width:"221px",padding:"12px 15px"}}>Per transaction</td>
                            <td style={{width:"537px",padding:"12px 15px"}}>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>

                        <tr>
                            <td style={{width:"221px",padding:"12px 15px"}}>Kite Connect	</td>
                            <td style={{width:"221px",padding:"12px 15px"}}>Monthly</td>
                            <td style={{width:"537px",padding:"12px 15px"}}>Connect: 2000 | Historical: 2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           

        </div>
    );
}

export default Hero;

