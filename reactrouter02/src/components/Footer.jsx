import React from 'react'
import logo from '../assets/react.svg'
import { Link,NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className='  bg-gray-800 text-orange-400 px-6 min-w-full py-5 shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex md:flex-row flex-col  justify-between w-full items-center'>
<div className='h-full'>
 <img src={logo} alt="" />
</div>
<div className='flex flex-col gap-5'>
    <h2 className='text-white text-2xl font-semibold'>Quick Link</h2>
<ul className='flex flex-col  justify-center items-start gap-6 text-xl font-semibold '>
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
<div className='flex flex-col gap-5'>
    <h2 className='text-white text-2xl font-semibold'>Policies & Conditions</h2>

<ul className='flex flex-col  justify-center items-start gap-6 text-xl font-semibold '>
         
      
       <li>
         <NavLink to="/privacy" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Privacy Policy
       </NavLink>
       </li>
       <li>
         <NavLink to="/return" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Return Policy
       </NavLink>
       </li>
       <li>
         <NavLink to="/terms" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Terms
       </NavLink>
       </li>
       <li>
         <NavLink to="/conditions" className={({isActive})=>`${isActive?"text-orange-400":"text-white"}`}>
Conditions
       </NavLink>
       </li>
       </ul>
</div>
<div>


</div>
        </div>
    )
}

export default Footer
