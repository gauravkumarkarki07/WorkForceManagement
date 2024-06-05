import { createSlice } from "@reduxjs/toolkit";

const initialState={
    session:null
}

export const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.session=action.payload;
        },
        logoutSuccess:(state)=>{
            state.session=null;
        }
    }
})

export default userSlice.reducer;
export const {loginSuccess,logoutSuccess}=userSlice.actions;