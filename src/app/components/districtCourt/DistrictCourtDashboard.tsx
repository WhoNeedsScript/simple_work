'use client';

import {FC, useEffect, useState} from 'react'
import Button from '../glassmorph/Button';
import DistrictCourtService from '../../services/districtCourt'
import { DistrictCourt } from '@/app/types/districtCourt.d';
import DistrictCourtList from './DistrictCourtList';
import InputWithLable from '../general/inputs/InputWithLable';


interface DistrictCourtDashboardProps{
  
}

const DistrictCourtDashboard:FC<DistrictCourtDashboardProps> = ({
  
})=>
{
    const [districtCourt,setDistrictCourt]= useState<DistrictCourt>({ name: '', number: 0 });
    const [districtCourts, setDistrictCourts] = useState<DistrictCourt[]>([]);

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
    
    const changeDistrictCourts=(districtCourts: DistrictCourt[])=>
    {
        setDistrictCourts(districtCourts)
    }
  

  
    useEffect(() => {
        DistrictCourtService
          .GetAllDistrictCourts()
          .then(response => {
            setDistrictCourts(response.resultDistrictCourts)
          })
      }, [])
    
   
    

    const createLegalForomHandle = (event:any)=>{
        event.preventDefault();
        if(districtCourt.name.length !== 0 && districtCourt.number !== 0)
        {
          DistrictCourtService
          .CreateDistrictCourt(districtCourt)
          .then(response => {
            setDistrictCourts(districtCourts.concat(districtCourt));
          })
        }
    }
        
       

    return(
      
        <div>
        
            <div className='flex place-content-between'>
                <InputWithLable text='Name' textPosition='horizontal' placeholder='Name' value={districtCourt.name} onChange={changeName}/>
                <InputWithLable text='Nummer' textPosition='horizontal' placeholder='Nummer' value={districtCourt.number} onChange={changeNumber}/>
                <Button onClick={createLegalForomHandle} text='Speichern'/>
            </div>
            <div>
                <DistrictCourtList districtCourts={districtCourts} changeDistrictCourts={changeDistrictCourts} />
            </div>
            
        </div>
    )
}


export default DistrictCourtDashboard;