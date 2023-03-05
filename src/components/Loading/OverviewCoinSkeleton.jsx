import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const OverviewCoinLoading = () => {
    return (
        <section className='xl:w-8/12'>
            <span className='text-white py-1 px-2 font-medium rounded-2xl bg-slate-700 '>
                <Skeleton className='w-[50px]' />
            </span>
            <div className='flex gap-2 items-center mt-2'>
                <Skeleton className='w-[100px]' />
            </div>
            <div className='flex gap-2 mt-2 items-center'>
                <span className='text-3xl font-semibold'>
                    <Skeleton className='w-[200px]' />
                </span>
            </div>
            <span className='text-[18px] text-label'>
                <Skeleton className='w-[40px]' />
            </span>
            <div className='flex gap-2 mt-2'>
                <Skeleton className='w-[20px] h-[20px]' />
                <Skeleton className='w-[20px] h-[20px]' />
                <Skeleton className='w-[20px] h-[20px]' />
            </div>
            <div className='mt-4 flex flex-col  font-medium capitalize text-sm l:grid grid-cols-2 gap-x-6'>
                <div className='flex justify-between py-2 border-b border-primary '>
                    <Skeleton className='w-[100px] h-[25px]' />
                    <Skeleton className='w-[100px] h-[25px]' />
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[100px] h-[25px]' />
                    <Skeleton className='w-[100px] h-[25px]' />
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[100px] h-[25px]' />
                    <Skeleton className='w-[100px] h-[25px]' />
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[100px] h-[25px]' />
                    <Skeleton className='w-[100px] h-[25px]' />
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[100px] h-[25px]' />
                    <Skeleton className='w-[100px] h-[25px]' />
                </div>
                <div className='flex justify-between py-2 border-b border-primary'>
                    <Skeleton className='w-[100px] h-[25px]' />
                    <Skeleton className='w-[100px] h-[25px]' />
                </div>
            </div>
        </section >
    )
}

export default OverviewCoinLoading