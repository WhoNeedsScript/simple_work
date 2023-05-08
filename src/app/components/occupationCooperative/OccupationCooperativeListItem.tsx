"use client";

import { FC, useState } from "react";
import ListItem from "../general/list/ListItem";
import InputWithLable from "../general/inputs/InputWithLable";
import { LegalForm } from "../../types/legalform.d";
import CheckBoxWithLabel from "../general/checkboxes/CheckboxWithLabel";
import { deleteLegalForm, selectLegalFormByUuid, updateLegalFormByUuid } from "@/app/store/features/legalFormState";
import OccupationCooperativeService from "@/app/services/occupationCooperative";
import { store } from "@/app/store/store";
import { useDispatch } from "react-redux";
import legalForm from "@/app/services/legalForm";
import { deleteOccupationCooperative, selectOccupationCooperativeByUuid, updateOccupationCooperativeByUuid } from "@/app/store/features/occupationCooperativeSlice";
import { OccupationCooperative } from "@/app/types/occupationCooperative.d";

interface OccupationCooperativeListItemProps {
 id:string
}

const OccupationCooperativeListItem: FC<OccupationCooperativeListItemProps> = ({
 id
}) => {
  const dispatch = useDispatch();

  const occupationCooperative  = selectOccupationCooperativeByUuid(store.getState(),id);


  const changeName=(event:any, occupationCooperative:OccupationCooperative)=>{
    let changeOccupationCooperative:OccupationCooperative = {...occupationCooperative};
    changeOccupationCooperative.name = event.target.value
    dispatch(updateOccupationCooperativeByUuid(changeOccupationCooperative))
  }
  const changeDescription = (event:any, occupationCooperative:OccupationCooperative) => {
    let changeOccupationCooperative:OccupationCooperative = {...occupationCooperative};
    changeOccupationCooperative.description = event.target.value
    dispatch(updateOccupationCooperativeByUuid(changeOccupationCooperative))
  }

    const deleteOccupationCooperativeHandle = (event:any, occupationCooperative:OccupationCooperative)=>{
      OccupationCooperativeService
      .DeleteOccupationCooperative(occupationCooperative)
      .then(response => {
          dispatch(deleteOccupationCooperative(occupationCooperative))
      })
  }
  
  const updateOccupationCooperativeHandle=(event:any, occupationCooperative:OccupationCooperative)=>{
    OccupationCooperativeService
      .UpdateOccupationCooperative(occupationCooperative)
      .then(response => {
      })
  }

  return (
    <ListItem
      deleteItem={(event:any) => deleteOccupationCooperativeHandle(event, occupationCooperative)} 
      updateItem={(event:any) => updateOccupationCooperativeHandle(event, occupationCooperative)}
      children={[
        <InputWithLable
          onChange={(event:any) => changeName(event, occupationCooperative)}
          value={occupationCooperative.name}
          textPosition="horizontal"
          text="Name"
        />,
        <InputWithLable
          onChange={(event:any) => changeDescription(event, occupationCooperative)}
          value={occupationCooperative.description}
          textPosition="horizontal"
          text="Description"
        />,,
      ]}
    />
  );
};

export default OccupationCooperativeListItem;
