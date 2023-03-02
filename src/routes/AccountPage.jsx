import React from 'react'
import SavedCoin from '../components/SavedCoin'
import { useSelector } from 'react-redux'
import { useAuthContext } from '../components/AuthWrapper/AuthWrapper'
import { useNavigate } from 'react-router-dom'
import default_user_img from '../assets/images/user-img-default.png'

const Account = () => {
    const { handleSignOut } = useAuthContext()
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    return (
        <div className='px-6 py-2'>
            <div className='s:flex  s:flex-row grid justify-between items-center my-8 py-4 rounded-xl shadow-xl px-4'>
                <div className='py-4'>
                    <h2 className='text-2xl font-bold'>Your Account</h2>
                    {user &&
                        <div className='mt-2'>
                            <p className='font-medium text-label flex flex-col gap-1 text-sm'>Welcome to CryptoTracker,
                                <span className='text-hover-color font-medium flex items-center gap-2 text-[18px] px-2 py-1 border rounded-xl'>
                                    <img className='w-8 h-8' src={user.photoUrl || default_user_img} alt="default-user-img" />
                                    {user.name}
                                </span>
                            </p>
                        </div>
                    }
                    {!user && <p className='font-medium text-label'>
                        You are not logged in?</p>}
                </div>
                {user &&
                    <div>
                        <button className='btn-normal border px-4 py-1 rounded-2xl shadow-lg hover:shadow-2xl font-medium'
                            onClick={() => {
                                handleSignOut()
                                navigate('/sign-in')
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                }
                {!user &&
                    <div>
                        <button className='btn-normal border px-4 py-1 rounded-2xl shadow-lg hover:shadow-2xl font-medium'
                            onClick={() => {
                                navigate('/sign-in')
                            }}
                        >
                            Sign In
                        </button>
                    </div>
                }
            </div>
            <div className='shadow-xl rounded-2xl w-full min-h-[300px] my-12 py-8 px-4'>
                <h3 className='capitalize text-2xl font-bold bg-transparent'>Watch list</h3>
                <SavedCoin />
            </div>
        </div>
    )
}

export default Account