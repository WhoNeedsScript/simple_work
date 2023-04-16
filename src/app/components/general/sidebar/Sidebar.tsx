'use client'

import {FC, useState} from 'react'

interface SidebarProps{
    text:any,
   
   
}

const Sidebar:FC<SidebarProps> = ({
    text  
    
})=>
{
    return(
        <div className="fix items-left">
             <div className="mr-4">
            {   
                text != null ?
                text.map((textObject:any) => (
                    console.log(textObject.color),
                    <p key={textObject.text} className={`${textObject.color} !important`}>{textObject.text}</p>
                   ))
                :<div/>
            }
             </div>
        </div>
    )
}

export default Sidebar
