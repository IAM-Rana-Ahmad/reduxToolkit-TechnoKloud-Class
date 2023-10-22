import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const registerUser = createAsyncThunk("post", async (data) => {
    try {
        const response = await axios.post("https://64f0f9e18a8b66ecf77a4c66.mockapi.io/ReduxToolkit-Practice", data)
        return response.data;
    } catch (error) {
        console.log("An unexpected error is occured", error);
    }
})

export const getUser = createAsyncThunk("get", async () => {
    try {
        const response = await axios.get("https://64f0f9e18a8b66ecf77a4c66.mockapi.io/ReduxToolkit-Practice")
        return response.data;
    } catch (error) {
        console.log("An unexpected error is occured", error);
    }
})



export const authUser = createSlice({
    name: "authUser",
    initialState: {
        isLoading:false,
        data: [],
        error:null,
    },
    reducers: {},
    extraReducers:{
        [registerUser.pending]:(state)=>{
           state.isLoading=true;
           state.error=null;
        },
        [registerUser.fulfilled] : (state)=>{
            state.isLoading=false;
            state.error=null;
        },
        [registerUser.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        [getUser.pending]:(state)=>{
            state.isLoading=true;
            state.error=null;
         },
         [getUser.fulfilled] : (state,action)=>{
             state.isLoading=false;
             state.data=action.payload;
             state.error=null;
         },
         [getUser.rejected]:(state,action)=>{
             state.isLoading=false;
             state.error=action.payload;
         }
    }
})


export default authUser.reducer;