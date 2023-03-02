import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignIn: false,
    user: null,
    watchList: [],
    error: null
}
const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.error = null
        },

    }
})

export default AuthSlice.reducer
export const { setUser } = AuthSlice.actions