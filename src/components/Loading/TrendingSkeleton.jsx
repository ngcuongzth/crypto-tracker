import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TrendingSkeleton = () => {
    const fakeArr = [1, 2, 3, 4]
    return (
        <section className='my-3 pb-8'>
            <h2 className='capitalize font-bold text-20px mb-4 mt-10'>Trending coins</h2>
            <div className='grid grid-cols-1  l:grid-cols-2 gap-4'>
                {fakeArr.map((item) => {
                    return (
                        <div key={item} className='h-32 bg-secondary p-6 rounded-xl hover:scale-105 transition-all ease-linear delay-75 flex items-center justify-between '>
                            <div className='flex gap-3 items-center  w-full'>
                                <span className='text-xs text-white p-4 font-bold bg-hover-color w-6 h-6  items-center justify-center rounded-cycle hidden s:flex'>
                                    <Skeleton />
                                </span>
                                <span className='w-6 h-6 block'>
                                    <Skeleton className='w-full block h-full' />
                                </span>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex flex-col justify-center'>
                                        <h6 className='text-normal font-medium bg-transparent'>
                                            <Skeleton className='min-w-[100px]' />
                                        </h6>
                                        <p className='bg-transparent text-secondary text-xs font-medium capitalize'><Skeleton /></p>
                                    </div>
                                    <div className='flex  items-center gap-1 min-w-[100px] '>
                                        <div className="h-full bg-transparent w-full">
                                            <Skeleton className='w-full' />
                                        </div>
                                        <p className='h-full text-sm text-hover-color bg-transparent block w-full'>
                                            <Skeleton className='w-full' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </section>
    )
}

export default TrendingSkeleton