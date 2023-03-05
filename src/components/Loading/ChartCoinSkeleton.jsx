import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ChartCoinSkeleton = () => {
    return (
        <section>
            <h3 className='capitalize font-medium text-2xl mb-2'>Bitcoin Price Chart </h3>
            <Skeleton className='w-40px h-[30px]' />
            <Skeleton className='w-full h-[300px]' />
            <div className='mt-4'>
                <h3 className='text-label uppercase font-bold text-lg mb-2 block'>Price Statistics</h3>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[120px] h-[25px]' />
                    <Skeleton className='w-[120px] h-[25px]' />
                </div>
            </div>
        </section>
    )
}

export default ChartCoinSkeleton