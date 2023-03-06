import React, { useState, useEffect } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchCoin, updateQuery } from '../store/features/CoinSlice'
import { Link } from 'react-router-dom'

const CoinSearch = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const { trendingSearchCoins, searchCoins } = useSelector(state => state.coin)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateQuery(query))
        if (query) {
            dispatch(fetchSearchCoin(query))
        }
    }, [query])

    return (
        <div className='my-2'>
            <h2 className='text-[20px] font-bold mb-4'>
                Cryptocurrency Search
            </h2>
            <div className='flex justify-end relative'>
                <form className='relative flex items-center input-custom bg-transparent rounded-lg  max-w-[300px]' onSubmit={e => e.preventDefault()}>
                    <input
                        onFocus={() => {
                            setIsOpen(true)
                        }}
                        type="text" placeholder='Search a coin...'
                        className=' ml-4 w-full border-none outline-none'

                    />
                    <FaSearch size={14} className="absolute left-2 cursor-pointer z-[3]" />
                </form>

                <form className={`max-w-[400px] absolute right-0  top-0 w-full z-10 flex flex-col justify-center input-custom px-0 shadow-2xl
                ${isOpen ? 'flex' : 'hidden'}`}>
                    <div className='flex items-center px-2'>
                        <input type="text"
                            className=' ml-4 w-full border-none outline-none px-2'
                            placeholder='Enter the coin want to find'
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <FaSearch size={14} className="absolute left-2 cursor-pointer" />
                        <FaTimes
                            onClick={() => {
                                setIsOpen(false)
                                setQuery('')
                            }}
                            size={14} className="absolute right-2 cursor-pointer hover:fill-hover-color transition-all delay-75" />
                    </div>
                    <div className='mt-2 overflow-y-auto overflow-x-hidden max-h-[80vh]'>
                        {!query &&
                            <div className='w-full'>
                                <h4 className='px-2 pt-2 pb-1 border-b text-sm text-label font-medium'>Trending search 🔥</h4>
                                {trendingSearchCoins.map((coin) => {
                                    return <Link to={`coins/${coin.item.id}`}
                                        className="w-full flex flex-row justify-between py-2 hover:bg-hover px-2"
                                        key={coin.item.id}
                                    >
                                        <div className='flex flex-row gap-1'>
                                            <img
                                                className='w-4 h-4 bg-transparent'
                                                src={coin.item.large} alt={coin.item.name} />
                                            <span className='font-medium text-sm'>
                                                {coin.item.name}
                                            </span>
                                            <span className='font-medium text-sm'>
                                                ({coin.item.symbol})
                                            </span>
                                        </div>
                                        <span className='text-sm font-medium'>
                                            #{coin.item.market_cap_rank}
                                        </span>
                                    </Link>
                                })}
                            </div>
                        }

                        {query &&
                            <div className='w-full'>
                                <h4 className='px-2 pt-2 pb-1 border-b text-sm text-label font-medium'>Cryptocurrencies 🌏</h4>
                                {
                                    searchCoins.length > 0 ?
                                        searchCoins.map((coin) => {
                                            return <Link to={`coins/${coin.id}`}
                                                className="w-full flex flex-row justify-between py-2 hover:bg-hover px-2"
                                                key={coin.id}
                                            >
                                                <div className='flex flex-row gap-1'>
                                                    <img
                                                        className='w-4 h-4 bg-transparent'
                                                        src={coin.large} alt={coin.name} />
                                                    <span className='font-medium text-sm'>
                                                        {coin.name}
                                                    </span>
                                                    <span className='font-medium text-sm'>
                                                        ({coin.symbol})
                                                    </span>
                                                </div>
                                                <span className='text-sm font-medium'>
                                                    #{coin.market_cap_rank}
                                                </span>
                                            </Link>
                                        })
                                        :
                                        <span className='w-full px-2 text-sm font-medium flex justify-center'>Not found ;(</span>
                                }
                            </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CoinSearch