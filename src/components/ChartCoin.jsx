import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'
import formatPrice from '../utils/formatPrice'

const ChartCoin = ({ data }) => {
    const {
        market_data,
    } = data
    return (
        <section>
            <h3 className='capitalize font-medium text-2xl mb-2'>Bitcoin Price Chart </h3>
            <span className='text-label uppercase font-bold text-lg mb-2 block'>7day</span>
            <Sparklines data={market_data.sparkline_7d.price} >
                <SparklinesLine color={
                    market_data.price_change_percentage_7d_in_currency.usd > 0 ? '#7acc16' : '#dc2626'
                } />
                <SparklinesSpots />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div className='mt-4'>
                <h3 className='text-label uppercase font-bold text-lg mb-2 block'>Price Statistics</h3>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        24h Low / 24h High
                    </span>
                    <span>
                        {formatPrice(market_data.low_24h.usd)} / {formatPrice(market_data.high_24h.usd)}
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Trading Volume
                    </span>
                    <span>
                        {formatPrice(market_data.total_volume.usd)}
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Market Cap
                    </span>
                    <span>
                        {formatPrice(market_data.market_cap.usd)}
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Volume / Market Cap
                    </span>
                    <span>
                        {(market_data.total_volume.usd / market_data.market_cap.usd).toFixed(2)}%
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Price change (24h)
                    </span>
                    <span className={`${market_data.price_change_percentage_24h > 0 ?
                        'text-hover-color  ' : 'text-red-600'
                        }`}>
                        {(market_data.price_change_percentage_24h).toFixed(2)}%
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Price change (7 day)
                    </span>
                    <span className={`${market_data.price_change_percentage_7d > 0 ?
                        'text-hover-color  ' : 'text-red-600'
                        }`}>
                        {(market_data.price_change_percentage_7d).toFixed(2)}%
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Price change (1 month)
                    </span>
                    <span className={`${market_data.price_change_percentage_30d > 0 ?
                        'text-hover-color  ' : 'text-red-600'
                        }`}>
                        {(market_data.price_change_percentage_30d).toFixed(2)}%
                    </span>
                </div>
                <div className='text-sm font-medium flex justify-between py-2 border-b border-primary'>
                    <span className='font-normal opacity-80'>
                        Price change (1 year)
                    </span>
                    <span className={`${market_data.price_change_percentage_1y > 0 ?
                        'text-hover-color  ' : 'text-red-600'
                        }`}>
                        {(market_data.price_change_percentage_1y).toFixed(2)}%
                    </span>
                </div>
            </div>
        </section>
    )
}

export default ChartCoin