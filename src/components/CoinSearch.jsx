import React, { useEffect, useState } from 'react'

const CoinSearch = () => {
    const [search, setSearch] = useState('')
    return (
        <div className='my-2'>
            <h2 className='text-20px font-bold mb-4'>
                Cryptocurrency Search
            </h2>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder='Search a coin...'
                    className='input-custom bg-primary'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default CoinSearch