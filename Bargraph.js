import React from 'react'
import Bar from './images/bar.png';
const Array=[
    {
        name:"jan",
        income:"20",
    },
    {
        name:"fab",
        income:"20",
    },
    {
        name:"march",
        icome:"20",
    },
    {
        name:"April",
        income:"20",
    },
    {
        name:"may",
        income:"20",
    },
    {
        name:"june",
        income:"20",
    },
    {
        name:"july",
        income:"20",
    },
    {
        name:"aug",
        income:"31",
    },
    {
        name:"sep",
        income:"20",
    },
    {
        name:"oct",
        income:"20",
    },
    {
        name:"nov",
        income:"20",
    },
    {
        name:"dec",
        income:"20",
    },


]

export default function overview() {
  return (
    <div className='text'>
    <div className='nav'>
        <h2>Overview</h2>
        <select>
            <option value="">quarter</option>
            <option value="">Month</option>
            <option value="">yearly</option>


        </select>
      
    </div>
    <h6>Monthly Earning</h6>
  <img src={Bar} alt="" />
    

    </div>
  )
}
