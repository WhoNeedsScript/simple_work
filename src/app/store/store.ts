import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {taxOfficeSlice} from './features/taxOfficeSlice';
import {federalStateSlice} from './features/federalStateSlice';
import { legalFormSlice } from './features/legalFormState';
import {occupationCooperativeSlice} from './features/occupationCooperativeSlice';
import {districtCourtSlice} from './features/districtCourtSlice';
import {companySlice} from './features/companySlice';
import {userSlice} from './features/userSlice';
import { createCompanyModelSlice } from './views/createCompanyModel';


export const store = configureStore({
    reducer:{
        taxOfficeState: taxOfficeSlice.reducer,
        federalStateState: federalStateSlice.reducer,
        legalFormState: legalFormSlice.reducer,
        occupationCooperativeState:occupationCooperativeSlice.reducer,
        districtCourtState:districtCourtSlice.reducer,
        companyState:companySlice.reducer,
        userState:userSlice.reducer,
        createCompanyModalState:createCompanyModelSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch:()=> AppDispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;