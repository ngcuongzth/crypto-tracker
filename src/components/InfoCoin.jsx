import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitter } from 'react-icons/bs'


const InfoCoin = ({ data }) => {
    const { links, id, categories, hashing_algorithm } = data
    return (
        <section className='xl:w-4/12 text-sm'>
            <h3 className='capitalize font-medium text-2xl mb-2'>Info  coin</h3>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center '>
                <span className="xl:w-150px w-350px opacity-80">
                    Hashing Algorithm
                </span>
                <span className='tag w-max opacity-80'>
                    {hashing_algorithm}
                </span>
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center '>
                <span className="xl:w-150px w-350px opacity-80">
                    Website
                </span>
                <Link className='tag w-max opacity-80' to={links.homepage[0]}>{links.homepage[0]}</Link>
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <span className=" xl:w-150px w-350px opacity-80">
                    Explorers
                </span>
                <div className='flex items-center gap-1 '>
                    <Link className='tag w-max  opacity-80' to={links.blockchain_site[0]}>
                        {links.blockchain_site[0].substr(0, 40)}
                    </Link>
                </div>
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <span className=" xl:w-150px w-350px opacity-80">
                    Community
                </span>
                <div className='flex gap-1'>
                    <span className='tag w-max flex items-center gap-1  opacity-80'>
                        <BsFacebook size={20} fill='#fff' />
                        Facebook
                    </span>
                    <span className='tag w-max flex items-center gap-1  opacity-80'>
                        <BsTwitter size={20} fill='#fff' />
                        Twitter
                    </span>
                </div>
            </div>
            {links.official_forum_url[0] &&
                <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                    <span className=" xl:w-150px w-350px capitalize opacity-80">
                        Official forum
                    </span>
                    <Link className='tag w-max  opacity-80' to={links.official_forum_url[0]}>
                        {links.official_forum_url[0]}
                    </Link>
                </div>
            }
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <span className=" xl:w-150px w-350px opacity-80">
                    API ID
                </span>
                <span className='tag w-max  opacity-80'>
                    #{id}
                </span>
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <span className=" xl:w-150px w-350px opacity-80">
                    Tag
                </span>

                <span className='tag w-max opacity-80'>
                    {categories[0]}
                </span>
            </div>
        </section>
    )
}

export default InfoCoin