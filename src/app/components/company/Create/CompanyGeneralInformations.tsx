'use client';

import {FC, use, useEffect, useState} from 'react'
import Input from '../../general/inputs/input';
import Link from 'next/link';
import Button from '../../glassmorph/Button';
import UserService from '../../../services/user'
import InputWithLable from '../../general/inputs/InputWithLable';
import { LegalForm } from '@/app/types/legalForm.d';
import ComboboxWithLabel from '../../general/combobox/ComboBoxWithLabel';
import LegalFormService from '../../../services/legalForm'



interface CompanyGeneralInformationsProps{
  changeTextData:any,
  changeCompanyInformationsForm:any
}

const CompanyGeneralInformations:FC<CompanyGeneralInformationsProps> = ({
  changeTextData,
  changeCompanyInformationsForm
})=>
{
    const [name,setName] = useState('');
    const [legalForms, setLegalForms] = useState<LegalForm[]>([]);
    const [selectedLegalForm,setSelectedLegalForm]= useState<LegalForm>();
    const [hbrNumber,setHBRNumber] = useState("");
    const [owner,setOwner] = useState('');
    const [streetNumber,setStreetNumber] = useState('');
    const [street,setStreet] = useState('');
    const [town,setTown] = useState('');
    const [federalState,setFederalState] = useState('');
    const [country,setCountry] = useState('');
    const [email,setEmail] = useState('');
    const [branch,setBranch] = useState('');
  

    
  const changeName=(event:any)=>{
    setName(event.target.value)
  }

  const changeHBR=(event:any)=>{
    setHBRNumber(event.target.value)
  }
  const [amtsgericht,setAmtsgericht] = useState("");
  const changeSelectedLegalForm=(event: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedLegalForm(legalForms.find((f:LegalForm)=> f.name === event.target.value))
  }
  const changeAmtsgericht=(event:any)=>{
    setAmtsgericht(event.target.value)
  }


  const changeOwner=(event:any)=>{
    setOwner(event.target.value)
  }
  const changeEmail=(event:any)=>{
    setEmail(event.target.value)
  }
  const changeStreetNumber=(event:any)=>{
    setStreetNumber(event.target.value)
  }
  const changeStreet=(event:any)=>{
    setStreet(event.target.value)
  }
  const changeTown=(event:any)=>{
    setTown(event.target.value)
  }
  const changeFederalState=(event:any)=>{
    setFederalState(event.target.value)
  }
  const changeCounty=(event:any)=>{
    setCountry(event.target.value)
  }
  const changeBranch=(event:any)=>{
    setBranch(event.target.value)
  }

  useEffect(() => {
    LegalFormService
      .GetAllLegalForms()
      .then(response => {
        setLegalForms(response.resultLegalForms)
        setSelectedLegalForm(legalForms[0])
      })
  }, [])

  
  const checkGeneralInformationsAllSet=()=>{
    if(name.length !==0 && 
        owner.length !== 0 &&
        email.length !== 0 &&
        streetNumber.length !== 0 &&
        street.length !== 0 &&
        town.length !== 0 &&
        federalState.length !== 0 &&
        country.length !== 0 &&
        branch.length !== 0 && 
        ((selectedLegalForm?.hbr === false && selectedLegalForm?.name.length !==0) || (selectedLegalForm?.hbr=== true && hbrNumber.length !==0)) &&
        amtsgericht.length !== 0 
        ){
          changeTextData({ name: "Allgemein", result: "full" })
        }/*amtsgericht optinal */
        /*hbr oftional aber wenn hbr dann auch Amtsgericht*/
        else{
          changeTextData({ name: "Allgemein", result: "error" })
        }
      }

    const AddGeneralInformationsHadler = (event:any)=>{
        event.preventDefault();
        checkGeneralInformationsAllSet();
        console.log("clicked")
        changeCompanyInformationsForm();
       
        
        }
       

    return(
        <form className='h-full flex flex-col   justify-center items-center'>
            <div className='text-blue-700 font-poppins text-2xl tracking-widest'>Unternehmen erstellen</div>
          
            <p>Algemein</p>
          {/*Alle felder requered */}
            <div className='flex flex-col items-start'>
                <InputWithLable text='Firmenname' textPosition='horizontal' value={name} onChange={changeName}/>
                {/*Auswahl vom server holen und Combobox */}
                <ComboboxWithLabel text='Rechtsform' textPosition='horizontal' data={legalForms} onChange={changeSelectedLegalForm}/>
                {
                  selectedLegalForm?.hbr === true ?
                 
                  <div>
                    <InputWithLable text={'HBR'}  textPosition={'horizontal'} value={hbrNumber} onChange={changeHBR}/>
                    <InputWithLable textPosition={'horizontal'} text={'Amtsgericht'} value={amtsgericht} onChange={changeAmtsgericht}/>
                  </div>
                  : <div/>
                }
                <InputWithLable text='Branch' textPosition='horizontal' value={branch} onChange={changeBranch}/>
                <InputWithLable text='Besitzer' textPosition='horizontal' value={owner} onChange={changeOwner}/>
                <InputWithLable text='Email' textPosition='horizontal' value={email} onChange={changeEmail}/>
            </div>

            <p>Adresse</p>
            <div className='flex flex-col items-start'>
            <InputWithLable text='Straße' textPosition='horizontal' value={owner} onChange={changeStreet}/>

                <InputWithLable text='Hausnummer' textPosition='horizontal' value={name} onChange={changeStreetNumber}/>
                <InputWithLable text='Stadt' textPosition='horizontal' value={town} onChange={changeTown}/>
                <InputWithLable text='Bundesland' textPosition='horizontal' value={federalState} onChange={changeFederalState}/>
                <InputWithLable text='Land' textPosition='horizontal' value={country} onChange={changeCounty}/>
            </div>

            <Button onClick={AddGeneralInformationsHadler}  text='Weiter'/>
          </form>
    )
}


export default CompanyGeneralInformations;