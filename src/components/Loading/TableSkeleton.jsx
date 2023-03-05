import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const TableSkeleton = () => {
    const fakeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='w-full  border-collapse text-left my-6 font-semibold flex flex-col'>
            <div className='w-full'>
                <div className='border-b flex justify-between w-full'>
                    <div className='p-2'></div>
                    <div className='p-2 mx-4 text-normal font-bold'>#</div>
                    <div className='p-2 text-left text-normal font-bold '>Coin</div>
                    <div className="p-2  text-normal font-bold ">Price</div>
                    <div className='p-2  hidden s:table-cell text-normal font-bold '>1h</div>
                    <div className='p-2  hidden s:table-cell text-normal font-bold '>24h</div>
                    <div className='p-2  hidden s:table-cell text-normal font-bold '>7d</div>
                    <div className='p-2 text-normal font-bold hidden l:table-cell'>24h Volume</div>
                    <div className='p-2 hidden l:table-cell text-normal font-bold '>Mkt Cap</div>
                    <div className='p-2 hidden m:table-cell text-normal font-bold '>Last 7 Days</div>
                </div>
            </div>
            {fakeArr.map((item) => {
                return (
                    <div className='w-full' key={item}>
                        <div className='border-b flex justify-between w-full'>
                            <div className='p-2 w-full'><Skeleton /></div>
                            <div className='p-2 w-full mx-4 text-normal font-bold'><Skeleton /></div>
                            <div className='p-2 w-full text-left text-normal font-bold '><Skeleton /></div>
                            <div className="p-2 w-full  text-normal font-bold "><Skeleton /></div>
                            <div className='p-2 w-full  hidden s:table-cell text-normal font-bold '><Skeleton /></div>
                            <div className='p-2 w-full  hidden s:table-cell text-normal font-bold '><Skeleton /></div>
                            <div className='p-2 w-full  hidden s:table-cell text-normal font-bold '><Skeleton /></div>
                            <div className='p-2 w-full text-normal font-bold hidden l:table-cell'><Skeleton /></div>
                            <div className='p-2 w-full hidden l:table-cell text-normal font-bold '><Skeleton /></div>
                            <div className='p-2 w-full hidden m:table-cell text-normal font-bold '><Skeleton /></div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default TableSkeleton