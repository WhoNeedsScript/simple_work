"use client";

import { FC, useState } from "react";
import ListItem from "../general/list/ListItem";
import InputWithLable from "../general/inputs/InputWithLable";
import { LegalForm } from "../../types/legalform.d";
import CheckBoxWithLabel from "../general/checkboxes/CheckboxWithLabel";
import { deleteLegalForm, selectLegalFormByUuid, updateLegalFormByUuid } from "@/app/store/features/legalFormState";
import LegalFormService from "@/app/services/legalForm";
import { store } from "@/app/store/store";
import { useDispatch } from "react-redux";
import legalForm from "@/app/services/legalForm";

interface LegalFormListItemProps {
 id:string
}

const LegalFormListItem: FC<LegalFormListItemProps> = ({
 id
}) => {
  const dispatch = useDispatch();

  const legalForm = selectLegalFormByUuid(store.getState(),id);


  const changeName=(event:any, legalForm:LegalForm)=>{
    let changeLegalForm:LegalForm = {...legalForm};
    changeLegalForm.name = event.target.value
    dispatch(updateLegalFormByUuid(changeLegalForm))
  }
  const changeHBR = (event:any, legalForm:LegalForm) => {
    let changeLegalForm:LegalForm = {...legalForm};
    changeLegalForm.hbr = event.target.checked
    dispatch(updateLegalFormByUuid(changeLegalForm))
    }

    const deleteLegalFormHandle = (event:any, legalForm:LegalForm)=>{
      LegalFormService
      .DeleteLegalForm(legalForm.uuid!)
      .then(response => {
          dispatch(deleteLegalForm(legalForm))
      })
  }
  
  const updateLegalFormHandle=(event:any, legalForm:LegalForm)=>{
    LegalFormService
      .UpdateLegalForm(legalForm)
      .then(response => {
      })
  }

  return (
    <ListItem
      deleteItem={(event:any) => deleteLegalFormHandle(event, legalForm)} 
      updateItem={(event:any) => updateLegalFormHandle(event, legalForm)}
      children={[
        <InputWithLable
        onChange={(event:any) => changeName(event, legalForm)}
          value={legalForm.name}
          textPosition="horizontal"
          text="Name"
        />,
        <CheckBoxWithLabel
          onChange={(event:any) => changeHBR(event, legalForm)}
          checkedState={legalForm.hbr}
          text="HBR"
        />,
      ]}
    />
  );
};

export default LegalFormListItem;
