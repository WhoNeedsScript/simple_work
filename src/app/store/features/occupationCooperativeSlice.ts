
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { OccupationCooperative } from "@/app/types/occupationCooperative.d";


export interface OccupationCooperativeState{
    occupationCooperatives:OccupationCooperative[],
    newOccupationCooperative:OccupationCooperative
}

const initialState:OccupationCooperativeState={
    occupationCooperatives:[],
    newOccupationCooperative:  {uuid:"",name: "",description: ""}
};

export const occupationCooperativeSlice = createSlice({
    name:"occupationCooperative",
    initialState,
    reducers:{
        addOccupationCooperative:(state,action:PayloadAction<OccupationCooperative>)=>{
            const occupationCooperativeState = state.occupationCooperatives.find(
                (el:OccupationCooperative) => el.uuid === action.payload.uuid
            );
            if(!occupationCooperativeState){
                state.occupationCooperatives.push(action.payload)
            }
        },

        updateNewOccupationCooperative:(state,action:PayloadAction<OccupationCooperative>)=>{
            state.newOccupationCooperative = action.payload;
         },

         updateOccupationCooperativeByUuid:(state,action:PayloadAction<OccupationCooperative>)=>{
            const updatedOccupationCooperative = action.payload;
            const updatedOccupationCooperativeList = state.occupationCooperatives.map(occupationCooperativeState => {
                if (occupationCooperativeState.uuid === updatedOccupationCooperative.uuid) {
                    return updatedOccupationCooperative;
                }
                return occupationCooperativeState;
            });
            state.occupationCooperatives = updatedOccupationCooperativeList;
         },

 

        addOccupationCooperatives:(state,action:PayloadAction<OccupationCooperative[]>)=>{
            state.occupationCooperatives = action.payload;
        },
        

        deleteOccupationCooperative:(state,action:PayloadAction<OccupationCooperative>)=>{
            const occupationCooperativeState = state.occupationCooperatives.find(
                (el:OccupationCooperative) => el.uuid === action.payload.uuid
            );
            if(occupationCooperativeState){
                state.occupationCooperatives = state.occupationCooperatives.filter(
                    (el:OccupationCooperative)=> el.uuid !== action.payload.uuid
                );
            }
        },
    },
    
});

export const selectOccupationCooperativeByUuid = createSelector(
    (state: RootState) => state.occupationCooperativeState.occupationCooperatives,
    (_:any, uuid: string) => uuid,
    (occupationCooperatives:any, uuid:any) => occupationCooperatives.find((el:any) => el.uuid === uuid) || null
  );

export const {addOccupationCooperative,addOccupationCooperatives, deleteOccupationCooperative,updateNewOccupationCooperative, updateOccupationCooperativeByUuid} = occupationCooperativeSlice.actions;
export default occupationCooperativeSlice.reducer;