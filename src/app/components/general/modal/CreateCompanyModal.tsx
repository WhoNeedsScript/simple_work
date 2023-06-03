'use client'


import React, {FC, useCallback, useEffect, useState} from 'react'
import CompanyService from '../../../services/company'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'
import {updateNewCompany } from '@/app/store/features/companySlice';
import Modal from './Modal'
import { updateIsOpen } from '@/app/store/views/createCompanyModel'
import CompanyInformations from '../../company/CompanyInformation'

interface CreateCompanyModalProps {
 
  }
  
  const CreateCompanyModal:FC<CreateCompanyModalProps> = ({
    
})=>
{
    const [createCompany,setCreateCompany] = useState(false)
    const dispatch= useDispatch();
    const newCompany = useSelector((state:RootState)=>state.companyState.newCompany)
    const userUUID =  useSelector((state:RootState)=>state.userState.user).uuid!
    const isOpen =  useSelector((state:RootState)=>state.createCompanyModalState.isOpen)
    const onSubmit = ()=>{
        CompanyService
        .CreateCompany(newCompany,userUUID)
        .then(response => {
            if(response != undefined||null)
            {
                dispatch(updateNewCompany({
                    uuid: "",
                    name: "",
                    owner:"",
                    mobilenumber:"",
                    eMail:"",
                    streetnumber:"",
                    street:"",
                    postcode:"",
                    city:"",
                    federalState:{
                        uuid:"",
                        abbreviation:"",
                        name:""
                    },
                    country:"",
                    companyNumber:"",
                    companySize:0,
                    branch:"",
                    occupationCooperative:{
                        uuid:"",
                        name:"",
                        description:""
                    },
                    legalForm:{
                        uuid:"",
                        name:"",
                        hbr:false
                    },
                    hbr:"",
                    districtCourt:{
                        uuid:"",
                        name:"",
                        federalState:{
                            uuid:"",
                            abbreviation:"",
                            name:""
                        }
                    },
                    taxOffice:{
                        uuid:"",
                        name:"",
                        number:0,
                        federalState:{
                            uuid:"",
                            abbreviation:"",
                            name:""
                        },
            
                    },
                    steuerIdent:"",
                    taxNumber:""
                }))
            }
            dispatch(updateIsOpen(false))
          })
        
        }

   
    
    return (
        <Modal
        actionLabel='Unternehmen erstellen'
        isOpen = {isOpen}
        onClose={()=>dispatch(updateIsOpen(false))}
        onSubmit ={onSubmit}
        body={<CompanyInformations/>}
        />
      );
}

  export default CreateCompanyModal;