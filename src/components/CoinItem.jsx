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
        <tr className='h-14 border-b hover:item-hover-bg'>
            {/* star */}
            <td className='p-2 bg-transparent'>
                <AiOutlineStar size={20} />
            </td>
            {/* rank */}
            <td className='p-2 bg-transparent'>{rank}</td>
            {/* thumb & symbol */}
            <td className='p-2 bg-transparent'>
                <Link to={`/coins/${id}`} className='flex  gap-1 flex-row items-center delay-100 transition-all ease-linear '>
                    <img src={image} className="w-4 h-4 bg-transparent" alt={id} />
                    <div className='flex m:items-center m:gap-1 m:flex-row flex-col '>
                        <p className='flex font-semibold bg-transparent'>{name}</p>
                        <span className='font-medium text-label uppercase font-mono text-xs'>{symbol}</span>
                    </div>
                </Link>
            </td>
            {/* price */}
            <td className='px-2 bg-transparent'>{formatPrice(current_price)}</td>
            {/* 1hour */}
            <td className='hidden s:table-cell bg-transparent'>
                <div className={`flex items-center ${price_change_percentage_1h_in_currency > 0 ? 'text-hover-color p-2 ' : 'text-red-600 p-2 '}`}>
                    {price_change_percentage_1h_in_currency > 0 ?
                        <MdOutlineArrowDropUp size={20} fill="#7acc16" />
                        :
                        <MdOutlineArrowDropDown size={20} fill="#dc2626" />
                    }
                    {(price_change_percentage_1h_in_currency).toFixed(1)}%
                </div>
            </td>
            {/* 24hour */}
            <td className='hidden s:table-cell bg-transparent'>
                <div className={`flex items-center p-2 ${price_change_percentage_24h_in_currency > 0 ? 'text-hover-color  ' : 'text-red-600'}`}>
                    {price_change_percentage_24h_in_currency > 0 ?
                        <MdOutlineArrowDropUp size={20} fill="#7acc16" />
                        :
                        <MdOutlineArrowDropDown size={20} fill="#dc2626" />
                    }
                    {(price_change_percentage_24h_in_currency).toFixed(1)}%
                </div>
            </td>
            {/* 7d */}
            <td className='hidden s:table-cell bg-transparent'>
                <div className={`flex items-center p-2 ${price_change_percentage_7d_in_currency > 0 ? 'text-hover-color ' : 'text-red-600 '}`}>
                    {price_change_percentage_7d_in_currency > 0 ?
                        <MdOutlineArrowDropUp size={20} fill="#7acc16" />
                        :
                        <MdOutlineArrowDropDown size={20} fill="#dc2626" />
                    }
                    {(price_change_percentage_7d_in_currency).toFixed(1)}%
                </div>
            </td>
            {/* total volume  */}
            <td className='hidden l:table-cell p-2 bg-transparent'>{formatPrice(total_volume)}</td>
            <td className='hidden l:table-cell p-2 bg-transparent'>{formatPrice(market_cap)}</td>
            <td className='hidden m:table-cell bg-transparent'>
                <Sparklines data={sparkline_in_7d.price} width={135} height={50}>
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