'use client'

import {FC, useEffect} from 'react'
import ComboboxWithLabel from '../general/combobox/ComboBoxWithLabel'
import { useDispatch, useSelector } from 'react-redux'
import { OccupationCooperative } from '@/app/types/occupationCooperative.d'
import OccupationCooperativeService from '../../services/occupationCooperative'
import { addOccupationCooperatives } from '@/app/store/features/occupationCooperativeSlice'



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

    const dispatch = useDispatch();

  useEffect(() => {
    OccupationCooperativeService
      .GetAllOccupationCooperatives()
      .then(response => {
        dispatch(addOccupationCooperatives(response.resultOccupationCooperatives))
      })
  }, []);

    const values = occupationCooperatives.map((data:OccupationCooperative) => (
        { label: data.name, value: data.uuid }
    ))

    return(
      <ComboboxWithLabel text='Berufsgenossenschaft' textPosition='horizontal' selected={selected}  data={values} onChange={onChange}/>
    )
}

export default OccupationCooperativeComboBox

