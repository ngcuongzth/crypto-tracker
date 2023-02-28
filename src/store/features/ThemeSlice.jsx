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
            if (theme) {
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
                localStorage.setItem('theme', 'light-theme')
            }
            else {
                state.colorTheme = 'dark-theme'
                localStorage.setItem('theme', 'dark-theme')
            }
        }
    },
})
export const { getInitialTheme, toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer