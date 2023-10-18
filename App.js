import './App.css'
import Navbar from './components/Navbar';
import Title from './components/Title';
import  Frames from  './components/Frames';
import Bargraph from  './components/Bargraph';
import Pie from './components/Pie';
import Last from './components/Last'

// import React {useState} from 'react';






import { BsFillHexagonFill} from "react-icons/bs";
import { colors } from '@mui/material';


function App() {
  return (
    <div className='app'>
      
      
      <div className='sidebar'><h1 >< BsFillHexagonFill/> DashBoard</h1>
       <Navbar/> 
      </div>
      <div className='upper'>
      <Title/> 
      <div className='space'></div>
      <div className='box'>
         <Frames/> 
      </div>
      <div className='space'></div>
        <div className='overview'>
          <div className='over'>
       <Bargraph/> 
          </div>
          <div className='view'>
            <Pie/>
          </div>

        </div>
       <div>
        <Last/>
       </div>
     
      </div>

   
    </div>
    
  );
}

export default App;

