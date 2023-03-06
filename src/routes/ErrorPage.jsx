import React, { useState, useEffect, useRef } from 'react'
import not_found_img from '../assets/images/page-not-found.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ErrorPage = () => {
    const [count, setCount] = useState(5)
    const timerId = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCount((prev) => {
                return prev - 1
            })
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [])
    useEffect(() => {
        if (count <= 0) {
            toast.info('Directed.')
            navigate('/')
        }
    }, [count])
    return <div className='px-6 mt-4 py-2 min-h-[calc(100vh-60px)]'>
        <div className='flex flex-col  items-center gap-2 mt-[30px]'>
            <div className='w-full flex flex-col justify-center items-center '>
                <div className='text-hover-color font-bold text-[60px]'>
                    <h2 className='leading-[55px] text-hover-color text-center'>Page</h2>
                    <h2 className='leading-[55px] text-hover-color'>Not Found</h2>
                </div>
                <p className='text-[30px] font-medium mt-2'>Sorry, the page not found</p>
                <div className='mt-3'>
                    <Link to="/" className='px-2 py-1 font-medium border rounded-lg text-white bg-hover-color hover:opacity-80 delay-75 transition-all'>Go back</Link>
                </div>
                <div className='mt-3 text-sm text-label '>
                    Or redirect after
                    <span className='text-hover-color font-bold'>
                        {" " + count + " "}
                    </span>
                    seconds
                </div>
            </div>
            <div className='w-full '>
                <img className='w-[80%] l:w-[70%] mx-auto' src={not_found_img} alt="page-not-found" />
            </div>
        </div>
        <div>

        </div>
    </div>
}
export default ErrorPage