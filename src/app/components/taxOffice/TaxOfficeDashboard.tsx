'use client';

import {FC, useEffect, useState} from 'react'
import Button from '../glassmorph/Button';
import TaxOfficeService from '../../services/taxOffice'
import { TaxOffice } from '@/app/types/taxOffice.d';
import TaxOfficeList from './TaxOfficeList';
import InputWithLable from '../general/inputs/InputWithLable';
import { FederalState } from '@/app/types/federalState.d';
import FederalStateComboBox from '../federalState/FederalStateCombobox';
import { addTaxOffice, addTaxOffices, updateSelectedTaxOffice } from '@/app/store/features/taxOfficeSlice';
import { useDispatch, useSelector } from 'react-redux';
import FederalStateService from '../../services/federalState'
import { addFederalStates, selectFederalStateByUuid } from '@/app/store/features/federalStateSlice';
import { RootState, store } from '@/app/store/store';


interface TaxOfficeDashboardProps{
  
}

const TaxOfficeDashboard:FC<TaxOfficeDashboardProps> = ({
  
})=>
{
  const dispatch = useDispatch();

    useEffect(() => {
      TaxOfficeService
        .GetAllTaxOffices()
        .then(response => {
          dispatch(addTaxOffices(response.resultTaxOffices));
          });
          
        FederalStateService
          .GetAllFederalStates()
          .then(response => {
          
            dispatch(addFederalStates(response.resultFederalStates))
          })
    }, []);
   
    const localselectedTaxOffice = useSelector((state:any)=>state.taxOfficeState.selectedTaxOffice)
   

    const changeNumber = (event: any, taxOffice: TaxOffice) => {
      let changedTaxOffice: TaxOffice = { ...taxOffice };
      changedTaxOffice.number = Number(event.target.value);
      dispatch(updateSelectedTaxOffice(changedTaxOffice));
    };
  
    const changeFederalState = (event: { value: string }, taxOffice: TaxOffice) => {
      let changedTaxOffice: TaxOffice = { ...taxOffice };
      const selectedFederalState = selectFederalStateByUuid(store.getState(), event.value);
      if (selectedFederalState) {
        changedTaxOffice.federalState = selectedFederalState;
        dispatch(updateSelectedTaxOffice(changedTaxOffice));
      }
    };
  
    const changeName = (event: any, taxOffice: TaxOffice) => {
      let changedTaxOffice: TaxOffice = { ...taxOffice };
      changedTaxOffice.name = event.target.value;
      dispatch(updateSelectedTaxOffice(changedTaxOffice));
    };
  
    
    const createTaxOfficeHandle = (event:any)=>{
        event.preventDefault();
        if(localselectedTaxOffice.name.length !== 0 && localselectedTaxOffice.number !== 0)
        {
          TaxOfficeService
          .CreateTaxOffice(localselectedTaxOffice)
          .then(response => {
            let changedTaxOffice:TaxOffice = {...localselectedTaxOffice};
            changedTaxOffice.uuid =  response
            dispatch(addTaxOffice(changedTaxOffice));
            dispatch(updateSelectedTaxOffice({uuid:"",name:"",number:0,federalState:{uuid:"",abbreviation:"",name:""}}));
          })
        }
    }
  
    return (
      <div>
        <div className="flex place-content-between">
          <InputWithLable
            text="Name"
            textPosition="horizontal"
            placeholder="Name"
            value={localselectedTaxOffice.name}
            onChange={(event:any) => changeName(event, localselectedTaxOffice)}
          />
          <InputWithLable
            text="Nummer"
            textPosition="horizontal"
            placeholder="Nummer"
            value={localselectedTaxOffice.number}
            onChange={(event:any) => changeNumber(event, localselectedTaxOffice)}
          />
          <FederalStateComboBox selected={localselectedTaxOffice.federalState} onChange={(event:any) => changeFederalState(event, localselectedTaxOffice)} />
          <Button onClick={createTaxOfficeHandle} label="Speichern" />
        </div>
        <div>
          <TaxOfficeList />
        </div>
      </div>
    );
  };


export default TaxOfficeDashboard;