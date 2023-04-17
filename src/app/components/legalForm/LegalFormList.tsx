'use client';

import {FC, use, useEffect, useState} from 'react'
import Input from '../general/inputs/input';
import Link from 'next/link';
import Button from '../glassmorph/Button';
import LegalFormService from '../../services/legalForm'
import InputWithLable from '../general/inputs/InputWithLable';
import ScrollableList from '../general/list/ScrollableList';
import ListItem from '../general/list/ListItem';
import legalForm from '../../services/legalForm';
import { hasSubscribers } from 'diagnostics_channel';
import { LegalForm } from '@/app/types/legalForm.d';

interface LegalFormListProps{
  legalForms:any[];
  changeLegalForms:any;
}

const LegalFormList:FC<LegalFormListProps> = ({
  legalForms,
  changeLegalForms
})=>
{
   
  
    const deleteLegalForm=((name:string)=>
    {
      LegalFormService
      .DeleteLegalForm(legalForms.find((form: any) => form.name === name))
      .then(response => {
        changeLegalForms(legalForms.filter((n:any) => n.name !== name))
      })
    })

    const updateLegalForm=((name:string,hbr:boolean)=>
    { 
      console.log(name,hbr)
      let updatedLegalForm:LegalForm = legalForms.find((form: LegalForm) => form.name === name);
      updatedLegalForm.hbr = hbr;
      LegalFormService
      .UpdateLegalForm(updatedLegalForm)
      .then(response => {
        LegalFormService
        .GetAllLegalForms()
        .then(response => {
          const changedLegalForm = { ...updatedLegalForm, name: name,hbr:hbr }
          changeLegalForms(legalForms.map(legalForm => legalForm.name !== updatedLegalForm.name ? legalForm : updatedLegalForm))
        })
      })
    })
  

    return(
        <ScrollableList children={
          legalForms != null ?
          legalForms.map((legalForm:any) => (
            console.log(legalForm),
            <ListItem text={legalForm.name} key={legalForm.name} initChecked={legalForm.hbr} onClickDelete={deleteLegalForm} onClickUpdate={updateLegalForm}/>))
          :<div/>
        }/>
    )
}


export default LegalFormList;