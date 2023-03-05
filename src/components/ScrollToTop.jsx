import React from 'react'
import { FcUp } from 'react-icons/fc'
const ScrollToTop = () => {
    const handleScroll = () => {
        window.scrollTo(0, 0)
    }


    return (
        <button className='fixed bottom-[50px] right-[30px] p-1 rounded-[50%] border border-border-color bg-white hover:scale-105 transition-transform'
            onClick={() => {
                handleScroll()
            }}
        >
            <FcUp size={24} />
        </button>
    )
}

export default ScrollToTop