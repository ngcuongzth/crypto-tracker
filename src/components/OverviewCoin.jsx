import React, { useState } from 'react'
import formatPrice from '../utils/formatPrice'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineStar, AiFillStar, AiOutlineCopy, AiOutlineShareAlt, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { toast } from 'react-toastify'



const OverviewCoin = ({ data }) => {
    const [shareFormOpen, setShareFormOpen] = useState(false)
    const handleCopyCoinHref = () => {
        const hrefCoin = window.location.href;
        navigator.clipboard.writeText(hrefCoin)
        toast.success('Copied coin link!')
    }


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
            <span className='text-[18px] text-label'>(24H)</span>
            <div className='flex gap-2 mt-2'>
                <button className='font-medium flex items-center gap-1 capitalize  btn-normal l:rounded-2xl'>
                    <AiOutlineStar size={22} />
                </button>
                <button className='font-medium flex items-center gap-1 capitalize  btn-normal l:rounded-2xl'>
                    <AiFillStar size={22} fill="#fc6" />
                </button>
                <button
                    onClick={() => { handleCopyCoinHref() }}
                    className='font-medium flex items-center gap-1 capitalize  btn-normal l:rounded-2xl'>
                    <AiOutlineCopy size={22} />
                </button>
                <div className='relative'>
                    <button
                        onClick={() => {
                            setShareFormOpen(!shareFormOpen)
                        }}
                        className='font-medium flex items-center gap-1 capitalize  btn-normal l:rounded-2xl'>
                        <AiOutlineShareAlt size={22} />
                    </button>
                    <div className={`px-2 py-2 absolute left-0 top-[111%] min-w-[250px] bg-primary-color border rounded-l z-10 ${shareFormOpen ? 'block' : 'hidden'}`}>
                        <div onClick={() => {
                            setShareFormOpen(!shareFormOpen)
                        }} className='flex items-center gap-1 px-2 py-1 hover:bg-secondary cursor-pointer transition-colors delay-[50]  hover:text-hover-color hover-svg-fill'>
                            <AiFillFacebook size={20} className="" />
                            Share on Facebook</div>
                        <div onClick={() => {
                            setShareFormOpen(!shareFormOpen)
                        }} className='flex items-center gap-1 px-2 py-1 hover:bg-secondary cursor-pointer transition-colors delay-[50]  hover:text-hover-color hover-svg-fill'>
                            <AiOutlineTwitter size={20} className="" />
                            Share on Twitter</div>
                    </div>
                </div>
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