// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit"
import countReducer from "../slices/countSlice"
import productReducer from "../slices/productsSlice"

export const store=configureStore({
    reducer:{
        count:countReducer,
        product:productReducer
    }
})