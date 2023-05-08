
import { FederalState } from "@/app/types/federalState.d";
import { TaxOffice } from "@/app/types/taxOffice.d";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DistrictCourt } from "@/app/types/districtCourt.d";
import { Company } from "@/app/types/company.d";
import { User } from "@/app/types/user.d";
import user from "@/app/services/user";
import company from "@/app/services/company";

export interface UserState{
    user:User,
    companies:Company[]
}

const initialState:UserState={
    user:{
        uuid:"",
        username:"",
        password:"",
        eMail:"",
    },
    companies:[]
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        updateUser:(state,action:PayloadAction<User>)=>{
           state.user = action.payload;
        },

        updateCompanies:(state,action:PayloadAction<Company[]|[]>)=>{
            state.companies = action.payload;
         },

       
    },
});

export const selectUser = (state: { userState: { user: User } }): User => state.userState.user;
export const selectUserCompanies = (state: { userState: { companies: Company[] } }): Company[] => state.userState.companies;

export const {updateCompanies,updateUser} = userSlice.actions;
export default userSlice.reducer;