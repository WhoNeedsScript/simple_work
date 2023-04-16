'use client';

import {FC, use, useEffect, useState} from 'react'

import ComboboxWithLabel from '../../general/combobox/ComboBoxWithLabel';
import InputWithLable from '../../general/inputs/InputWithLable';
import CheckBoxWithLabel from '../../general/checkboxes/CheckboxWithLabel';



interface CompanyAdditionalInformationsProps{
  
}

const CompanyAdditionalInformations:FC<CompanyAdditionalInformationsProps> = ({
  
})=>
{
  

  const [betriebsnummer,setBetriebsnummer] = useState("")
  
 
  const [finanzamt,setFinanzamt] = useState("");
  const [finanzamtNummer,setFinanzamtNummer] = useState("")
  const [steuerIdent,setSteuerIdent] = useState("")
  const [berufsgenossenschaft,setBerufsgenossenschaft] = useState("")
  const [steuernummer,setSteuernummer] = useState("")
  const [betriebsgröße,setBetriebsgröße] = useState("")

  

  
  const changeFinanzamt=(event:any)=>{
    setFinanzamt(event.target.value)
  }

  const changeFinanzamtNummer=(event:any)=>{
    setFinanzamtNummer(event.target.value)
  }

  const changeSteuerIdent=(event:any)=>{
    setSteuerIdent(event.target.value)
  }

  const changeSteuernummer=(event:any)=>{
    setSteuernummer(event.target.value)
  }

  const changeBetriebsnummer=(event:any)=>{
    setBetriebsnummer(event.target.value)
  }

  const changeBetriebsgröße=(event:any)=>{
    console.log("betriebsgröße")
    setBetriebsgröße(event.target.value)
  }

  const changeBerufsgenossenschaft=(event:any)=>{
    setBerufsgenossenschaft(event.target.value)
  }

   
    return(
   
      <form className='h-full flex flex-col   justify-center items-center'>
        <div className='text-blue-700 font-poppins text-2xl tracking-widest'>Unternehmen erstellen</div>
      
        <p>Zusätzliche Informationen</p>
       
        <div className='flex flex-col items-start'>
          <InputWithLable textPosition={'horizontal'} text={'Betriebsnummer'} value={betriebsnummer} onChange={changeBetriebsnummer}/>

          
          <InputWithLable textPosition={'horizontal'} text={'Betriebsnummer'} value={betriebsnummer} onChange={changeBetriebsnummer}/>
          <InputWithLable textPosition={'horizontal'} text={'Zuständiges Finanzamt'} value={finanzamt} onChange={changeFinanzamt}/>
          <InputWithLable textPosition={'horizontal'} text={'Finanzamtnummer'} value={finanzamtNummer} onChange={changeFinanzamtNummer}/>
          <InputWithLable textPosition={'horizontal'} text={'SteuerIdent'} value={steuerIdent} onChange={changeSteuerIdent}/>
          <InputWithLable textPosition={'horizontal'} text={'Steuernummer'} value={steuernummer} onChange={changeSteuernummer}/>
          <InputWithLable textPosition={'horizontal'} text={'Betriebsgröße'} value={betriebsgröße} onChange={changeBetriebsgröße}/>
          {
            parseInt(betriebsgröße) > 1?
            <div>
              <InputWithLable textPosition={'horizontal'} text={'Berufsgenossenschaft'} value={berufsgenossenschaft} onChange={changeBerufsgenossenschaft}/>
            </div>
            : <div/>
          }


        </div>
    </form>
    )
}


export default CompanyAdditionalInformations;