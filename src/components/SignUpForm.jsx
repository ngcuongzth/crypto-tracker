import React from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from './AuthWrapper/AuthWrapper'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'


const SignUpForm = () => {
    const { handleSignUp } = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await handleSignUp(email, password);
            // setDoc(doc(db, 'users', email), {
            //     watchList: [],
            // });
            navigate('/account')
            toast.success('Created new account ☑️')
        } catch (e) {
            setError(e.message);
            toast.error(` ${e.message} ❌`)
        }
    }

    return (
        <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
            <h1 className='capitalize text-2xl text-center font-bold opacity-70 mb-6'>
                sign up
            </h1>
            {error && <p className='text-sm text-red-600 font-medium py-1 px-2'>
                {error}
            </p>}
            <form onSubmit={
                (e) => {
                    handleSubmit(e)
                }
            }>
                <div className='mb-2'>
                    <label className="mb-2 bg-transparent px-2 py-1 font-semibold"
                        htmlFor="email">Email</label>
                    <div className='flex justify-between items-center rounded-xl shadow-2xl pr-2'>
                        <input type="email" id="email" placeholder='Enter your email'
                            className='border-none outline-none w-full border border-transparent
                             px-2 py-1 '
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                             px-2 py-1'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <AiOutlineLock size={20} />
                    </div>
                </div>
                <div>
                    <button
                        className='w-full py-1 px-2 bg-hover-color rounded-2xl text-white font-semibold mt-2 hover:opacity-80 transition-all delay-75 shadow-xl'>Sign up</button>
                </div>
                <div className='flex gap-1 px-2 py-1 mt-2'>
                    <h3 className='font-medium text-sm bg-transparent'>Already have an account?</h3>
                    <Link to="/sign-in"
                        className='text-sm hover:text-hover-color delay-75 transition-all text-hover-color font-medium'>Sign in</Link>
                </div>
                <div>

                </div>
            </form>
        </div>
    )
}

export default SignUpForm