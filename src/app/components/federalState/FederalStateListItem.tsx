'use client'

import {FC, useState} from 'react'
import ListItem from '../general/list/ListItem'
import InputWithLable from '../general/inputs/InputWithLable'
import { FederalState } from '@/app/types/federalState.d'
import { useDispatch } from 'react-redux'
import { deleteFederalState, selectFederalStateByUuid, updateFederalStateByUuid, updateNewFederalState } from '@/app/store/features/federalStateSlice'
import { store } from '@/app/store/store'
import FederalsStateService from '../../services/federalState'

interface FederalStateListItemProps{
    id:string
}

const FederalStateListItem:FC<FederalStateListItemProps> = ({
    id
})=>
{
    const dispatch = useDispatch();

    const federalState = selectFederalStateByUuid(store.getState(),id);

    const changeName=(event:any,federalState:FederalState)=>{
        let changedFederalState:FederalState = {...federalState};
        changedFederalState.name = event.target.value
        dispatch(updateFederalStateByUuid(changedFederalState));
    }

    const changeAbbreviation=(event:any,federalState:FederalState)=>{
        let changedFederalState:FederalState = {...federalState};
        changedFederalState.abbreviation = event.target.value
        dispatch(updateFederalStateByUuid(changedFederalState));
    }

    const deleteFederalStateHandle = (event:any, federalState:FederalState)=>{
        FederalsStateService
        .DeleteFederalState(federalState)
        .then(response => {
            dispatch(deleteFederalState(federalState))
        })
    }
    
    const updateFederalStateHandle=(event:any, federalState:FederalState)=>{
        FederalsStateService
        .UpdateFederalState(federalState)
        .then(response => {
        })
    }

  
    
    return(
       <ListItem key={federalState.uuid} deleteItem={(event:any) => deleteFederalStateHandle(event, federalState)} updateItem={(event:any) => updateFederalStateHandle(event, federalState)}  children={
            [
                <InputWithLable onChange={(event:any) => changeAbbreviation(event, federalState)} value={federalState.abbreviation} textPosition='horizontal' text='Abk.'/>,
                <InputWithLable onChange={(event:any) => changeName(event, federalState)} value={federalState.name} textPosition='horizontal' text='Name'/>
            ]
       }/>
       
    )
}

export default FederalStateListItem;

