import React from 'react'
import formatPrice from '../utils/formatPrice'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
const OverviewCoin = ({ data }) => {
    const { name, image, symbol, market_cap_rank: rank, market_data
    } = data
    return (
        <section className='xl:w-8/12'>
            <span className='text-white py-1 px-2 font-medium rounded-2xl bg-slate-700 '>Rank#{rank}</span>
            <div className='flex gap-2 items-center mt-2'>
                <img className='w-6 h-6' src={image.large} alt={name} />
                <span className='capitalize font-medium text-2xl'>{name}</span>
                <span className='uppercase text-xs font-medium'>{symbol}</span>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
                <span className='text-3xl font-semibold'>{formatPrice(market_data.current_price.usd)}</span>
                {market_data.price_change_percentage_24h_in_currency.usd > 0 ?
                    <span className={`flex items-center text-hover-color font-bold text-xl`}>
                        <AiOutlineCaretUp fill='#7acc16' />
                        {market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                    </span> :
                    <span className='flex items-center text-red-600 font-semibold text-xl'>
                        <AiOutlineCaretDown fill='#dc2626' />
                        {market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                    </span>
                }
            </div>
            <div className='mt-4 flex flex-col  font-medium capitalize text-sm l:grid grid-cols-2 gap-x-6'>
                <div className='flex justify-between py-2 border-b border-primary '>
                    <span className="opacity-80 font-normal">
                        Market cap
                    </span>
                    <span>
                        {formatPrice(market_data.market_cap.usd)}
                    </span>
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <span className="opacity-80 font-normal">
                        24 hour trading vol
                    </span>
                    <span>
                        {formatPrice(market_data.total_volume.usd)}
                    </span>
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <span className="opacity-80 font-normal">
                        Fully Diluted Valuation
                    </span>
                    <span>
                        {formatPrice(market_data.fully_diluted_valuation.usd)}
                    </span>
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <span className="opacity-80 font-normal">
                        Circulating Supply
                    </span>
                    <span>{formatPrice(market_data.circulating_supply)}</span>
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <span className="opacity-80 font-normal">
                        Total Supply
                    </span>
                    <span>
                        {formatPrice(market_data.total_supply)}
                    </span>
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <span className="opacity-80 font-normal">
                        Max supply
                    </span>
                    <span>
                        {formatPrice(market_data.max_supply)}
                    </span>
                </div>
            </div>
        </section >
    )
}

export default OverviewCoin