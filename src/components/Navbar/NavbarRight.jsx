import React from 'react'
import { Link } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/features/LayoutSlice';
import { useSelector } from 'react-redux';
import user_default from '../../assets/images/user-img-default.png'
import { toast } from 'react-toastify'
import { useAuthContext } from '../../components/AuthWrapper/AuthWrapper';

const NavbarRight = () => {
    const { handleSignOut } = useAuthContext()
    const handleLogOut = async () => {
        const errorMessage = handleSignOut()
        if (errorMessage) {
            toast.error(errorMessage)
        }
        else {
            navigate('/sign-in')
        }
    }
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    return (
        <section className=' flex items-center gap-3'>
            <ToggleTheme />
            <div className='hidden items-center gap-3 l:flex '>
                {user &&
                    <>
                        <Link to="/account" className='link-normal text-normal  font-medium '>
                            <button className='flex items-center gap-1'>
                                Your Profile
                            </button>
                        </Link>
                        <button className='link-normal text-normal  font-medium bg-hover-color py-1 px-2 text-white rounded-lg hover:text-white hover:opacity-75 '
                            onClick={() => {
                                handleLogOut()
                            }}
                        >
                            Sign out
                        </button>
                    </>
                }
                {!user &&
                    <>
                        <Link to="/sign-in" className='link-normal text-normal  font-medium'>
                            <button className='btn-normal px-2 rounded-lg hover:bg-transparent'>
                                Sign In
                            </button>
                        </Link>
                        <Link to="/sign-up" className='link-normal text-normal  font-medium'>
                            <button className='text-white bg-hover-color btn-normal rounded-lg px-2 hover:bg-hover-color hover:text-white'>
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
        </section >
    )
}

export default NavbarRight