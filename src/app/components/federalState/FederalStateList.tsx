'use client';

import {FC} from 'react'
import FederalStateService from '../../services/federalState'
import ScrollableList from '../general/list/ScrollableList';
import { FederalState } from '@/app/types/federalState.d';
import FederalStateListItem from './FederalStateListItem';
import { useSelector } from 'react-redux';

interface FederalStateListProps{

}

const FederalStateList:FC<FederalStateListProps> = ({

})=>
{
  const federalStates = useSelector((state:any)=>state.federalStateState.federalStates)

    return(
        <ScrollableList children={
          federalStates.length !== undefined ?
          federalStates.map((federalState:FederalState) => (
           <FederalStateListItem key={federalState.uuid} id={federalState.uuid!}/>
          ))
          :<div/>
        }/>
    )
}


export default FederalStateList;