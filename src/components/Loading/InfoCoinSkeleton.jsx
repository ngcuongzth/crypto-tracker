import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const InfoCoinSkeleton = () => {
    return (
        <section className='xl:w-4/12 text-sm'>
            <h3 className='capitalize font-medium text-2xl mb-2'>Info  coin</h3>

            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center '>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center '>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>


            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>
            <div className='flex  mb-2 flex-col gap-1 s:flex-row s:items-center'>
                <Skeleton className='mr-[150px] w-[150px] h-[25px]' />
                <Skeleton className='w-[150px] h-[25px]' />
            </div>
        </section>
    )
}

export default InfoCoinSkeleton