'use client';

import {FC, useEffect} from 'react'
import Button from '../glassmorph/Button';
import FederalStateService from '../../services/federalState'
import TaxOfficeList from './DistrictCourtList';
import InputWithLable from '../general/inputs/InputWithLable';
import FederalStateComboBox from '../federalState/FederalStateCombobox';
import { useDispatch, useSelector } from 'react-redux';
import DistrictCourtService from '../../services/districtCourt'
import { addFederalStates, selectFederalStateByUuid } from '@/app/store/features/federalStateSlice';
import { store } from '@/app/store/store';
import { DistrictCourt } from '@/app/types/districtCourt.d';
import { addDistrictCourt, addDistrictCourts, updateNewDistrictCourt } from '@/app/store/features/districtCourtSlice';


interface DistrictCourtDashboardProps{
  
}

const DistrictCourtDashboard:FC<DistrictCourtDashboardProps> = ({
  
})=>
{
  const dispatch = useDispatch();

  useEffect(() => {
    DistrictCourtService
      .GetAllDistrictCourts()
      .then(response => {
        dispatch(addDistrictCourts(response.resultDistrictCourts));
        });
        
      FederalStateService
        .GetAllFederalStates()
        .then(response => {
          dispatch(addFederalStates(response.resultFederalStates))
        })
  }, []);
 
   
    const newDistrictCourt = useSelector((state:any)=>state.districtCourtState.newDistrictCourt)

    const changeName = (event: any, districtCourt: DistrictCourt) => {
      let changedDistrictCourt: DistrictCourt = { ...districtCourt };
      changedDistrictCourt.name = event.target.value;
      dispatch(updateNewDistrictCourt(changedDistrictCourt));
    };
  
    const changeFederalState = (event: { value: string }, districtCourt: DistrictCourt) => {
      let changedDistrictCourt: DistrictCourt = { ...districtCourt };
      const selectedFederalState = selectFederalStateByUuid(store.getState(), event.value);
      if (selectedFederalState) {
        changedDistrictCourt.federalState = selectedFederalState;
        dispatch(updateNewDistrictCourt(changedDistrictCourt));
      }
    };
  
    
    
    const createTaxOfficeHandle = (event:any)=>{
        event.preventDefault();
        if(newDistrictCourt.name.length !== 0)
        {
          DistrictCourtService
          .CreateDistrictCourt(newDistrictCourt)
          .then(response => {
            let changedNewDistrictCourt:DistrictCourt = {...newDistrictCourt};
            changedNewDistrictCourt.uuid =  response
            dispatch(addDistrictCourt(changedNewDistrictCourt));
            dispatch(updateNewDistrictCourt({uuid:"",name:"",federalState:{uuid:"",abbreviation:"",name:""}}));
          })
        }
    }
  
    return (
      <div>
        <div className="flex place-content-between">
          <InputWithLable
            text="Name"
            textPosition="horizontal"
            placeholder="Name"
            value={newDistrictCourt.name}
            onChange={(event:any) => changeName(event, newDistrictCourt)}
          />
          <FederalStateComboBox selected={newDistrictCourt.federalState} onChange={(event:any) => changeFederalState(event, newDistrictCourt)} />
          <Button onClick={createTaxOfficeHandle} label="Speichern" />
        </div>
        <div>
          <TaxOfficeList />
        </div>
      </div>
    );
  };


export default DistrictCourtDashboard;