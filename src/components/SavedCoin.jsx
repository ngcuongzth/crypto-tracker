import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
const SavedCoin = () => {
    const [coins, setCoins] = useState([])
    return (
        <div>
            {coins.length <= 0 ?
                <p className='bg-transparent flex gap-1 flex-col mt-4 text-sm'>
                    You don't have any coins saved. Please save a coin to add it to your watch list ❗
                    <Link className='text-hover-color font-medium' to="/">Click here to search coins</Link>
                </p>
                : (
                    <table className='w-fill border-collapse text-center'>
                        <thead>
                            <tr className='border-b'>
                                <th className='px-4'>Rank #</th>
                                <th className='text-left'>Coin</th>
                                <th className='text-left'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => {
                                <tr className='h-[60px] overflow-hidden' key={coin.id}>
                                    <td>{coin.rank}</td>
                                    <td>
                                        <Link to={`/coin/${coin.id}`}>
                                            <div>
                                                <img src={coin.image} alt={coin.name} />
                                                <div>
                                                    <p>{coin.name}</p>
                                                    <p className='uppercase'>{coin.symbol}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <AiOutlineClose className='cursor-pointer' />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default SavedCoin