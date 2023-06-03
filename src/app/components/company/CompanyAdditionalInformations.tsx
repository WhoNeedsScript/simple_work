"use client";

import { FC, use, useEffect, useState } from "react";

import ComboboxWithLabel from "../general/combobox/ComboBoxWithLabel";
import InputWithLable from "../general/inputs/InputWithLable";
import CheckBoxWithLabel from "../general/checkboxes/CheckboxWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/app/store/store";
import TaxOfficeComboBox from "../taxOffice/TaxOfficeCombobox";
import OccupationCooperativeComboBox from "../occupationCooperative/OccupationCooperativeCombobox";
import { Company } from "@/app/types/company.d";
import { selectTaxOfficeByUuid } from "@/app/store/features/taxOfficeSlice";
import { updateNewCompany } from "@/app/store/features/companySlice";
import { selectOccupationCooperativeByUuid } from "@/app/store/features/occupationCooperativeSlice";
import { selectDistrictCourtByUuid } from "@/app/store/features/districtCourtSlice";
import DistrictCourtComboBox from "../districtCourt/DistrictCourtComboBox";

interface CompanyAdditionalInformationsProps {}

const CompanyAdditionalInformations: FC<
  CompanyAdditionalInformationsProps
> = ({}) => {
  const dispatch = useDispatch();

  const newCompany = useSelector(
    (state: RootState) => state.companyState.newCompany
  );

  const changeFinanzamt = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    const selectedTaxOffice = selectTaxOfficeByUuid(
      store.getState(),
      event.value
    );
    if (selectedTaxOffice) {
      changedCompany.taxOffice = selectedTaxOffice;
      dispatch(updateNewCompany(changedCompany));
    }
  };





  const changeSteuerIdent = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.steuerIdent = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeSteuernummer = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.taxNumber = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeBetriebsnummer = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.companyNumber = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeBetriebsgröße = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.companySize = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeBerufsgenossenschaft = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    const selectedOccupationCooperative = selectOccupationCooperativeByUuid(
      store.getState(),
      event.value
    );
    if (selectedOccupationCooperative) {
      changedCompany.occupationCooperative = selectedOccupationCooperative;
      dispatch(updateNewCompany(changedCompany));
    }
  };

  return (
    <form className="h-full flex flex-col   justify-center items-center">
      <div className="text-blue-700 font-poppins text-2xl tracking-widest">
        Unternehmen erstellen
      </div>

      <p>Zusätzliche Informationen</p>

      <div className="flex flex-col items-start">
      <InputWithLable
          textPosition={"horizontal"}
          text={"Betriebsnummer"}
          value={newCompany.companyNumber}
          onChange={changeBetriebsnummer}
        />
        
        <TaxOfficeComboBox onChange={changeFinanzamt} />
        <InputWithLable
          textPosition={"horizontal"}
          text={"SteuerIdnet"}
          value={newCompany.steuerIdent}
          onChange={changeSteuerIdent}
        />
        <InputWithLable
          textPosition={"horizontal"}
          text={"Steuernummer"}
          value={newCompany.taxNumber}
          onChange={changeSteuernummer}
        />
        <InputWithLable
          textPosition={"horizontal"}
          text={"Betriebsgröße"}
          value={newCompany.companySize}
          onChange={changeBetriebsgröße}
        />
        {newCompany.companySize! > 1 ? (
          <div>
            <OccupationCooperativeComboBox
              onChange={changeBerufsgenossenschaft}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </form>
  );
};

export default CompanyAdditionalInformations;
