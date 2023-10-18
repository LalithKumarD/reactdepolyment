import { colors } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react'
import { AiOutlineDollar } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";

export default function box() {
  return (
    <div className='parts'>
      <div className='p1'>
        <div id='icone'><AiOutlineDollar size={100} color='green'/></div>
        <div className='state'><h6>Earning</h6>
        <h1>$198k</h1>
      <h6 id='black'><span id='green'><BsArrowUp/>37.8%</span>this month</h6>
      </div>
      </div>
      <div className='p2'>
      <div id='icone'><BiDetail size={100} color='violet'/></div>
      <div className='state'><h6 >Order</h6>
        <h1>$2.4k</h1>
      <h6 id='black'><span id='red'><BsArrowDown/>2%</span>this month</h6>


      </div>

      </div>
      <div className='p3'>
      <div id='icone'>< BiWalletAlt size={100} color='blue'/></div>
      <div className='state'><h6>Balance</h6>
      <h1>$2.4k</h1>
      <h6 id='black'><span id='red'><BsArrowDown/>2%</span>this month</h6>
      </div>


      </div>
      <div className='p4'>
      <div id='icone'><BsFillHandbagFill size={100} color='pink'/></div>
      <div className='state'><h6>Total Sales</h6>
      <h1>$89k</h1>
      <h6 id='black'><span id='green'><BsArrowUp/>11%</span>this week</h6>

      </div>


      </div>
     
    </div>
  )
}

        