import { TextInput } from '@tremor/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div id='top' className=' relative w-full justify-between items-center sm:flex  p-2'>
    <h1 className=' font-bold uppercase text-white'>Dashboard</h1>
<div className=' py-2'>

<TextInput icon={BsSearch} placeholder='search..'/>


</div>


    </div>
  )
}

export default Navbar