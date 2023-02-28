import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isSignIn: false,
    user: null,
    watchList: []
}
const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default AuthSlice.reducer
export const { setUser } = AuthSlice.actions