import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "./features/ThemeSlice";
import LayoutSlice from './features/LayoutSlice'
import CoinSlice from "./features/CoinSlice";
import DetailCoinSlice from "./features/DetailCoinSlice";
import AuthSlice from "./features/AuthSlice";

const store = configureStore({
    reducer: {
        theme: ThemeSlice,
        layout: LayoutSlice,
        coin: CoinSlice,
        detailCoin: DetailCoinSlice,
        auth: AuthSlice
    }
})

export default store