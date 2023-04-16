'use client'

import {FC, use, useState} from 'react'

interface ComboboxProps{
    data:any[]
    onChange:any
}

const ComboBox:FC<ComboboxProps> = ({
    data,
    onChange
})=>
{
    

    return(
        <div>
           <select onChange={onChange}>
            {
               data != null|| data != undefined ?
               data.map((data:any) => (<option key={data.name} value={data.name}>{data.name}</option>))
               :<div/> 
            }
            </select>
        </div>
    )
}

export default ComboBox
