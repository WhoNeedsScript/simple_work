
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

export interface CreateCompanyModelState{
    isOpen:boolean,

}
const initialState:CreateCompanyModelState={
   isOpen:false,

};

export const createCompanyModelSlice= createSlice({
    name:"CreateCompanyModel",
    initialState,
    reducers:{
       
        updateIsOpen:(state,action:PayloadAction<boolean>)=>{
           state.isOpen = action.payload;
        },

     
       
    },
});


export const {updateIsOpen} = createCompanyModelSlice.actions;
export default createCompanyModelSlice.reducer;