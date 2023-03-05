import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CoinItem from './CoinItem'


const SavedCoin = () => {
    const { watchList } = useSelector(state => state.auth)
    // console.log(watchList)
    return (
        <div>
            {watchList?.length <= 0 ?
                <p className='bg-transparent flex gap-1 flex-col mt-4 text-sm'>
                    You don't have any coins saved. Please save a coin to add it to your watch list ❗
                    <Link className='text-hover-color font-medium' to="/">Click here to search coins</Link>
                </p>
                : (
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
                            {watchList.map(coin => {
                                return (
                                    <CoinItem coin={coin} key={coin.id} />
                                )
                            })}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default SavedCoin