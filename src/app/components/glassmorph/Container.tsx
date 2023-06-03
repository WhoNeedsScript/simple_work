'use client';

import type { ReactNode } from "react";

interface ContainerProps{
    children: React.ReactNode;
    width?:Number;
    height?:Number;
}

const Container:React.FC<ContainerProps> =({
    children,
    width,
    height
})=>
{  
    return(
        <div 
        className={`
        overflow-auto
        bg-white 
        bg-opacity-40
        rounded-2xl 
        shadow-5xl
        z-2 
        border 
        border-opacity-30 
        border-r-0 
        border-b-0 
        backdrop-filter 
        backdrop-blur-sm
      `}
        > 
            {children}
        </div>
    )
}

export default Container;