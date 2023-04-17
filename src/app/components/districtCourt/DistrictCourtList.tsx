'use client';

import {FC, use, useEffect, useState} from 'react'
import DistrictCourtService from '../../services/districtCourt'
import ScrollableList from '../general/list/ScrollableList';
import { DistrictCourt } from '@/app/types/districtCourt.d';
import DistrictCourtListItem from './DistrictCourtListItem';

interface DistrictCourtListProps{
  districtCourts: DistrictCourt[];
  changeDistrictCourts:any
}

const DistrictCourtList:FC<DistrictCourtListProps> = ({
  districtCourts,
  changeDistrictCourts
})=>
{
    const deleteDistrictCourt=((uuid:string)=>
    {
      DistrictCourtService
      .DeleteDistrictCourt(districtCourts.find((districtCourt: DistrictCourt) => districtCourt.uuid === uuid))
      .then(response => {
        changeDistrictCourts(districtCourts.filter((districtCourt:DistrictCourt) => districtCourt,uuid !== uuid))
      })
    })

    const updateDistrictCourt=(districtCourt:DistrictCourt)=>
    { 
      DistrictCourtService
      .UpdateDistrictCourt(districtCourt)
      .then(response => {
          changeDistrictCourts(
            districtCourts.map(
              (mDistrictCourt:DistrictCourt) => mDistrictCourt.uuid !== districtCourt.uuid ? mDistrictCourt : districtCourt
            )
          )
        })
    }
  

    return(
        <ScrollableList children={
          districtCourts != null ?
          districtCourts.map((districtCourt:DistrictCourt) => (
           <DistrictCourtListItem passedDistrictCourt={districtCourt} onClickDelete={deleteDistrictCourt} onClickUpdate={updateDistrictCourt}/>
          ))
          :<div/>
        }/>
    )
}


export default DistrictCourtList;