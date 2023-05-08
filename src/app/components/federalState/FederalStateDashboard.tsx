'use client';

import {FC, useEffect, useState} from 'react'
import Button from '../glassmorph/Button';
import FederalStateService from '../../services/federalState'
import InputWithLable from '../general/inputs/InputWithLable';
import { FederalState } from '@/app/types/federalState.d';
import FederalStateList from './FederalStateList';
import { useDispatch, useSelector } from 'react-redux';
import { addFederalState, addFederalStates, updateNewFederalState } from '@/app/store/features/federalStateSlice';


interface FederalStateDashboardProps{
  
}

const FederalStateDashboard:FC<FederalStateDashboardProps> = ({
  
})=>
{
    const dispatch = useDispatch();

    useEffect(() => {
        FederalStateService
          .GetAllFederalStates()
          .then(response => {
            dispatch(addFederalStates(response.resultFederalStates))
          })
    }, []);
    
    const newFederalState= useSelector((state:any)=>state.federalStateState.newFederalState)

    const changeName=(event:any, federalState:FederalState)=>{
        let changeFederalState:FederalState = {...federalState};
        changeFederalState.name = event.target.value
        dispatch(updateNewFederalState(changeFederalState))
    }

    const changeAbbreviation=(event:any,federalState:FederalState)=>{
        let changeFederalState:FederalState = {...federalState};
        changeFederalState.abbreviation = event.target.value
        dispatch(updateNewFederalState(changeFederalState))
    }
   
    

    const createFederalStateHandle = (event:any)=>{
        event.preventDefault();
        if(newFederalState.name.length !== 0 && newFederalState.abbreviation.length !== 0)
        {
          FederalStateService
          .CreateFederalState(newFederalState)
          .then(response => {
            let changeFederalState:FederalState = {...newFederalState};
            changeFederalState.uuid =  response
            dispatch(addFederalState(changeFederalState));
            dispatch(updateNewFederalState({uuid:"",name:"",abbreviation:""}));
         
          })
        }
    }

    return(
      
        <div>
        
            <div className='flex place-content-between'>
                <InputWithLable text='Abkürzung' 
                    textPosition='horizontal' 
                    placeholder='Abk.' 
                    value={newFederalState.abbreviation} 
                    onChange={(event:any) => changeAbbreviation(event, newFederalState)}/>
                <InputWithLable text='Name'
                    textPosition='horizontal'
                    placeholder='Name'
                    value={newFederalState.name} 
                    onChange={(event:any) => changeName(event, newFederalState)}/>
                <Button onClick={createFederalStateHandle} text='Speichern'/>
            </div>
            <div>
                <FederalStateList />
            </div>
            
        </div>
    )
}


export default FederalStateDashboard;