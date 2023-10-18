import React from 'react'

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsFillHexagonFill} from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBoxFill} from "react-icons/bs";



export const  Sidebardata =[
    {
        title:"Dashboard",
        icone:<BsFillHexagonFill/>,
        
    },
    {
        title:"Product",
        icone:< BsFillBoxFill/>,
        link:"/home"
    },
    {
        title:"Customer",
        icone:< BsFillPersonFill/>,
        link:"/home"
    },
    {
        title:"Income",
        icone:<BiWalletAlt/>,
        link:"/home"
    },
    {
        title:"Promote",
        icone:<BiSolidOffer/>,
        link:"/home"
    },
    {
        title:"Help",
        icone:<TfiHeadphoneAlt/>,
        
        
    },
]
