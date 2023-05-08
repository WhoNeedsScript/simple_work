'use client';

import {FC, use, useEffect, useState} from 'react'
import Input from '../general/inputs/input';
import Link from 'next/link';
import Button from '../glassmorph/Button';
import OccupationCooperativeService from '../../services/occupationCooperative'
import InputWithLable from '../general/inputs/InputWithLable';
import CheckBoxWithLabel from '../general/checkboxes/CheckboxWithLabel';
import ClientOnly from '../general/ClientOnly';
import { useDispatch, useSelector } from 'react-redux';
import { addLegalForm, addLegalForms, updateNewLegalForm } from '@/app/store/features/legalFormState';
import { LegalForm } from '@/app/types/legalform.d';

import legalForm from '../../services/legalForm';
import { OccupationCooperative } from '@/app/types/occupationCooperative.d';
import { addOccupationCooperative, addOccupationCooperatives, updateNewOccupationCooperative } from '@/app/store/features/occupationCooperativeSlice';
import OccupationCooperativeList from './OccupationCooperativeList';

interface OccupationCooperativeDashboardProps{
  
}

const OccupationCooperativeDashboard:FC<OccupationCooperativeDashboardProps> = ({
  
})=>
{
    const dispatch= useDispatch();
 
    useEffect(() => {
      OccupationCooperativeService
        .GetAllOccupationCooperatives()
        .then(response => {
          dispatch(addOccupationCooperatives(response.resultOccupationCooperatives))
        })
    }, []);

    const newOccupationCooperative = useSelector((state:any)=>state.occupationCooperativeState.newOccupationCooperative)
   
    const changeName=(event:any, occupationCooperative:OccupationCooperative)=>{
      let changeOccupationCooperative:OccupationCooperative = {...occupationCooperative};
      changeOccupationCooperative.name = event.target.value
      dispatch(updateNewOccupationCooperative(changeOccupationCooperative))
    }
    const changeDescription= (event:any, occupationCooperative:OccupationCooperative) => {
      let changeOccupationCooperative:OccupationCooperative = {...occupationCooperative};
      changeOccupationCooperative.description = event.target.value
      dispatch(updateNewOccupationCooperative(changeOccupationCooperative))
      }
    
    const createOccupationCooperativeHandle = (event:any)=>{
      event.preventDefault();
      if(newOccupationCooperative.name.length !== 0 && newOccupationCooperative.description.length !== 0)
      {
        OccupationCooperativeService
          .CreateOccupationCooperative(newOccupationCooperative)
          .then(response => {
            let changedOccupationCooperative:OccupationCooperative = {...newOccupationCooperative};
            changedOccupationCooperative.uuid =  response
            dispatch(addOccupationCooperative(changedOccupationCooperative))
            dispatch(updateNewOccupationCooperative({uuid:"",name: "",description: ""}));
          })
      }
    }  

    return(
        <div>
            <div className='flex place-content-between'>
                <InputWithLable text='Name'
                  textPosition='horizontal'
                  placeholder='Name'
                  value={newOccupationCooperative.name}
                  onChange={(event:any) => changeName(event, newOccupationCooperative)}
                   />
                <InputWithLable text='Beschreibung'
                  textPosition='horizontal'
                  placeholder='Beschreibung'
                  value={newOccupationCooperative.description}
                  onChange={(event:any) => changeDescription(event, newOccupationCooperative)}
                   />
                <Button onClick={createOccupationCooperativeHandle} text='Speichern'/>
            </div>
            <div>
                <OccupationCooperativeList/>
            </div>
            
        </div>
    )
}


export default OccupationCooperativeDashboard;