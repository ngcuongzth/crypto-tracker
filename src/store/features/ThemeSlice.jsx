import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorTheme: 'dark-theme'
}
const ThemeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        getInitialTheme: (state) => {
            const theme = localStorage.getItem('theme')
            // default theme
            if (theme && typeof theme !== 'string') {
                state.colorTheme = theme;
            }
            else {
                state.colorTheme = 'dark-theme'
                localStorage.setItem('theme', state.colorTheme)
            }
        },
        toggleTheme: (state) => {
            if (state.colorTheme === 'dark-theme') {
                state.colorTheme = 'light-theme'
            }
            else {
                state.colorTheme = 'dark-theme'
            }
        }
    },
})
export const { getInitialTheme, toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer