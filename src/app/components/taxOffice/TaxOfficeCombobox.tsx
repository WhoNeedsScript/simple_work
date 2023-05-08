'use client'

import {FC} from 'react'
import ComboboxWithLabel from '../general/combobox/ComboBoxWithLabel'
import { useSelector } from 'react-redux'
import { OccupationCooperative } from '@/app/types/occupationCooperative.d'
import { TaxOffice } from '@/app/types/taxOffice.d'



interface TaxOfficeComboBoxProps{
    onChange:any,
    selected?:any
}

const TaxOfficeComboBox:FC<TaxOfficeComboBoxProps> = ({
    onChange,
    selected
})=>
{   
    const taxOffices = useSelector((state:any)=>state.taxOfficeState.taxOffices);

    const values = taxOffices.map((data:TaxOffice) => (
        { label: `${data.name} [${data.number}] ${data.federalState.abbreviation}`, value: data.uuid }
    ))

    return(
      <ComboboxWithLabel text='Finanzamt' textPosition='horizontal' selected={selected}  data={values} onChange={onChange}/>
    )
}

export default TaxOfficeComboBox

