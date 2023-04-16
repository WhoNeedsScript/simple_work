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
{   console.log(children)
    return(
        <div 
        className={`
        fix 
        h-${height != undefined?height:"full"} 
        w-${width != undefined?height:"full"} 
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