import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getInitialTheme } from '../store/features/ThemeSlice'

const ThemeContext = ({ children }) => {
    const dispatch = useDispatch()
    const { colorTheme } = useSelector((state) => {
        return state.theme;
    })
    useEffect(() => {
        dispatch(getInitialTheme())
    }, [])
    return (
        <main className={`${colorTheme} font-sans`}>
            {children}
        </main>
    )
}

export default ThemeContext