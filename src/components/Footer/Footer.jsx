import React from 'react'
import { footerLinks } from '../../utils/constant'
import { Link } from 'react-router-dom'
import ToggleTheme from '../Navbar/ToggleTheme'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineYoutube } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='py-2 px-6 mt-2 pt-8  border-t'>
            <div className='grid l:grid-cols-2 gap-4 grid-cols-1'>
                <div className='grid grid-cols-2 uppercase gap-4'>
                    {footerLinks.map(col => {
                        const { id, title, subLinks } = col;
                        return <div
                            key={id}>
                            <h3 className='font-medium text-lg py-1'>{title}</h3>
                            <ul className='flex flex-col gap-2'>
                                {subLinks.map(item => {
                                    const { id, link, title } = item;
                                    return <Link
                                        className='text-sm link-normal uppercase font-normal'
                                        key={id} to={link}>
                                        {title}
                                    </Link>
                                })}
                            </ul>
                        </div>
                    })}
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-end'>
                        <ToggleTheme />
                    </div>
                    <div className=' flex-col gap-2 hidden s:flex' >
                        <h3 className='font-medium text-right px-2 py-1'>Sign up for crypto news</h3>
                        <form
                            onSubmit={e => e.preventDefault()}
                            className="flex flex-cols gap-3 justify-end"
                        >
                            <input type="email" className='input-custom w-[300px] bg-transparent ' placeholder='Enter your email' />
                            <button className='btn-normal rounded-lg border border-hover-color bg-hover-color text-white  px-2 py-1'
                                onClick={() => {
                                    navigate('/sign-up')
                                }}
                            >Sign up</button>
                        </form>
                    </div>
                    <div className='flex flex-row justify-end gap-3'>
                        <Link to="/" className='link-normal cursor-pointer'>
                            <AiOutlineInstagram size={30} />
                        </Link>
                        <Link to="/" className='link-normal cursor-pointer'>
                            <AiOutlineFacebook size={30} />
                        </Link>
                        <Link to="/" className='link-normal cursor-pointer'>
                            <AiOutlineYoutube size={30} />
                        </Link>
                        <Link to="/" className='link-normal cursor-pointer'>
                            <AiOutlineGithub size={30} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='font-medium text-sm text-center px-6 py-2'>
                Powered by Coin Gecko
            </div>
        </footer>
    )
}

export default Footer