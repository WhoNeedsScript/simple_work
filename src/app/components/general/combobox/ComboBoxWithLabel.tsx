'use client'

import {FC} from 'react'
import ComboBox from './ComboBox'

interface ComboBoxWithLabelProps{
    textPosition: "vertical" | "horizontal",
    data:any[],
    text:string,
    onChange:any
}

const ComboboxWithLabel:FC<ComboBoxWithLabelProps> = ({
    textPosition,
    text,
    data,
    onChange,
})=>
{
    console.log(data)
    return(
        textPosition ==  "vertical" ?
       (
            <div>
                <p>{text}</p>
                <ComboBox data={data} onChange={onChange}/>
            </div>
        )
        : textPosition ==  "horizontal"?
        (
            <div className="flex items-center">
                <div className="mr-4">
                <p>{text}</p>
                </div>
                <ComboBox data={data} onChange={onChange}/>
            </div>
        ):(<></>)

    )
}

export default ComboboxWithLabel
