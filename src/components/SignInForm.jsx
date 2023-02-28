import React from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const SignInForm = () => {

    const navigate = useNavigate()
    return (
        <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
            <h1 className='capitalize text-2xl text-center font-bold opacity-70'>
                sign in
            </h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className='mb-2'>
                    <label className="mb-2 bg-transparent px-2 py-1 font-semibold"
                        htmlFor="email">Email</label>
                    <div className='flex justify-between items-center rounded-xl shadow-2xl pr-2'>
                        <input type="text" id="email" placeholder='Enter your email'
                            className='border-none outline-none w-full border border-transparent
                             px-2 py-1 '
                        />
                        <AiOutlineMail size={20} />
                    </div>
                </div>
                <div className='mb-2'>
                    <label
                        className='bg-transparent mb-2 py-1 font-semibold px-2'
                        htmlFor="password">Password</label>
                    <div className='flex justify-between items-center rounded-2xl shadow-xl pr-2'>
                        <input type="password" id="password" placeholder='Enter your password'
                            className='border-none outline-none w-full border border-transparent
                             px-2 py-1' />
                        <AiOutlineLock size={20} />
                    </div>
                </div>
                <div>
                    <button className='w-full py-1 px-2 bg-hover-color rounded-2xl text-white font-semibold mt-2 hover:opacity-80 transition-all delay-75 shadow-xl'>Sign in</button>
                </div>
                <div className='flex gap-1 px-2 py-1 mt-2'>
                    <h3 className='font-medium text-sm bg-transparent'>Don't have an account?</h3>
                    <button
                        onClick={
                            () => {
                                navigate('/sign-up')
                            }
                        }
                        className='text-sm hover:text-hover-color delay-75 transition-all text-hover-color font-medium'>Sign up</button>
                </div>
                <div>

                </div>
            </form>
        </div>
    )
}

export default SignInForm