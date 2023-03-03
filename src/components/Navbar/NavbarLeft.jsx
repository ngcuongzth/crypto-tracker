import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { navLinks } from '../../utils/constant'


const NavbarLeft = () => {
    return (
        <section className='flex gap-3 items-center'>
            <Link to="/" className='flex items-center'>
                <img className='w-40px h-40px' src={logo} alt="crypto-tracker" />
                <span className='text-20px ml-1 font-bold  link-normal '>CryptoTracker</span>
            </Link>
            <div className='hidden l:flex items-center gap-4 '>
                {navLinks.map((link) => {
                    const { id, title, path } = link
                    return <NavLink className='link-normal text-normal font-medium ' to={path} key={id}>
                        {title}
                    </NavLink>
                })}
            </div>
        </section>
    )
}

export default NavbarLeft