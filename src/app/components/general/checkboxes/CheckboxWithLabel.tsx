'use client'

import {FC, useState} from 'react'

interface CheckBoxWithLabelProps{
    text:string,
    onChange: (isChecked: boolean) => void,
    checkedState:any
   
}

const CheckBoxWithLabel:FC<CheckBoxWithLabelProps> = ({
    text,
    onChange,
    checkedState
    
})=>
{
    

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (typeof onChange === "function") {
    onChange(event.target.checked);
  } else {
    console.error("onChange is not a function"); // add an error message to check if the onChange prop is being passed correctly
  }
      };
    
      return (
        <div className="flex items-center">
          <div className="mr-4">
            <p>{text}</p>
          </div>
          <input type="checkbox" className="rounded-sms h-3 w-3" checked={checkedState} onChange={handleOnChange} />
        </div>
      );
}

export default CheckBoxWithLabel
