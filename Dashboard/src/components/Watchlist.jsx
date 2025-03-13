import React, { useState } from 'react';
import {Tooltip, Grow} from "@mui/material";
import { watchlist } from '../data/data';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import { useGeneral } from './Generalcontext';
import { Doughnutchart } from './Doughnutchart';



function Watchlist() {


    const labels = watchlist.map((subarray) => subarray["name"])

     const data = {
      labels,
        datasets: [
          {
            label: 'price',
            data: watchlist.map((stock) => stock.price),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };


    return ( 
        <div className="watchlist-container">
            <div className="search-container">
                <input type="text" name='search' id='search' placeholder='search eg:infy, bse, nifty fut weekly, gold mcx' className='search' />
                <span className='counts'>{watchlist.length}</span>
            </div>
            <ul className="list">
                {
                    watchlist.map((stock,index) => {
                       return(
                          <Watchlistitem stock={stock} key={index}/>
                       )
                    })
                }
            </ul>

            <Doughnutchart data={data} />
        </div>
     );
}

export default Watchlist;


const Watchlistitem = ({stock}) => {

    const[showlistactions,setshowlistactions] = useState(false);
   const handlemouseenter = (e) => {
      setshowlistactions(true)
   }

   const handlwmouseleave = (e) => {
    setshowlistactions(false);
   }

   return(
    <li onMouseEnter={handlemouseenter} onMouseLeave={handlwmouseleave}>
          <div className="item">
            <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

            <div className="itemInfo">
                <span className="percent">{stock.percent}</span>
                {
                    stock.isDown ? (
                        <KeyboardArrowDown className='down' />
                    ) : (
                        <KeyboardArrowUp className='up' />
                    )
                }

                <span className='price'>{stock.price}</span>
            </div>

          </div>
          {showlistactions && <Watchlistactions uid={stock.name} qty={stock.qty} />}
    </li>
   )

}



const Watchlistactions = ({uid,qty}) => {
   const {opensellwindow,openbuywindow} = useGeneral();

const handleBuyClick = () => {
    openbuywindow(uid,qty)
}

const handle = () => {
 opensellwindow(uid)
}

    return(
        <>
         <span className='actions'>
            <span>
                <Tooltip title="Buy (B)" placement='top' onClick={handleBuyClick} >
                    <button className='buy'>Buy</button>
                </Tooltip>


                <Tooltip title="Sell (S)" placement='top'  >
                    <button className='sell' onClick={handle}>Sell</button>
                </Tooltip>


                
                <Tooltip title="Analytics (A)" placement='top' style={{position:"relative",top:"7px"}} >
                    <button className='action'>
                    <BarChartOutlined className='icon'/>
                    </button>
                   
                </Tooltip>

                <Tooltip title="More" placement='top' style={{position:"relative",top:"7px"}} >
                    <button className='action'>
                        <MoreHoriz className='icon'/>
                    </button>
                </Tooltip>
                
            </span>
        </span>


       
        </>
       
    )
}