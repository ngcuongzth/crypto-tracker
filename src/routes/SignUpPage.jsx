import React from 'react'
import SignUpForm from '../components/SignUpForm'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const SignUp = () => {
    const { user } = useSelector(state => state.auth)

    if (user) {
        return (
            <Navigate to="/" />)
    }
    return (
        <div className='px-6'>
            <SignUpForm />
        </div >
    )
}

export default SignUp