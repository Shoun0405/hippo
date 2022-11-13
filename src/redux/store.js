import { configureStore } from "@reduxjs/toolkit";
import { market } from "./redux-slices/addMarketSlice";


export const store = configureStore({
    reducer:{
        addMarkets:market
    }
})