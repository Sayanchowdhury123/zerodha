import React from 'react';
import Menu from './Menu';

import "../App.css"
function Topbar() {
    return ( 
        
        
     <div className="topbar-container">
        <div className="indices-container">
            <div className="nifty">
                <p className="index">NIFTY 50</p>
                <p className="index-points">{100.2}</p>
                <p className="percent"></p>
            </div>

            <div className="sensex">
                <div className="index">Sensex</div>
                <div className="index-points">{100.2}</div>
                <p className="percent"></p>

            </div>
        </div>

        <Menu/>
     </div>

        
     );
}

export default Topbar;