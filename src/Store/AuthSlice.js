import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggIn:false,
        user: 'youssef abourehab'
    },
    reducers: {
        loginOut: (state, action) => {
            
            state.isLoggIn = !state.isLoggIn
        },
      
    }
})

export const  {loginOut} = authSlice.actions
export default authSlice.reducer