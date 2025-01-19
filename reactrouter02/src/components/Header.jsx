import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
function Header() {
    return (
        <>
       <div className='bg-gray-800 text-orange-400 px-6 py-5 shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex space-x-52 w-full items-center'>
        <div className='flex justify-between items-center '>
            <div className=' flex justify-center items-center '>
                <img src={logo} alt="" />
            </div>
            <div>
            <ul className='flex justify-center items-center gap-6 text-xl font-semibold '>
            <li className=''>
         <NavLink to="/" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Home
       </NavLink>
       </li>
       <li>
         <NavLink to="/about" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
About
       </NavLink>
       </li>
            </ul>
            </div>
          
        </div>
     
       </div>
       </>
    )
}

export default Header
