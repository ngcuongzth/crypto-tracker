import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CoinItem from './CoinItem'
import { fetchMoreCoin, increasePage } from '../store/features/CoinSlice'
import { ClipLoader } from 'react-spinners'

const TableCoin = () => {
    const dispatch = useDispatch()
    const { coins, isLoadingMore } = useSelector(state => state.coin)
    return (
        <div className=' w-full border-collapse text-left my-6 font-semibold'>

            <table className='w-full border-collapse text-left my-6 font-semibold'>
                <thead>
                    <tr className='border-b'>
                        <th className='p-2'></th>
                        <th className='p-2 mx-4 text-normal font-bold'>#</th>
                        <th className='p-2 text-left text-normal font-bold '>Coin</th>
                        <th className="p-2  text-normal font-bold ">Price</th>
                        <th className='p-2  hidden s:table-cell text-normal font-bold '>1h</th>
                        <th className='p-2  hidden s:table-cell text-normal font-bold '>24h</th>
                        <th className='p-2  hidden s:table-cell text-normal font-bold '>7d</th>
                        <th className='p-2 text-normal font-bold hidden l:table-cell'>24h Volume</th>
                        <th className='p-2 hidden l:table-cell text-normal font-bold '>Mkt Cap</th>
                        <th className='p-2 hidden m:table-cell text-normal font-bold '>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin => {
                        return (
                            <CoinItem coin={coin} key={coin.id} />
                        )
                    })}
                </tbody>
            </table >
            <div className='flex justify-center items-center flex-col mt-[50px] mb-[50px]'>
                {isLoadingMore &&
                    <div className=' mb-6'>
                        <ClipLoader color='#8DC647' />
                    </div>
                }
                <button
                    onClick={() => {
                        dispatch(increasePage())
                        dispatch(fetchMoreCoin())
                    }}
                    className='border px-2 py-1 transition-all  rounded-xl bg-hover-color text-white'>Load more 20 coins</button>
            </div>
        </div>
    )
}

export default TableCoin
