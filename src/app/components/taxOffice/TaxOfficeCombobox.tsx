'use client'

import {FC, useEffect} from 'react'
import ComboboxWithLabel from '../general/combobox/ComboBoxWithLabel'
import { useDispatch, useSelector } from 'react-redux'
import { OccupationCooperative } from '@/app/types/occupationCooperative.d'
import { TaxOffice } from '@/app/types/taxOffice.d'
import TaxOfficeService from '../../services/taxOffice'
import FederalStateService from '../../services/federalState'
import { addFederalStates } from '@/app/store/features/federalStateSlice'
import { addTaxOffices } from '@/app/store/features/taxOfficeSlice'


interface TaxOfficeComboBoxProps{
    onChange:any,
    selected?:any
}

const TaxOfficeComboBox:FC<TaxOfficeComboBoxProps> = ({
    onChange,
    selected
})=>
{  
    const dispatch = useDispatch()
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
    const taxOffices = useSelector((state:any)=>state.taxOfficeState.taxOffices);

    const values = taxOffices.map((data:TaxOffice) => (
        { label: `${data.name} [${data.number}] ${data.federalState.abbreviation}`, value: data.uuid }
    ))

    return(
      <ComboboxWithLabel text='Finanzamt' textPosition='horizontal' selected={selected}  data={values} onChange={onChange}/>
    )
}

export default TaxOfficeComboBox

