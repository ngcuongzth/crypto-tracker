import React from 'react'
import { Link } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/features/LayoutSlice';
import { useSelector } from 'react-redux';
import user_default from '../../assets/images/user-img-default.png'
const NavbarRight = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    return (
        <section className=' flex items-center gap-3'>
            <ToggleTheme />
            <div className='hidden items-center gap-3 l:flex '>
                {user &&
                    <Link to="/account" className='link-normal text-normal  font-medium '>
                        <button className='flex items-center gap-1'>
                            Your Profile
                            <img className='w-6 h-6' src={user.photoUrl || user_default} alt="user-thumb" />
                        </button>
                    </Link>
                }
                {!user &&
                    <>
                        <Link to="/sign-in" className='link-normal text-normal  font-medium'>
                            <button>
                                Sign In
                            </button>
                        </Link>
                        <Link to="/sign-up" className='link-normal text-normal  font-medium'>
                            <button>
                                Sign up
                            </button>
                        </Link>
                    </>
                }
            </div>
            <button
                onClick={() => dispatch(toggleSidebar())}
                className='block l:hidden p-1 hover:bg-secondary rounded-cycle transition-all ease-linear delay-75 border border-transparent hover:border-hover-color  hover:text-hover-color hover:shadow-2xl'>
                <HiBars3BottomLeft size={24} />
            </button>
        </section>
    )
}

export default NavbarRight