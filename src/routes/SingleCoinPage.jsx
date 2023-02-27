import React, { useEffect } from 'react'
import { fetchDetailCoin, setCoinId } from '../store/features/DetailCoinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import OverviewCoin from '../components/OverviewCoin'
import DescriptionCoin from '../components/DescriptionCoin'
import InfoCoin from '../components/InfoCoin'
import ChartCoin from '../components/ChartCoin'

const SingleCoinPage = () => {
    const dispatch = useDispatch()
    const { idCoin } = useParams()

    useEffect(() => {
        dispatch(setCoinId(idCoin))
        dispatch(fetchDetailCoin())
    }, [])

    const { coin } = useSelector(state => state.detailCoin)
    if (coin) {
        return (
            <div className='px-6 py-2 mt-6'>
                <div className="flex gap-12 flex-col xl:flex-row w-full mt-4">
                    <OverviewCoin data={coin} />
                    <InfoCoin data={coin} />
                </div>
                <div className="grid m:grid-cols-2 gap-6 grid-cols-1 mt-4">
                    <ChartCoin data={coin} />
                    <DescriptionCoin data={coin} />
                </div>
            </div>
        )
    }
}

export default SingleCoinPage