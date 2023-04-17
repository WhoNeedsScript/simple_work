'use client'

import {Children, FC, useState} from 'react'
import CheckBoxWithLabel from '../checkboxes/CheckboxWithLabel'
import Button from '../../glassmorph/Button'
import Input from '../inputs/input'

interface ListItemProps{
    children:any,
    updateItem:any,
    deleteItem:any   
}

const ListItem:FC<ListItemProps> = ({
    children,
    updateItem,
    deleteItem
})=>
{
   
   
    return(
        <div className='flex place-content-between'>
            {children}
            <Button text='Speichern' onClick={updateItem}/>
            <Button text='Löschen' onClick={deleteItem}/>
        </div>
    )
}

export default ListItem;

