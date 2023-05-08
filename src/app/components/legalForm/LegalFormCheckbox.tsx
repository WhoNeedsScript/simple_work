'use client'

import {FC, useState} from 'react'
import CheckBoxWithLabel from '../general/checkboxes/CheckboxWithLabel'

interface LegalFormCheckBoxProps{
    
    onChange:any
    checkedState:any
   
}

const LegalFormCheckBox:FC<LegalFormCheckBoxProps> = ({
   
    onChange,
    checkedState
    
})=>
{
    
    
      return (
        <CheckBoxWithLabel text='HBR' checkedState={checkedState} onChange={onChange}/>
      );
}

export default LegalFormCheckBox
