"use client";

import { FC } from "react";
import ComboboxWithLabel from "../general/combobox/ComboBoxWithLabel";
import { FederalState } from "@/app/types/federalState.d";
import { useSelector } from "react-redux";

interface FederalStateComboBoxProps {
  onChange: any;
  selected?: any;
  placeholder?:string;
}

const FederalStateComboBox: FC<FederalStateComboBoxProps> = ({
  onChange,
  selected,
  placeholder
}) => {
  const federalStates = useSelector(
    (state: any) => state.federalStateState.federalStates
  );

  const values = federalStates.map((data: FederalState) => ({
    label: data.abbreviation,
    value: data.uuid,
  }));

  return (
    <ComboboxWithLabel
      text="Bundesland"
      textPosition="horizontal"
      placeholder={placeholder}
      selected={selected}
      data={values}
      onChange={onChange}
    />
  );
};

export default FederalStateComboBox;
