'use client'

import {FC} from 'react'
import ComboboxWithLabel from '../general/combobox/ComboBoxWithLabel'
import { useSelector } from 'react-redux'
import { OccupationCooperative } from '@/app/types/occupationCooperative.d'
import { TaxOffice } from '@/app/types/taxOffice.d'



interface DistrictCourtComboBoxProps{
    onChange:any,
    selected?:any,
    placeholder?:string
}

const DistrictCourtComboBox:FC<DistrictCourtComboBoxProps> = ({
    onChange,
    selected,
    placeholder
})=>
{   
    const districtCourts = useSelector((state:any)=>state.districtCourtState.districtCourts);

    const values = districtCourts.map((data:TaxOffice) => (
        { label: `${data.name} ${data.federalState.abbreviation}`, value: data.uuid }
    ))

    return(
      <ComboboxWithLabel text='Finanzamt' textPosition='horizontal' selected={selected} placeholder={placeholder}  data={values} onChange={onChange}/>
    )
}

export default DistrictCourtComboBox

