import React from 'react'
import { NavLink,Link } from 'react-router-dom'
function Header() {
    return (
<ul>
    <li>
        <NavLink to="home">
            Home

        </NavLink>
    </li>
    <li>
        <NavLink to="contact">
            Contact

        </NavLink>
    </li>
    <li>
        <NavLink to="about">
            About

        </NavLink>
    </li>
  
</ul>
    )
}

export default Header
