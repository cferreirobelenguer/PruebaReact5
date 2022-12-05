import { createSlice } from "@reduxjs/toolkit";

export const counterApp=createSlice({
    name:'counter',
    initialState:{
        counter:20
    },
    reducers:{
        setIncrement:(state)=>{
            state.counter+=1
        },
        setDecrement:(state)=>{
            state.counter-=1
        },
        setReset:(state)=>{
            state.counter=20
        }
    }
})
export const {setIncrement, setDecrement , setReset}= counterApp.actions