'use client'

import {FC} from 'react'
import ListItem from '../general/list/ListItem'
import InputWithLable from '../general/inputs/InputWithLable'
import { TaxOffice } from '@/app/types/taxOffice.d'
import FederalStateComboBox from '../federalState/FederalStateCombobox'
import { deleteTaxOffice, selectTaxOfficeByUuid, updateTaxOfficeByUuid } from '@/app/store/features/taxOfficeSlice'
import { store } from '@/app/store/store'
import { useDispatch } from 'react-redux'
import { selectFederalStateByUuid } from '@/app/store/features/federalStateSlice'
import TaxOfficeService from '../../services/taxOffice'



interface TaxOfficeListItemProps{
   id:string
}

const TaxOfficeListItem:FC<TaxOfficeListItemProps> = ({
    id
})=>
{
    const dispatch = useDispatch();
    const localTaxOffice = selectTaxOfficeByUuid(store.getState(),id);
    
   
    const changeName = (event: any, taxOffice: TaxOffice) => {
        let changedTaxOffice: TaxOffice = { ...taxOffice };
        changedTaxOffice.name = event.target.value;
        dispatch(updateTaxOfficeByUuid(changedTaxOffice));
      };

    const changeNumber = (event: any, taxOffice: TaxOffice) => {
      let changedTaxOffice: TaxOffice = { ...taxOffice };
      changedTaxOffice.number = Number(event.target.value);
      dispatch(updateTaxOfficeByUuid(changedTaxOffice));
    };
  
    const changeFederalState = (event: { value: string }, taxOffice: TaxOffice) => {
      let changedTaxOffice: TaxOffice = { ...taxOffice };
      const selectedFederalState = selectFederalStateByUuid(store.getState(), event.value);
      if (selectedFederalState) {
        changedTaxOffice.federalState = selectedFederalState;
        dispatch(updateTaxOfficeByUuid(changedTaxOffice));
      }
    };

    const deleteTaxOfficeHandle=(event:any, taxOffice:TaxOffice)=>{
        TaxOfficeService
        .DeleteTaxOffice(taxOffice)
        .then(response => {
            dispatch(deleteTaxOffice(taxOffice))
        })
    }

    const updateTaxOfficeHandle=(event:any, taxOffice:TaxOffice)=>{
        TaxOfficeService
        .UpdateTaxOffice(taxOffice)
        .then(response => {
           
        })
    }
  
  
    return(
       <ListItem key={localTaxOffice.uuid} deleteItem={(event:any) => deleteTaxOfficeHandle(event, localTaxOffice)} updateItem={(event:any) => updateTaxOfficeHandle(event, localTaxOffice)}  children={
            [
                <InputWithLable  onChange={(event:any) => changeName(event, localTaxOffice)} value={localTaxOffice.name} textPosition='horizontal' text='Name'/>,
                <InputWithLable  onChange={(event:any) => changeNumber(event, localTaxOffice)} value={localTaxOffice.number} textPosition='horizontal' text='Nummer'/>,
                <FederalStateComboBox  selected={localTaxOffice.federalState} onChange={(event:any) => changeFederalState(event, localTaxOffice)}/>
            ]
       }/>
       
    )
}

export default TaxOfficeListItem;

