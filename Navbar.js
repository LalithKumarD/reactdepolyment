import React from 'react';
import '../App.css'
import {Sidebardata} from  './Sidebardata'
function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
        {Sidebardata.map((val, key)=>{
           return (
            <li key={key}
            className='rows'
            onClick={()=>{
                window.location.pathname = val.link;
            }}
            >
            

            <div id='icone'>{val.icone}</div>
            <div id='title'>{val.title}</div>
           

            </li>
            )
           })}
        </ul>
    </div>
  );
}

export default Navbar;
