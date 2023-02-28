import React from 'react'
import SavedCoin from '../components/SavedCoin'

const Account = () => {
    return (
        <div className='px-6 py-2'>
            <div className='flex justify-between items-center my-8 py-4 rounded-xl shadow-xl px-4'>
                <div className='py-4'>
                    <h2 className='text-2xl font-bold'>Account</h2>
                    <div>
                        <p>Welcome, user</p>
                    </div>
                </div>
                <div>
                    <button className='btn-normal border px-4 py-1 rounded-2xl shadow-lg hover:shadow-2xl font-medium'>
                        Sign Out
                    </button>
                </div>
            </div>
            <div className='shadow-xl rounded-2xl w-full min-h-[300px] my-12 py-8 px-4'>
                <h3 className='capitalize text-2xl font-bold bg-transparent'>Watch list</h3>
                <SavedCoin />
            </div>
        </div>
    )
}

export default Account