import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
function Header() {
    return (
        <>
       
       <div className= 'sticky top-0 z-50  bg-gray-800 text-orange-400 px-6 min-w-full py-5 shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex  justify-between w-full items-center'>
        <div className='flex w-full justify-between items-center px-8 '>
            <div className=' flex justify-between items-center '>
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
       <li>
         <NavLink to="/project" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Projects
       </NavLink>
       </li>
       <li>
         <NavLink to="/contact" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Contact Us
       </NavLink>
       </li>
       </ul>
       </div>
       <div>
     <ul className=' font-semibold flex justify-center items-center gap-4'>
       <li className=''>
         <NavLink to="/login" className={({isActive})=>`${isActive?"text-orange-400 bg-white px-4 py-1 rounded-xl text-center shadow-2xl flex justify-center items-center":"text-white bg-orange-600 px-4 py-1 rounded-xl text-center shadow-2xl flex justify-center items-center"}`}>
Login
       </NavLink>
       </li>
       <li className=''>
         <NavLink to="/github" className={({isActive})=>`${isActive?"text-orange-400 bg-white px-4 py-1 rounded-xl text-center shadow-2xl flex justify-center items-center":"text-white bg-orange-600 px-4 py-1 rounded-xl text-center shadow-2xl flex justify-center items-center"}`}>
Github
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
