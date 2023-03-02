import React from 'react'
import logo from './../../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../../utils/constant'
import { FaKey, FaRegistered, FaSignOutAlt } from 'react-icons/fa'
import ToggleTheme from '../Navbar/ToggleTheme'
import { TiTimes } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../store/features/LayoutSlice'
import user_default from '../../assets/images/user-img-default.png'
import { useAuthContext } from '../AuthWrapper/AuthWrapper'
const Sidebar = () => {
    const dispatch = useDispatch()
    const { isSidebarOpen } = useSelector(state => state.layout)
    const { user } = useSelector(state => state.auth)
    const { handleSignOut } = useAuthContext()
    return (
        <aside className={`${isSidebarOpen ? 'l:hidden fixed top-0 bottom-0 right-0 left-0 z-50 transition-all delay-150 ease-linear' : 'sidebar-hidden fixed top-0 bottom-0 right-0 left-0 z-50 transition-all delay-150 ease-linear'}`}>
            <dir className="py-2 px-6 h-full ">
                <div className='flex justify-between items-center'>
                    <Link to="/" className='text-20px ml-1 font-bold  hover:text-hover-color transition-all ease-linear delay-100 capitalize flex items-center mb-2 text-secondary'
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <img className="w-40px h-40px mr-1" src={logo} alt="crypto-tracker" />
                        CryptoTracker
                    </Link>
                    <div className='flex gap-3'>
                        <ToggleTheme />
                        <button className='btn-normal'
                            onClick={() => dispatch(closeSidebar())}>
                            <TiTimes className='bg-transparent' size={24} />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        navLinks.map((link) => {
                            const { id, title, path, icon: Icon } = link
                            return <NavLink
                                onClick={() => dispatch(closeSidebar())}
                                className="text-normal capitalize flex gap-1 items-center font-medium
                        py-3 border-b  hover-svg-fill hover:text-hover-color transition-all delay-75 ease-linear "
                                to={path} key={id}>
                                <Icon size={24} />
                                {title}
                            </NavLink>
                        })
                    }
                </div>
                <div className='mt-4 flex flex-col gap-2'>
                    {!user &&
                        <>
                            <Link to="/sign-up"
                                onClick={() => dispatch(closeSidebar())}
                                className='flex items-center text-normal  py-2 justify-center gap-1 border rounded-xl bg-hover-color hover:bg-opacity-80 transition-all ease-linear  delay-75 font-medium text-white'>
                                <FaRegistered size={24} className="bg-transparent fill-white" />
                                Sign Up
                            </Link>
                            <Link to='/sign-in'
                                onClick={() => dispatch(closeSidebar())}
                                className='flex items-center text-normal py-2 justify-center gap-1 border rounded-xl transition-all ease-linear delay-75 font-medium bg-primary-color hover:opacity-80'>
                                <FaKey size={24} className="bg-transparent " />
                                Sign In
                            </Link>
                        </>
                    }
                    {user &&
                        <>
                            <Link to='/account'
                                onClick={() => dispatch(closeSidebar())}
                                className='flex items-center text-normal py-2 justify-center gap-1 border rounded-xl transition-all ease-linear delay-75 font-medium bg-primary-color hover:opacity-80'>
                                {/* <FaKey size={24} className="bg-transparent " /> */}
                                <img src={user.photoUrl || user_default} alt="user-img-default"
                                    className='w-6 h-6 bg-transparent'
                                />
                                Your Profile
                            </Link>
                            <button
                                onClick={() => {
                                    dispatch(closeSidebar())
                                    handleSignOut()
                                }}
                                className='flex items-center text-normal py-2 justify-center gap-1 border rounded-xl transition-all ease-linear delay-75 font-medium bg-primary-color hover:opacity-80'>
                                <FaSignOutAlt size={24} />
                                Sign Out
                            </button>
                        </>
                    }
                </div>
            </dir >
        </aside >
    )
}

export default Sidebar