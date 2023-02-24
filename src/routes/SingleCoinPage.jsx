import React, { useEffect } from 'react'
import { fetchDetailCoin, setCoinId } from '../store/features/DetailCoinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleCoinPage = () => {
    const dispatch = useDispatch()
    const { idCoin, isLoading } = useParams()

    useEffect(() => {
        dispatch(setCoinId(idCoin))
        dispatch(fetchDetailCoin())
    }, [])

    const { coin } = useSelector(state => state.detailCoin)
    if (coin) {
        const { id, symbol, name, image, } = coin
        return (
            <div>
                <div>
                    <img src={image.large} alt={name} />
                </div>
            </div>
        )
    }
}

export default SingleCoinPage