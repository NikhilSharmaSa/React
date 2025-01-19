import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Header() {
    return (
       <ul>

        <li><NavLink to="/" className={({isActive})=>`${isActive}`}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/github">Github</NavLink></li>

       </ul> 
    )
}

export default Header
