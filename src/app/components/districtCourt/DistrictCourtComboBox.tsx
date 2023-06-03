'use client'

import {FC, useEffect} from 'react'
import ComboboxWithLabel from '../general/combobox/ComboBoxWithLabel'
import { useDispatch, useSelector } from 'react-redux'
import DistrictCourtService from '../../services/districtCourt'

import { DistrictCourt } from '@/app/types/districtCourt.d'
import { addDistrictCourts } from '@/app/store/features/districtCourtSlice'



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
    const dispatch = useDispatch();

    useEffect(() => {
        DistrictCourtService
          .GetAllDistrictCourts()
          .then(response => {
            dispatch(addDistrictCourts(response.resultDistrictCourts))
          })
    }, []);
  

    const districtCourts = useSelector((state:any)=>state.districtCourtState.districtCourts);

    const values = districtCourts.map((data:DistrictCourt) => (
        { label: `${data.name} ${data.federalState.abbreviation}`, value: data.uuid }
    ))

    return(
      <ComboboxWithLabel text='Amtsgericht' textPosition='horizontal' selected={selected} placeholder={placeholder}  data={values} onChange={onChange}/>
    )
}

export default DistrictCourtComboBox

