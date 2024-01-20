import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
    IDLE:'idle',
    LOADING:'loading',
    ERROR:'error'
})
const productSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        status:STATUS.IDLE
    }
    ,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchproducts.pending,(state,action)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchproducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = STATUS.IDLE
        })
        .addCase(fetchproducts.rejected,(state,sction)=>{
            state.status= STATUS.ERROR
        })
    }
})
export default productSlice.reducer
// thunk
export const fetchproducts = createAsyncThunk("product/fetch",async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
    console.log(data)
})