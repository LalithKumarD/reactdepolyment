import React from 'react'
import P1 from './images/p1.png'
import P2 from './images/p2.png'

export default function Last() {
  return (
    <div className='main'>
        <div className='subn'>
            <h5>Product sell</h5>
            <div className='right'>
            <input type="search"  placeholder='search'/ >
                <select name="" id="select">
                    <option value="">last 30days</option>
                    <option value="">last 3month</option>

                    
                </select>
                </div>
                
                </div>
                <div className='second'>
                    <h6>Product Name</h6>
                    <div className='subsecond'>
                        <h6>Stock</h6>
                        <h6>Price</h6>
                        <h6>Total Sales</h6>

                    </div>
        </div>
        <div className='last'>
            <div className='pa1'>
                <div>
                <img src={P1} alt=""  width={80}height={50}/>
                </div>
                <div>
                <h5>Abstract 3D</h5>
                <h6>Lorem ipsum dolor amet,consectetur adipiscing elit</h6>
                </div>
                </div>
                <div className='subpa1'>
                    <h6>32stocks</h6>
                    <h6>$46.99</h6>
                    <h6>20</h6>
                    </div>
        </div>
        <div className='last2'>
            <div className='pa2'>
                <div>
                <img src={P2} alt=""  width={80}height={50}/>
                </div>
                <div>
                <h5>Abstract 3D</h5>
                <h6>Lorem ipsum dolor amet,consectetur adipiscing elit</h6>
                </div>
                </div>
                <div className='subpa2'>
                    <h6>32stocks</h6>
                    <h6>$46.99</h6>
                    <h6>20</h6>
                    </div>
        </div>
        
      
    </div>
  )
}
