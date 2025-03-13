import React from 'react';
import "./buyActionWindow.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useGeneral } from './Generalcontext';
import axios from 'axios';

function Buyactionwindow({uid}) {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const {closebuywindow} = useGeneral();


    const handleBuyClick = async () => {
    await axios.post("http://localhost:8000/neworder", {
        name: uid,
        qty: stockQuantity,
        price:stockPrice,
        mode:"BUY",

    })
        closebuywindow();
    }

    const handleCancelClick = () => {
        closebuywindow();
    }

    return (
        
            <div className="container" id="buy-window" draggable="true">
                <div className="regular-order">
                    <div className="inputs">
                        <fieldset>
                            <legend>Qty.</legend>
                            <input
                                type="number"
                                name="qty"
                                id="qty"
                                onChange={(e) => setStockQuantity(e.target.value)}
                                value={stockQuantity}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Price</legend>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                step="0.05"
                                onChange={(e) => setStockPrice(e.target.value)}
                                value={stockPrice}
                            />
                        </fieldset>
                    </div>
                </div>

                <div className="buttons">
                    <span>Margin required ₹140.65</span>
                    <div>
                        <Link className="btn btn-blue" onClick={handleBuyClick}>
                            Buy
                        </Link>
                        <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>




        
    );
}

export default Buyactionwindow;