import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { coinMarketUrl, currencies, order, trendingCoinUrl } from "../../api/api";
import { toast } from 'react-toastify'

const initialState = {
    coins: [],
    trendingCoins: [],
    page: 1,
    tempPage: 1,
    totalPages: 0,
    isLoadingCoinMarket: false,
    totalCoin: 0,
    isLoadingTrendingCoin: false,
    isLoadingMore: false
}
export const fetchCoinMarket = createAsyncThunk(
    'coin/fetchCoinMarket',
    async (name, thunkAPI) => {
        const { page } = thunkAPI.getState().coin
        const url = coinMarketUrl(currencies.usd, order.market_cap_desc, 20, page)
        try {
            const resp = await axios.get(url)
            return resp.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue('get coin market failure', err)
        }
    }
)
export const fetchMoreCoin = createAsyncThunk(
    'coin/fetchMoreCoin',
    async (name, thunkAPI) => {
        const { tempPage } = thunkAPI.getState().coin

        const url = coinMarketUrl(currencies.usd, order.market_cap_desc, 20, tempPage)
        try {
            const resp = await axios.get(url)
            return resp.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue('get coin market failure', err)
        }
    }
)
export const fetchTrendingCoin = createAsyncThunk(
    'coin/fetchTrendingCoin',
    async (name, thunkAPI) => {
        try {
            const resp = await axios.get(trendingCoinUrl);
            const data = resp.data;
            return data.coins
        }
        catch (err) {
            return thunkAPI.rejectWithValue('get trending coin failure', err)
        }
    }
)

export const CoinSlice = createSlice({
    initialState: initialState,
    name: 'coin',
    reducers: {
        increasePage: (state, action) => {
            state.tempPage = state.tempPage + 1
        }
    }
    , extraReducers: (builder) => {
        builder.addCase(fetchCoinMarket.pending, (state, action) => {
            state.isLoadingCoinMarket = true
        })
        builder.addCase(fetchCoinMarket.fulfilled, (state, action) => {
            state.isLoadingCoinMarket = false;
            state.coins = action.payload;
        })
        builder.addCase(fetchCoinMarket.rejected, (state) => {
            state.isLoadingCoinMarket = false;
        })

        builder.addCase(fetchMoreCoin.pending, (state, action) => {
            state.isLoadingMore = true
        })
        builder.addCase(fetchMoreCoin.fulfilled, (state, action) => {
            state.isLoadingMore = false
            const newCoins = action.payload
            state.coins = [...state.coins, ...newCoins]
        })
        builder.addCase(fetchMoreCoin.rejected, (state, action) => {
            state.isLoadingMore = false
        })

        builder.addCase(fetchTrendingCoin.pending, (state, action) => {
            state.isLoadingTrendingCoin = true
        })
        builder.addCase(fetchTrendingCoin.fulfilled, (state, action) => {
            state.isLoadingTrendingCoin = false;
            state.trendingCoins = action.payload;

        })
        builder.addCase(fetchTrendingCoin.rejected, (state) => {
            state.isLoadingTrendingCoin = false;
        })

    }
})

export default CoinSlice.reducer;
export const { increasePage } = CoinSlice.actions
