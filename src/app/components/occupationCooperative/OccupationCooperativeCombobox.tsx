'use client'

import {FC} from 'react'
import ComboboxWithLabel from '../general/combobox/ComboBoxWithLabel'
import { useSelector } from 'react-redux'
import { OccupationCooperative } from '@/app/types/occupationCooperative.d'



interface OccupationCooperativeComboBoxProps{
    onChange:any,
    selected?:any
}

const OccupationCooperativeComboBox:FC<OccupationCooperativeComboBoxProps> = ({
    onChange,
    selected
})=>
{   
    const occupationCooperatives = useSelector((state:any)=>state.occupationCooperativeState.occupationCooperatives);

    const values = occupationCooperatives.map((data:OccupationCooperative) => (
        { label: data.name, value: data.uuid }
    ))

    return(
      <ComboboxWithLabel text='Berufsgenossenschaft' textPosition='horizontal' selected={selected}  data={values} onChange={onChange}/>
    )
}

export default OccupationCooperativeComboBox

