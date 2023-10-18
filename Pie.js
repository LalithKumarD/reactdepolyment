import React from 'react'
// import Pie from './images/pie.png'
import Piechart from './images/pie.png';



export default function Pie() {
  return (
    <div className='pie'>
      <h1>Customer</h1>
      <h6>customer buy that product</h6>
       <img src={Piechart} alt="" width={200} /> 
    </div>
  )
}
