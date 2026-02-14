import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    productError:null,
    productsLoading:false
}

export const productsFetcher=createAsyncThunk(
    "products/getProducts",
    async(_,thunkAPI)=>{
        try{
           const res=await fetch("https://fakestoreapi.com/products")
           const data =await res.json()
           return data
        }catch(err){
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const productSlice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{

    },
   extraReducers:(builder)=>{
      builder.addCase(productsFetcher.rejected,(state,action)=>{
         state.productsLoading=false
         state.productError=action.payload
      })
      .addCase(productsFetcher.pending,(state,action)=>{
        state.productsLoading=true
      })
      .addCase(productsFetcher.fulfilled,(state,action)=>{
        state.productsLoading=false
        state.products=action.payload
      })
   }
})

export default productSlice.reducer