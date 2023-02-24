import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
const Navbar = () => {
    return <nav className='py-2 px-6 shadow-lg '>
        <div className='flex justify-between '>
            <NavbarLeft />
            <NavbarRight />
        </div>
    </nav>
}

export default Navbar