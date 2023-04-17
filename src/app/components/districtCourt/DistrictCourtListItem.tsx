'use client'

import {FC, useState} from 'react'
import ListItem from '../general/list/ListItem'
import InputWithLable from '../general/inputs/InputWithLable'
import { DistrictCourt } from '@/app/types/districtCourt.d'

interface DistrictCourtListItemProps{
    passedDistrictCourt:DistrictCourt,
    onClickDelete:any,
    onClickUpdate:any
}

const DistrictCourtListItem:FC<DistrictCourtListItemProps> = ({
    passedDistrictCourt,
    onClickDelete,
    onClickUpdate
})=>
{
   
    const [districtCourt,setDistrictCourt] = useState(passedDistrictCourt);
    
    const changeNumber=(number: number)=>{
        let changedDistrictCourt:DistrictCourt = {...districtCourt};
        changedDistrictCourt.number = number
        setDistrictCourt(changedDistrictCourt)
    }

    const changeName=(name: string)=>{
        let changedDistrictCourt:DistrictCourt = {...districtCourt};
        changedDistrictCourt.name = name
        setDistrictCourt(changedDistrictCourt)
    }

    
    const updateLegalForomHandle = (event:any)=>{
        event.preventDefault();
        onClickUpdate(districtCourt)
    }

    const deleteDistrictCourtHandle = (event:any)=>{
        event.preventDefault();
        onClickDelete(districtCourt.uuid)
    }
    return(
       <ListItem key={districtCourt.uuid} deleteItem={deleteDistrictCourtHandle} updateItem={onClickUpdate}  children={
            [
                <InputWithLable onChange={changeName} value={districtCourt.name} textPosition='horizontal' text='Name'/>,
                <InputWithLable onChange={changeNumber} value={districtCourt.number} textPosition='horizontal' text='Nummer'/>
            ]
       }/>
       
    )
}

export default DistrictCourtListItem;

