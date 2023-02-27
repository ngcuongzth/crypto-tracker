import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
const Navbar = () => {
    return <nav className='py-2 px-6 shadow-lg sticky top-0 z-50 '>
        <div className='flex justify-between '>
            <NavbarLeft />
            <NavbarRight />
        </div>
    </nav>
}

export default Navbar