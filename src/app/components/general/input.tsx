import {FC} from 'react'

interface InputProps{}

const Input:FC<InputProps> = ({})=>
{
    return(
        <div>
           <input className="rounded-sms h-3 w-3"></input>
        </div>
    )
}

export default Input
