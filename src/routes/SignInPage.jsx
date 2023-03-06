import React, { useEffect } from 'react'
import SignInForm from '../components/SignInForm'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const SignIn = () => {
    const { user } = useSelector(state => state.auth)

    if (user) {
        return (
            <Navigate to="/" />)
    }
    return (
        <div className='px-6'>
            <SignInForm />
        </div>
    )
}

export default SignIn