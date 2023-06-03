'use client';

import type { ReactNode } from "react";
import React from "react";
import { text } from "stream/consumers";

interface ButtonProps{
  label?:string;  
  icon?: any;
  onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?:boolean,
  outline?:boolean
}

const Button:React.FC<ButtonProps> =({
    label,
    disabled,
    outline,
    icon : Icon,
    onClick,

})=>
{  
    return (
        <button
        onClick={onClick}
          disabled = {disabled}
          className="
            relative
            cursor-pointer 
            font-poppins 
            rounded-full 
            m-3
            px-5 
            py-1 
            bg-white 
            bg-opacity-50
            disabled:bg-grey 
            disabled:opacity-80
            disabled:cursor-not-allowed
            hover:bg-white 
            hover:bg-opacity-80"
   
        >
          {Icon && (
            <Icon
            siue={24}
            className="
              absolute
              left-4
              top-3
            "
            />
          )}
          {label}
        </button>
      );

}

export default Button;