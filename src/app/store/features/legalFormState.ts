
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LegalForm } from "@/app/types/legalform.d";

export interface LegalFormState{
    legalForms:LegalForm[],
    newLegalForm:LegalForm
}

const initialState:LegalFormState={
    legalForms:[],
    newLegalForm:  {uuid:"",name: "",hbr: false}
};

export const legalFormSlice = createSlice({
    name:"legalForm",
    initialState,
    reducers:{

        addLegalForms:(state,action:PayloadAction<LegalForm[]>)=>{
            state.legalForms = action.payload;
        },
        
        addLegalForm:(state,action:PayloadAction<LegalForm>)=>{
            const legalFormState = state.legalForms.find(
                (el:LegalForm) => el.uuid === action.payload.uuid
            );
            if(!legalFormState){
                state.legalForms.push(action.payload)
            }
        },

        updateNewLegalForm:(state,action:PayloadAction<LegalForm>)=>{
            state.newLegalForm = action.payload;
         },

         updateLegalFormByUuid:(state,action:PayloadAction<LegalForm>)=>{
            const updatedLegalForm = action.payload;
            const updatedLegalFormList = state.legalForms.map(legalFormState => {
                if (legalFormState.uuid === updatedLegalForm.uuid) {
                return updatedLegalForm;
                }
                return legalFormState;
            });
            state.legalForms = updatedLegalFormList;
         },

 

        
        

        deleteLegalForm:(state,action:PayloadAction<LegalForm>)=>{
            const legalFormState = state.legalForms.find(
                (el:LegalForm) => el.uuid === action.payload.uuid
            );
            if(legalFormState){
                state.legalForms = state.legalForms.filter(
                    (el:LegalForm)=> el.uuid !== action.payload.uuid
                );
            }
        },
    },
    
});

export const selectLegalFormByUuid = createSelector(
    (state: RootState) => state.legalFormState.legalForms,
    (_:any, uuid: string) => uuid,
    (legalFormStates:any, uuid:any) => legalFormStates.find((el:any) => el.uuid === uuid) || null
  );

export const {addLegalForm,addLegalForms, deleteLegalForm,updateNewLegalForm, updateLegalFormByUuid} = legalFormSlice.actions;
export default legalFormSlice.reducer;