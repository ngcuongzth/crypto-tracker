import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DescCoinSkeleton = () => {
    return (
        <section>
            <h3 className='capitalize font-medium text-2xl mb-2'>About {name}</h3>
            <Skeleton count={15} height={25} />
        </section>
    )
}

export default DescCoinSkeleton