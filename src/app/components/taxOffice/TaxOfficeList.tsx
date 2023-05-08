'use client';

import {FC} from 'react'

import ScrollableList from '../general/list/ScrollableList';
import { TaxOffice } from '@/app/types/taxOffice.d';
import TaxOfficeListItem from './TaxOfficeListItem';
import { useSelector } from 'react-redux';

interface TaxOfficeListProps{
 
}

const TaxOfficeList:FC<TaxOfficeListProps> = ({
  
})=>
{
  const localselectedTaxOffices =  useSelector((state:any)=>state.taxOfficeState.taxOffices)
    return(
        <ScrollableList children={
          localselectedTaxOffices != null ?
          localselectedTaxOffices.map((taxOffice:TaxOffice) => (
           <TaxOfficeListItem key={taxOffice.uuid!} id={taxOffice.uuid!}/>
          ))
          :<div />
        }/>
    )
}


export default TaxOfficeList;