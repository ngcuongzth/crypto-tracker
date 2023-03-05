import React from 'react'
import CoinSearch from '../components/CoinSearch'
import TrendingCoin from '../components/TrendingCoin'
import { useDispatch } from 'react-redux'
import { fetchCoinMarket, fetchTrendingCoin, } from '../store/features/CoinSlice'
import TableSkeleton from '../components/Loading/TableSkeleton'
import TableCoin from '../components/TableCoin'
import TrendingSkeleton from '../components/Loading/TrendingSkeleton'
import { useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();
    const { isLoadingCoinMarket, isLoadingTrendingCoin } = useSelector(state => state.coin)

    React.useEffect(() => {
        dispatch(fetchCoinMarket())
        dispatch(fetchTrendingCoin())
    }, [])
    return (
        <div className='px-6 py-2 mt-4'>
            <CoinSearch />
            {isLoadingCoinMarket ?
                <TableSkeleton /> :
                <TableCoin />
            }

            {isLoadingTrendingCoin ?
                <TrendingSkeleton />
                :
                <TrendingCoin />
            }
        </div>

    )
}

export default Home