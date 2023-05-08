'use client'

import {FC} from 'react'
import ListItem from '../general/list/ListItem'
import InputWithLable from '../general/inputs/InputWithLable'
import { TaxOffice } from '@/app/types/taxOffice.d'
import FederalStateComboBox from '../federalState/FederalStateCombobox'
import { deleteTaxOffice, selectTaxOfficeByUuid, updateTaxOfficeByUuid } from '@/app/store/features/taxOfficeSlice'
import { store } from '@/app/store/store'
import { useDispatch } from 'react-redux'
import { selectFederalStateByUuid } from '@/app/store/features/federalStateSlice'
import TaxOfficeService from '../../services/taxOffice'
import { deleteDistrictCourt, selectDistrictCourtByUuid, updateDistrictCourtByUuid } from '@/app/store/features/districtCourtSlice'
import { DistrictCourt } from '@/app/types/districtCourt.d'
import DistrictCourtService from '../../services/districtCourt'



interface DistrictCourtListItemProps{
   id:string
}

const DistrictCourtListItem:FC<DistrictCourtListItemProps> = ({
    id
})=>
{
    const dispatch = useDispatch();
    const districtCourt = selectDistrictCourtByUuid(store.getState(),id);
    
   
    const changeName = (event: any, districtCourt: DistrictCourt) => {
        let changedDistrictCourt: DistrictCourt = { ...districtCourt };
        changedDistrictCourt.name = event.target.value;
        dispatch(updateDistrictCourtByUuid(changedDistrictCourt));
      };

    const changeFederalState = (event: { value: string }, districtCourt: DistrictCourt) => {
      let changedDistrictCourt: DistrictCourt = { ...districtCourt };
      const selectedFederalState = selectFederalStateByUuid(store.getState(), event.value);
      if (selectedFederalState) {
        changedDistrictCourt.federalState = selectedFederalState;
        dispatch(updateDistrictCourtByUuid(changedDistrictCourt));
      }
    };

    const deleteDistrictCourtHandle=(event:any, districtCourt:DistrictCourt)=>{
        DistrictCourtService
        .DeleteDistrictCourt(districtCourt)
        .then(response => {
            dispatch(deleteDistrictCourt(districtCourt))
        })
    }

    const updateDistrictCourtHandle=(event:any, districtCourt:DistrictCourt)=>{
      DistrictCourtService
        .UpdateDistrictCourt(districtCourt)
        .then(response => {
           
        })
    }
  
  
    return(
       <ListItem key={districtCourt.uuid} deleteItem={(event:any) => deleteDistrictCourtHandle(event, districtCourt)} updateItem={(event:any) => updateDistrictCourtHandle(event, districtCourt)}  children={
            [
                <InputWithLable  onChange={(event:any) => changeName(event, districtCourt)} value={districtCourt.name} textPosition='horizontal' text='Name'/>,
                <FederalStateComboBox  selected={districtCourt.federalState.abbreviation} onChange={(event:any) => changeFederalState(event, districtCourt)}/>
            ]
       }/>
       
    )
}

export default DistrictCourtListItem;

