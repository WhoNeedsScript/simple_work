'use client'

import {FC} from 'react'

interface InputWithLableProps{
    textPosition: "vertical" | "horizontal",
    text:string,
    value:any,
    onChange:any,
    placeholder?:string
}

const InputWithLable:FC<InputWithLableProps> = ({
    textPosition,
    text,
    value,
    onChange,
    placeholder
})=>
{
    return(
        textPosition ==  "vertical" ?
       (
            <div>
                <p>{text}</p>
                <input onChange={()=>onChange(value)} value={value} placeholder={placeholder} className="rounded-sms h-30 w-30 input-text m-3"></input>
            </div>
        )
        : textPosition ==  "horizontal"?
        (
            <div className="flex items-center">
                <div className="mr-4">
                <p>{text}</p>
                </div>
                <input onChange={onChange} value={value} placeholder={placeholder} className="rounded-sms h-30 w-30 input-text m-3"></input>
            </div>
        ):(<></>)

    )
}

export default InputWithLable
