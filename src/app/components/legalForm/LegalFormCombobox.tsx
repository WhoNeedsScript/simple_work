"use client";

import { FC, useEffect } from "react";
import ComboboxWithLabel from "../general/combobox/ComboBoxWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { LegalForm } from "@/app/types/legalform.d";
import { RootState } from "@/app/store/store";
import LegalFormService from '../../services/legalForm'
import { addLegalForms } from "@/app/store/features/legalFormState";


interface LegalFormComboBoxProps {
  onChange: any;
  selected?: any;
}

const LegalFormComboBox: FC<LegalFormComboBoxProps> = ({
  onChange,
  selected,
}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    LegalFormService
      .GetAllLegalForms()
      .then(response => {
        dispatch(addLegalForms(response.resultLegalForms))
      })
  }, []);

  const legalForms = useSelector(
    (state: RootState) => state.legalFormState.legalForms
  );

  const values = legalForms.map((data: LegalForm) => ({
    label: data.name,
    value: data.uuid,
  }));

  return (
    <ComboboxWithLabel
      text="Rechtsform"
      textPosition="horizontal"
      selected={selected}
      data={values}
      onChange={onChange}
    />
  );
};

export default LegalFormComboBox;
