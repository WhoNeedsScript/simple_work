
import { FederalState } from "@/app/types/federalState.d";
import { TaxOffice } from "@/app/types/taxOffice.d";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TaxOfficeState{
    taxOffices:TaxOffice[]
    selectedTaxOffice:TaxOffice
}

const initialState:TaxOfficeState={
    taxOffices:[],
    selectedTaxOffice:{uuid:"",name:"",number:0,federalState:{uuid:"",abbreviation:"",name:""}}
};

export const taxOfficeSlice = createSlice({
    name:"taxOffice",
    initialState,
    reducers:{

        addTaxOffices:(state,action:PayloadAction<TaxOffice[]>)=>{
            state.taxOffices = action.payload;
        },
        

        addTaxOffice:(state,action:PayloadAction<TaxOffice>)=>{
            const taxOffice = state.taxOffices.find(
                (el:TaxOffice) => el.uuid === action.payload.uuid
            );
            if(!taxOffice){
                state.taxOffices.push(action.payload)
            }
        },

        updateSelectedTaxOffice:(state,action:PayloadAction<TaxOffice>)=>{
           state.selectedTaxOffice = action.payload;
        },

        updateTaxOfficeByUuid:(state,action:PayloadAction<TaxOffice>)=>{
            const updatedTaxOffice = action.payload;
            const updatedTaxOfficeList = state.taxOffices.map(taxOffice => {
                if (taxOffice.uuid === updatedTaxOffice.uuid) {
                return updatedTaxOffice;
                }
                return taxOffice;
            });
            state.taxOffices = updatedTaxOfficeList;
         },

        deleteTaxOffice:(state,action:PayloadAction<TaxOffice>)=>{
            const taxOffice = state.taxOffices.find(
                (el:TaxOffice) => el.uuid === action.payload.uuid
            );
            if(taxOffice){
                state.taxOffices = state.taxOffices.filter(
                    (el:TaxOffice)=> el.uuid !== action.payload.uuid
                );
            }
        },
    },
});

export const selectTaxOfficeByUuid = createSelector(
    (state: RootState) => state.taxOfficeState.taxOffices,
    (_:any, uuid: string) => uuid,
    (taxOffices:any, uuid:any) => taxOffices.find((el:any) => el.uuid === uuid) || null
  );

export const {addTaxOffices,addTaxOffice, deleteTaxOffice,updateSelectedTaxOffice,updateTaxOfficeByUuid} = taxOfficeSlice.actions;
export default taxOfficeSlice.reducer;