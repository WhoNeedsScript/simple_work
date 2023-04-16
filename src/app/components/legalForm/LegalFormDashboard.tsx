'use client';

import {FC, use, useEffect, useState} from 'react'
import Input from '../general/inputs/input';
import Link from 'next/link';
import Button from '../glassmorph/Button';
import LegalFormService from '../../services/legalForm'
import InputWithLable from '../general/inputs/InputWithLable';
import LegalFormList from './LegalFormList';
import CheckBoxWithLabel from '../general/checkboxes/CheckboxWithLabel';
import ClientOnly from '../general/ClientOnly';

interface LegalFormDashboardProps{
  
}

const LegalFormDashboard:FC<LegalFormDashboardProps> = ({
  
})=>
{
    const [name,setName] = useState('');
    const [hbr,setHBR] = useState(false);
    const [legalForms, setLegalForms] = useState([]);
 
    const changeName=(event:any)=>{
        setName(event.target.value)
      }
      const changeHBR = (isChecked: boolean) => {
   
        setHBR(isChecked)
      }
    const changeLegalForms=(legalForms:any)=>
    {
        setLegalForms(legalForms)
    }
  
    useEffect(() => {
        LegalFormService
          .GetAllLegalForms()
          .then(response => {
            setLegalForms(response.resultLegalForms)
          })
      }, [])
    
   
    

    const createLegalForomHandle = (event:any)=>{
        event.preventDefault();
        /*if(newName === '' || newName ==='')
        {
          alert(`Please fill Name and Number`)
          return
        }
        let user = {email:String,username:String,password:String};
      */
      
        const legalFormObject:any = {
            name: name,
            hbr: hbr
        }
          
        LegalFormService
          .CreateLegalForm(legalFormObject)
          .then(response => {
            setHBR(false);
            setName('');
            setLegalForms(legalForms.concat(legalFormObject));
          })
        }
       

    return(
      
        <div>
        
            <div className='flex place-content-between'>
                <input type="text" placeholder='Name'value={name} onChange={changeName} className='input-text m-3'/>
                <CheckBoxWithLabel text="HBR" checkedState={hbr} onChange={changeHBR} />  
                <Button onClick={createLegalForomHandle} text='Speichern'/>
            </div>
            <div>
                <LegalFormList legalForms={legalForms} changeLegalForms={changeLegalForms}/>
            </div>
            
        </div>
    )
}


export default LegalFormDashboard;