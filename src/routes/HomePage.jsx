import React from 'react'
import CoinSearch from '../components/CoinSearch'
import TrendingCoin from '../components/TrendingCoin'
import { useDispatch } from 'react-redux'
import { fetchCoinMarket, fetchTrendingCoin, } from '../store/features/CoinSlice'
import TableCoin from '../components/TableCoin'
const Home = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCoinMarket())
        dispatch(fetchTrendingCoin())
    }, [])
    return (
        <div className='px-6 py-2 mt-4'>
            <CoinSearch />
            <TableCoin />
            <TrendingCoin />
        </div>

    )
}

export default Home