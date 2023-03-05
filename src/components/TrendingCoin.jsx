import React from 'react'
import { useSelector } from 'react-redux'
import TrendingCoinItem from './TrendingCoinItem'
import { Link } from 'react-router-dom'
import trending_1 from '../assets/images/trending_1.webp'
import trending_2 from '../assets/images/trending_2.webp'
import trending_3 from '../assets/images/trending_3.webp'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdCategory, MdAddchart } from 'react-icons/md'



const TrendingCoin = () => {
    const { trendingCoins } = useSelector(state => state.coin)
    return (
        <section className='my-3 pb-8'>
            <h2 className='capitalize font-bold text-20px mb-4 mt-10'>Trending coins</h2>
            <div className='grid grid-cols-1  l:grid-cols-2 gap-4'>
                {trendingCoins.map((coin) => {
                    return <TrendingCoinItem coin={coin.item} key={coin.item.id} />
                })}
                <Link to="/" className='h-32 overflow-hidden bg-secondary rounded-xl hover:scale-105 transition-all ease-linear delay-75 relative ' >
                    <img className='w-full h-full object-cover' src={trending_3} alt="" />
                    <div className='absolute top-2 left-2 text-white flex gap-1 font-semibold text-normal capitalize'>
                        <AiOutlineSearch size={20} fill='white' />
                        More coins
                    </div>
                </Link>
                <Link to="/" className='h-32 overflow-hidden bg-secondary rounded-xl hover:scale-105 transition-all ease-linear delay-75 relative ' >
                    <img className='w-full h-full object-cover' src={trending_2} alt="" />
                    <div className='absolute top-2 left-2 text-white flex gap-1 font-semibold text-normal capitalize'>
                        <MdCategory size={20} fill='white' />
                        Top categories
                    </div>
                </Link>
                <Link to="/" className='h-32 overflow-hidden bg-secondary rounded-xl hover:scale-105 transition-all ease-linear delay-75  relative' >
                    <img className='w-full h-full object-cover' src={trending_1} alt="" />
                    <div className='absolute top-2 left-2 text-white flex gap-1 font-semibold text-normal capitalize'>
                        <MdAddchart size={20} fill='white' />
                        Recently added
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default TrendingCoin