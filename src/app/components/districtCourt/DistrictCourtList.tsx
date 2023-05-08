'use client';

import {FC} from 'react'
import ScrollableList from '../general/list/ScrollableList';
import { useSelector } from 'react-redux';
import { DistrictCourt } from '@/app/types/districtCourt.d';
import DistrictCourtListItem from './DistrictCourtListItem';

interface DistrictCourtListProps{
 
}

const DistrictCourtList:FC<DistrictCourtListProps> = ({
  
})=>
{
  const districtCourts = useSelector((state:any)=>state.districtCourtState.districtCourts);
    return(
        <ScrollableList children={
          districtCourts != null ?
          districtCourts.map((districtCourt:DistrictCourt) => (
           <DistrictCourtListItem key={districtCourt.uuid!} id={districtCourt.uuid!}/>
          ))
          :<div />
        }/>
    )
}


export default DistrictCourtList;