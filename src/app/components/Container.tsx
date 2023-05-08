'use client';

import type { ReactNode } from "react";

interface ContainerProps{
    children: React.ReactNode;
    height?: string;
    width?: string;
}

const Container:React.FC<ContainerProps> =({
    children,
    height = "auto",
    width = "auto",
})=>
{   
    return(
        <div 
            className="
            flex
            min-h-full
            justify-center
            items-center
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4"        > 
            {children}
        </div>
    )
}

export default Container;