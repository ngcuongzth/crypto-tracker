import React from 'react'
import { Link } from 'react-router-dom';
const TrendingCoinItem = ({ coin }) => {
    const { id, small, large, market_cap_rank, name, symbol, price_btc } = coin;
    return (
        <Link to={`/coins/${id}`} className='h-32 bg-secondary p-6 rounded-xl hover:scale-105 transition-all ease-linear delay-75 flex items-center justify-between '>
            <div className='flex gap-3 items-center  w-full'>
                <span className='text-xs text-white p-4 font-bold bg-hover-color w-6 h-6  items-center justify-center rounded-cycle hidden s:flex'>#{market_cap_rank}</span>
                <img src={large} alt={id} className="w-6 h-6 bg-transparent" />
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col justify-center'>
                        <h6 className='text-normal font-medium bg-transparent'>{name}</h6>
                        <p className='bg-transparent text-secondary text-xs font-medium capitalize'>{symbol}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={small} className="w-3 h-3" alt={id} />
                        <p className='text-sm text-hover-color bg-transparent'>${price_btc.toFixed(7)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TrendingCoinItem