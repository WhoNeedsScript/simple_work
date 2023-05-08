
import { FederalState } from "@/app/types/federalState.d";
import { TaxOffice } from "@/app/types/taxOffice.d";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DistrictCourt } from "@/app/types/districtCourt.d";
import { Company } from "@/app/types/company.d";

export interface CompanyState{
    companies:Company[]
    newCompany:Company
}

const initialState:CompanyState={
    companies:[],
    newCompany:{
        uuid: "",
        name: "",
        owner:"",
        mobilenumber:"",
        eMail:"",
        streetnumber:"",
        street:"",
        postcode:"",
        city:"",
        federalState:{
            uuid:"",
            abbreviation:"",
            name:""
        },
        country:"",
        companyNumber:"",
        companySize:0,
        branch:"",
        occupationCooperative:{
            uuid:"",
            name:"",
            description:""
        },
        legalForm:{
            uuid:"",
            name:"",
            hbr:false
        },
        hbr:"",
        districtCourt:{
            uuid:"",
            name:"",
            federalState:{
                uuid:"",
                abbreviation:"",
                name:""
            }
        },
        taxOffice:{
            uuid:"",
            name:"",
            number:0,
            federalState:{
                uuid:"",
                abbreviation:"",
                name:""
            },

        },
        steuerIdent:"",
        taxNumber:""
    }
};

export const companySlice = createSlice({
    name:"company",
    initialState,
    reducers:{

        addCompanies:(state,action:PayloadAction<Company[]>)=>{
            state.companies = action.payload;
        },

        addCompany:(state,action:PayloadAction<Company>)=>{
            const company = state.companies.find(
                (el:Company) => el.uuid === action.payload.uuid
            );
            if(!company){
                state.companies.push(action.payload)
            }
        },

        updateNewCompany:(state,action:PayloadAction<Company>)=>{
           state.newCompany = action.payload;
        },

        updateCompanyByUuid:(state,action:PayloadAction<Company>)=>{
            const updatedCompany = action.payload;
            const updatedCompaniesList:Company[] = state.companies.map((company:Company) => {
                if (company.uuid === updatedCompany.uuid) {
                return updatedCompany;
                }
                return company;
            });
            state.companies = updatedCompaniesList;
         },

        deleteCompany:(state,action:PayloadAction<Company>)=>{
            const company = state.companies.find(
                (el:Company) => el.uuid === action.payload.uuid
            );
            if(company){
                state.companies = state.companies.filter(
                    (el:Company)=> el.uuid !== action.payload.uuid
                );
            }
        },
    },
});

export const selectCompanyByUuid = createSelector(
    (state: RootState) => state.companyState.companies,
    (_:any, uuid: string) => uuid,
    (companies:any, uuid:any) => companies.find((el:any) => el.uuid === uuid) || null
  );

export const {addCompanies,addCompany, deleteCompany,updateNewCompany,updateCompanyByUuid} = companySlice.actions;
export default companySlice.reducer;