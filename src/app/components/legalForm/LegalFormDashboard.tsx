'use client';

import {FC, use, useEffect, useState} from 'react'

import Button from '../glassmorph/Button';
import LegalFormService from '../../services/legalForm'
import InputWithLable from '../general/inputs/InputWithLable';
import LegalFormList from './LegalFormList';
import { useDispatch, useSelector } from 'react-redux';
import { addLegalForm, addLegalForms, updateNewLegalForm } from '@/app/store/features/legalFormState';
import { LegalForm } from '@/app/types/legalform.d';
import LegalFormCheckBox from './LegalFormCheckbox';


interface LegalFormDashboardProps{
  
}

const LegalFormDashboard:FC<LegalFormDashboardProps> = ({
  
})=>
{
    const dispatch= useDispatch();
 
    useEffect(() => {
      LegalFormService
        .GetAllLegalForms()
        .then(response => {
          dispatch(addLegalForms(response.resultLegalForms))
        })
    }, []);

    const newLegalForm = useSelector((state:any)=>state.legalFormState.newLegalForm)
   
    const changeName=(event:any, legalForm:LegalForm)=>{
      let changeLegalForm:LegalForm = {...legalForm};
      changeLegalForm.name = event.target.value
      dispatch(updateNewLegalForm(changeLegalForm))
    }
    const changeHBR = (event:any, legalForm:LegalForm) => {
      let changeLegalForm:LegalForm = {...legalForm};
      changeLegalForm.hbr = event.target.checked
      dispatch(updateNewLegalForm(changeLegalForm))
      }
    
    const createLegalForomHandle = (event:any)=>{
      event.preventDefault();
      if(newLegalForm.name.length !== 0 )
      {
        LegalFormService
          .CreateLegalForm(newLegalForm)
          .then(response => {
            let changedLegalForm:LegalForm = {...newLegalForm};
            changedLegalForm.uuid =  response
            dispatch(addLegalForm(changedLegalForm))
            dispatch(updateNewLegalForm({uuid:"",name: "",hbr: false}));
          })
      }
    }  

    return(
        <div>
            <div className='flex place-content-between'>
                <InputWithLable text='Name'
                  textPosition='horizontal'
                  placeholder='Name'
                  value={newLegalForm.name}
                  onChange={(event:any) => changeName(event, newLegalForm)}
                   />
                <LegalFormCheckBox checkedState={newLegalForm.hbr} onChange={(event:any) => changeHBR(event, newLegalForm)} />  
                <Button onClick={createLegalForomHandle} label='Speichern'/>
            </div>
            <div>
                <LegalFormList/>
            </div>
            
        </div>
    )
}


export default LegalFormDashboard;