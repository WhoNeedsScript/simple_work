'use client'

import {FC, useState} from 'react'
import CheckBoxWithLabel from '../checkboxes/CheckboxWithLabel'
import Button from '../../glassmorph/Button'

interface ListItemProps{
    text:string,
    initChecked:boolean,
    onClickUpdate:any,
    onClickDelete:any,
    
}

const ListItem:FC<ListItemProps> = ({
    text,
    initChecked,
    onClickUpdate,
    onClickDelete,
    
})=>
{
   
    const [hbr,setHBR] = useState(initChecked);
    
    const changeHBR=(isChecked: boolean)=>{
        console.log(isChecked)
        setHBR(isChecked)
    }

    
    const updateLegalForomHandle = (event:any)=>{
        event.preventDefault();
        console.log(hbr)
        onClickUpdate(text,hbr)
    }

    const deleteLegalForomHandle = (event:any)=>{
        event.preventDefault();
        onClickDelete(text)
    }
    return(
        <div className='flex place-content-between'>
            <CheckBoxWithLabel checkedState={hbr}  text={text} onChange={changeHBR}/>
            <Button text='Speichern' onClick={updateLegalForomHandle}/>
            <Button text='Löschen' onClick={deleteLegalForomHandle}/>
        </div>
    )
}

export default ListItem;

