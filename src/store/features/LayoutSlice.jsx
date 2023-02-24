import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: false,
}
const LayoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {
            if (state.isSidebarOpen) {
                state.isSidebarOpen = false
            }
            else {
                state.isSidebarOpen = true
            }
        },
        closeSidebar: (state) => {
            if (state.isSidebarOpen) {
                state.isSidebarOpen = false
            }
        }
    },
})

export const { toggleSidebar, closeSidebar } = LayoutSlice.actions
export default LayoutSlice.reducer