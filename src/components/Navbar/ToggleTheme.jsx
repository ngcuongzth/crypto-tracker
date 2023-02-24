import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/features/ThemeSlice'


const ToggleTheme = () => {
    const dispatch = useDispatch()
    const { colorTheme } = useSelector(state => state.theme)

    return (
        <div className='flex items-center'>
            <button
                onClick={() => dispatch(toggleTheme())}
                className={colorTheme === 'light-theme' ? 'font-medium flex items-center gap-1 capitalize  btn-normal l:rounded-2xl' : 'hidden'}>
                <HiMoon size={24} className="bg-transparent" />
                <span className='hidden l:block'>
                    Dark theme
                </span>
            </button>
            <button
                onClick={() => dispatch(toggleTheme())}
                className={colorTheme === 'dark-theme' ? 'font-medium flex items-center gap-1 capitalize  btn-normal l:rounded-2xl' : 'hidden'}>
                <HiSun size={24} className="bg-transparent" />
                <span className='hidden l:block'>
                    Light theme
                </span>
            </button>
        </div>
    )
}

export default ToggleTheme