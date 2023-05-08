'use client'

import {FC, useState} from 'react'

interface CheckBoxWithLabelProps{
    text:string,
    onChange:any
    checkedState:any
   
}

const CheckBoxWithLabel:FC<CheckBoxWithLabelProps> = ({
    text,
    onChange,
    checkedState
    
})=>
{
      return (
        <div className="flex items-center">
          <div className="mr-4">
            <p>{text}</p>
          </div>
          <input type="checkbox" className="rounded-sms h-3 w-3" checked={checkedState} onChange={onChange} />
        </div>
      );
}

export default CheckBoxWithLabel
