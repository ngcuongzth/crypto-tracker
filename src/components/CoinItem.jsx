import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'
import formatPrice from '../utils/formatPrice'
import { Link } from 'react-router-dom'

const CoinItem = ({ coin }) => {
    const {
        market_cap_rank: rank,
        id,
        image,
        name,
        symbol,
        current_price,
        market_cap,
        total_volume,
        sparkline_in_7d,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency
    } = coin

    return (
        <tr className='h-14 border-b'>
            {/* star */}
            <td className='p-2'>
                <AiOutlineStar size={20} />
            </td>
            {/* rank */}
            <td className='p-2'>{rank}</td>
            {/* thumb & symbol */}
            <td className='p-2'>
                <Link to={`/coins/${id}`} className='flex  gap-1 flex-row items-center  hover:scale-105 delay-100 transition-all ease-linear '>
                    <img src={image} className="w-4 h-4" alt={id} />
                    <div className='flex m:items-center m:gap-1 m:flex-row flex-col '>
                        <p className='flex font-semibold'>{name}</p>
                        <span className='font-medium text-label uppercase font-mono text-xs'>{symbol}</span>
                    </div>
                </Link>
            </td>
            {/* price */}
            <td className='px-2'>{formatPrice(current_price)}</td>
            {/* 1hour */}
            <td className='hidden s:table-cell'>
                <div className={`flex items-center ${price_change_percentage_1h_in_currency > 0 ? 'text-hover-color p-2 ' : 'text-red-600 p-2 '}`}>
                    {price_change_percentage_1h_in_currency > 0 ?
                        <MdOutlineArrowDropUp size={20} />
                        :
                        <MdOutlineArrowDropDown size={20} />
                    }
                    {(price_change_percentage_1h_in_currency).toFixed(1)}%
                </div>
            </td>
            {/* 24hour */}
            <td className='hidden s:table-cell'>
                <div className={`flex items-center ${price_change_percentage_24h_in_currency > 0 ? 'text-hover-color p-2 ' : 'text-red-600 p-2 '}`}>
                    {price_change_percentage_24h_in_currency > 0 ?
                        <MdOutlineArrowDropUp size={20} />
                        :
                        <MdOutlineArrowDropDown size={20} />
                    }
                    {(price_change_percentage_24h_in_currency).toFixed(1)}%
                </div>
            </td>
            {/* 7d */}
            <td className='hidden s:table-cell'>
                <div className={`flex items-center ${price_change_percentage_7d_in_currency > 0 ? 'text-hover-color p-2 ' : 'text-red-600 p-2 '}`}>
                    {price_change_percentage_7d_in_currency > 0 ?
                        <MdOutlineArrowDropUp size={20} />
                        :
                        <MdOutlineArrowDropDown size={20} />
                    }
                    {(price_change_percentage_7d_in_currency).toFixed(1)}%
                </div>
            </td>
            {/* total volume  */}
            <td className='hidden l:table-cell p-2'>{formatPrice(total_volume)}</td>
            <td className='hidden l:table-cell p-2'>{formatPrice(market_cap)}</td>
            <td className='hidden m:table-cell p-2'>
                <Sparklines data={sparkline_in_7d.price}>
                    <SparklinesLine color={
                        price_change_percentage_7d_in_currency > 0 ? '#7acc16' : '#dc2626'
                    } />
                    <SparklinesSpots />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </td>
        </tr>
    )
}

export default CoinItem