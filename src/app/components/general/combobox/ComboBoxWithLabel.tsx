'use client'

import {FC} from 'react'
import ComboBox from './ComboBox'
import { platform } from 'os'

interface ComboBoxWithLabelProps{
    textPosition: "vertical" | "horizontal",
    data:any[],
    text:string,
    onChange:any,
    selected?:any,
    placeholder?:string
}

const ComboboxWithLabel:FC<ComboBoxWithLabelProps> = ({
    textPosition,
    text,
    data,
    onChange,
    placeholder,
    selected
})=>
{
    
    return(
        textPosition ==  "vertical" ?
       (
            <div>
                <p>{text}</p>
                <ComboBox placeholder={placeholder} data={data} selected={selected} onChange={onChange}/>
            </div>
        )
        : textPosition ==  "horizontal"?
        (
            <div className="flex items-center">
                <div className="mr-4">
                <p>{text}</p>
                </div>
                <ComboBox placeholder={placeholder} data={data} selected={selected} onChange={onChange}/>
            </div>
        ):(<></>)

    )
}

export default ComboboxWithLabel
