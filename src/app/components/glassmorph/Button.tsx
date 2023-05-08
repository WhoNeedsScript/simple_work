'use client';

import type { ReactNode } from "react";
import { text } from "stream/consumers";

interface ButtonProps{
    children?: React.ReactNode;
    onClick?:any;
    text?:string;
}

const Button:React.FC<ButtonProps> =({
    children,
    onClick,
    text
})=>
{  
    return (
        <input 
          type="submit" 
          className="
          
            cursor-pointer 
            font-poppins 
            rounded-full 
            m-3
            px-5 
            py-1 
            bg-white 
            bg-opacity-50
            hover:bg-white 
            hover:bg-opacity-80"
          value={text} onClick={onClick}
        />
      );

}

export default Button;