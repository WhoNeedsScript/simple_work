
import { FederalState } from "@/app/types/federalState.d";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import federalState from "@/app/services/federalState";

export interface FederalStateState{
    federalStates:FederalState[],
    newFederalState:FederalState
}

const initialState:FederalStateState={
    federalStates:[],
    newFederalState:{name:"",abbreviation:""}
};

export const federalStateSlice = createSlice({
    name:"federalState",
    initialState,
    reducers:{

        addFederalStates:(state,action:PayloadAction<FederalState[]>)=>{
            state.federalStates = action.payload;
        },

        addFederalState:(state,action:PayloadAction<FederalState>)=>{
            const federalState = state.federalStates.find(
                (el:FederalState) => el.uuid === action.payload.uuid
            );
            if(!federalState){
                state.federalStates.push(action.payload)
            }
        },

        updateNewFederalState:(state,action:PayloadAction<FederalState>)=>{
            state.newFederalState = action.payload;
         },

         updateFederalStateByUuid:(state,action:PayloadAction<FederalState>)=>{
            const updatedFederalState = action.payload;
            const updatedFederalStateList = state.federalStates.map(federalState => {
                if (federalState.uuid === updatedFederalState.uuid) {
                return updatedFederalState;
                }
                return federalState;
            });
            state.federalStates = updatedFederalStateList;
         },

 

       

        deleteFederalState:(state,action:PayloadAction<FederalState>)=>{
            const federalState = state.federalStates.find(
                (el:FederalState) => el.uuid === action.payload.uuid
            );
            if(federalState){
                state.federalStates = state.federalStates.filter(
                    (el:FederalState)=> el.uuid !== action.payload.uuid
                );
            }
        },
    },
    
});

export const selectFederalStateByUuid = createSelector(
    (state: RootState) => state.federalStateState.federalStates,
    (_:any, uuid: string) => uuid,
    (federalStates:any, uuid:any) => federalStates.find((el:any) => el.uuid === uuid) || null
  );

export const {addFederalState,addFederalStates, deleteFederalState,updateNewFederalState, updateFederalStateByUuid} = federalStateSlice.actions;
export default federalStateSlice.reducer;