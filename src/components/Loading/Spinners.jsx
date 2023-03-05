import React from 'react'
import { PacmanLoader } from 'react-spinners'
const Spinners = () => {
    return (
        <div className='bg-green-100 absolute right-0 left-0 h-screen top-0 z-50  flex items-center justify-center ' >
            <PacmanLoader color='#ff94ff' />
        </div>
    )
}

export default Spinners