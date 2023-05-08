
import { FederalState } from "@/app/types/federalState.d";
import { TaxOffice } from "@/app/types/taxOffice.d";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DistrictCourt } from "@/app/types/districtCourt.d";

export interface DistrictCourtState{
    districtCourts:DistrictCourt[]
    newDistrictCourt:DistrictCourt
}

const initialState:DistrictCourtState={
    districtCourts:[],
    newDistrictCourt:{uuid:"",name:"",federalState:{uuid:"",abbreviation:"",name:""}}
};

export const districtCourtSlice = createSlice({
    name:"districtCourt",
    initialState,
    reducers:{

        addDistrictCourts:(state,action:PayloadAction<DistrictCourt[]>)=>{
            state.districtCourts = action.payload;
        },

        addDistrictCourt:(state,action:PayloadAction<DistrictCourt>)=>{
            const districtCourt = state.districtCourts.find(
                (el:DistrictCourt) => el.uuid === action.payload.uuid
            );
            if(!districtCourt){
                state.districtCourts.push(action.payload)
            }
        },

        updateNewDistrictCourt:(state,action:PayloadAction<DistrictCourt>)=>{
           state.newDistrictCourt = action.payload;
        },

        updateDistrictCourtByUuid:(state,action:PayloadAction<DistrictCourt>)=>{
            const updatedDistrictCourt = action.payload;
            const updatedDistrictCourtList = state.districtCourts.map(districtCourt => {
                if (districtCourt.uuid === updatedDistrictCourt.uuid) {
                return updatedDistrictCourt;
                }
                return districtCourt;
            });
            state.districtCourts = updatedDistrictCourtList;
         },

        deleteDistrictCourt:(state,action:PayloadAction<DistrictCourt>)=>{
            const districtCourt = state.districtCourts.find(
                (el:DistrictCourt) => el.uuid === action.payload.uuid
            );
            if(districtCourt){
                state.districtCourts = state.districtCourts.filter(
                    (el:DistrictCourt)=> el.uuid !== action.payload.uuid
                );
            }
        },
    },
});

export const selectDistrictCourtByUuid = createSelector(
    (state: RootState) => state.districtCourtState.districtCourts,
    (_:any, uuid: string) => uuid,
    (districtCourts:any, uuid:any) => districtCourts.find((el:any) => el.uuid === uuid) || null
  );

export const {addDistrictCourts,addDistrictCourt, deleteDistrictCourt,updateNewDistrictCourt,updateDistrictCourtByUuid} = districtCourtSlice.actions;
export default districtCourtSlice.reducer;