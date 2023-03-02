import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { detailCoinUrl } from '../../api/api'

const initialState = {
    idCoin: '',
    isLoading: false,
    coin: null,
}
export const fetchDetailCoin = createAsyncThunk(
    'detailCoin/fetchDetailCoin',
    async (name, thunkAPI) => {
        const { idCoin } = thunkAPI.getState().detailCoin;
        const url = detailCoinUrl(idCoin)
        try {
            const resp = await axios.get(url);
            return resp.data
        }
        catch (err) {
            thunkAPI.rejectWithValue("get detail coin with a error", err)
        }
    }
)
const DetailCoinSlice = createSlice({
    name: 'detail_coin',
    reducers: {
        setCoinId: (state, action) => {
            state.coin = null;
            state.idCoin = action.payload
        }
    },
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDetailCoin.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchDetailCoin.fulfilled, (state, action) => {
            state.isLoading = false
            state.coin = action.payload;
        })
        builder.addCase(fetchDetailCoin.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
})


export default DetailCoinSlice.reducer

export const { setCoinId } = DetailCoinSlice.actions