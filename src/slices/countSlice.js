// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
const countSlice= createSlice({
    name:"count",
    initialState:initialState,
    reducers:{
        incrementCount:(state,action)=>{
            state.count++;
        },
        decrementCount:(state,action)=>{
           state.count--;
        }
    }
})

export const {incrementCount,decrementCount}=countSlice.actions

export default countSlice.reducer