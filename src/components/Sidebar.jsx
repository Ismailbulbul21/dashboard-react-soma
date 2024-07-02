import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {BsBarChartFill} from "react-icons/bs"
import {HiDocumentSearch} from "react-icons/hi"
import {AiFillMail} from "react-icons/ai"
import {BsCreditCard2FrontFill} from "react-icons/bs"
import {AiFillBell} from "react-icons/ai"

import {AiOutlineArrowUp ,AiOutlineArrowDown } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className=' h-screen bg-slate-900 w-20 sm:w-20'>
        
<div className=' h-20 items-center flex'>

<AiOutlineHome size={50} className=' fixed left-3 sm:left-6  text-gray-300'/>

</div>


<div className='fixed  left-3 sm:left-6  top-[100px] '>


<BsBarChartFill size={50} className=' bg-gray-600 text-gray-300 rounded-lg mb-4 p-2'/>

<AiFillMail size={50} className=' bg-gray-600 text-gray-300 rounded-lg mb-4 p-2'/>

<BsCreditCard2FrontFill size={50} className=' bg-gray-600 text-gray-300 rounded-lg mb-4 p-2'/>

<HiDocumentSearch size={50} className=' bg-gray-600 text-gray-300 rounded-lg mb-4 p-2'/>

<AiFillBell size={50} className=' bg-gray-600 text-gray-300 rounded-lg p-2'/>


</div>
<div className=' fixed bottom-4 left-3 sm:left-6'>
<a href='#top'>
<AiOutlineArrowUp  size={50} className=' bg-gray-600 text-gray-300 mb-4 rounded-lg p-2'/>
</a>

< a href='#down'>

<a href='#dhulka'>

<AiOutlineArrowDown size={50} className=' bg-gray-600 text-gray-300 mb-4 rounded-lg p-2'/>
</a>

</a>



</div>

    </div>
  )
}

export default Sidebar