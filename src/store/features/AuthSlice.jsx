import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignIn: false,
    user: null,
    watchList: [],
}
const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.error = null
        },
        updateWatchList: (state, action) => {
            state.watchList = action.payload
        },
        setDefaultWatchList: (state) => {
            state.watchList = []
        }
    }
})

export default AuthSlice.reducer
export const { setUser, updateWatchList, setDefaultWatchList } = AuthSlice.actions