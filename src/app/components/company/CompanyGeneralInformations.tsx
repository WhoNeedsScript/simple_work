"use client";

import { FC } from "react";
import Button from "../glassmorph/Button";
import InputWithLable from "../general/inputs/InputWithLable";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/app/store/store";
import { Company } from "@/app/types/company.d";
import { updateNewCompany } from "@/app/store/features/companySlice";
import { selectLegalFormByUuid } from "@/app/store/features/legalFormState";
import { selectDistrictCourtByUuid } from "@/app/store/features/districtCourtSlice";
import { selectFederalStateByUuid } from "@/app/store/features/federalStateSlice";
import LegalFormComboBox from "../legalForm/LegalFormCombobox";
import DistrictCourtComboBox from "../districtCourt/DistrictCourtComboBox";
import FederalStateComboBox from "../federalState/FederalStateCombobox";

interface CompanyGeneralInformationsProps {
  changeTextData: any;
  changeCompanyInformationsForm: any;
}

const CompanyGeneralInformations: FC<CompanyGeneralInformationsProps> = ({
  changeTextData,
  changeCompanyInformationsForm,
}) => {
  const dispatch = useDispatch();

  const newCompany = useSelector(
    (state: RootState) => state.companyState.newCompany
  );

  const changeName = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.name = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeOwner = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.owner = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeHBR = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.hbr = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeSelectedLegalForm = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    const selectedLegalForm = selectLegalFormByUuid(
      store.getState(),
      event.value
    );
    if (selectedLegalForm) {
      changedCompany.legalForm = selectedLegalForm;
      dispatch(updateNewCompany(changedCompany));
    }
  };

  const changeDistrictCourt = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    const selectedDistrictCourt = selectDistrictCourtByUuid(
      store.getState(),
      event.value
    );
    if (selectedDistrictCourt) {
      changedCompany.districtCourt = selectedDistrictCourt;
      dispatch(updateNewCompany(changedCompany));
    }
  };

  const changeEmail = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.eMail = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeMobilenumber= (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.mobilenumber = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeStreetNumber = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.streetnumber = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeStreet = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.street = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeCity = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.city = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changePostcode = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.postcode = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeFederalState = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    const selectedFederalState = selectFederalStateByUuid(
      store.getState(),
      event.value
    );
    if (selectedFederalState) {
      changedCompany.federalState = selectedFederalState;
      dispatch(updateNewCompany(changedCompany));
    }
  };

  const changeCounty = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.country = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const changeBranch = (event: any) => {
    let changedCompany: Company = { ...newCompany };
    changedCompany.branch = event.target.value;
    dispatch(updateNewCompany(changedCompany));
  };

  const checkGeneralInformationsAllSet = () => {
    if (
      newCompany.name!.length !== 0 &&
      newCompany.owner!.length !== 0 &&
      newCompany.eMail!.length !== 0 &&
      newCompany.streetnumber!.length !== 0 &&
      newCompany.street!.length !== 0 &&
      newCompany.city!.length !== 0 &&
      newCompany.federalState!.uuid!.length !== 0 &&
      newCompany.country!.length !== 0 &&
      newCompany.branch!.length !== 0 &&
      ((newCompany.legalForm!.hbr === false &&
        newCompany.legalForm?.name.length !== 0) ||
        (newCompany.legalForm?.hbr === true && newCompany.hbr!.length !== 0)) &&
      newCompany.districtCourt?.uuid?.length !== 0
    ) {
      changeTextData({ name: "Allgemein", result: "full" });
    } else {
      changeTextData({ name: "Allgemein", result: "error" });
    }
  };

  const AddGeneralInformationsHadler = (event: any) => {
    event.preventDefault();
    checkGeneralInformationsAllSet();
    changeCompanyInformationsForm();
  };

  return (
    <form className="h-full flex flex-col   justify-center items-center">
      <div className="text-blue-700 font-poppins text-2xl tracking-widest">
        Unternehmen erstellen
      </div>

      <p>Algemein</p>
      {/*Alle felder requered */}
      <div className="flex flex-col items-start">
        <InputWithLable
          text="Firmenname*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.name}
          onChange={changeName}
        />
        {
           <LegalFormComboBox  onChange={changeSelectedLegalForm}/>
        }
        {newCompany.legalForm!.hbr === true ? (
          <div>
            <InputWithLable
              text={"HBR"}
              textPosition={"horizontal"}
              value={newCompany.hbr}
              onChange={changeHBR}
            />
            { newCompany.hbr!.length !== 0 ? 
                      <DistrictCourtComboBox placeholder='Pflicht'   onChange={changeDistrictCourt}/>
                      :<DistrictCourtComboBox  onChange={changeDistrictCourt}/>}
          </div>
        ) : (
          <div />
        )}
        <InputWithLable
          text="Branch*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.branch}
          onChange={changeBranch}
        />
        <InputWithLable
          text="Besitzer*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.owner}
          onChange={changeOwner}
        />
        <InputWithLable
          text="Email*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.eMail}
          onChange={changeEmail}
        />
        <InputWithLable
          text="Telefonnummer*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.mobilenumber}
          onChange={changeMobilenumber}
        />
      </div>

      <p>Adresse</p>
      <div className="flex flex-col items-start">
        <InputWithLable
          text="Straße*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.street}
          onChange={changeStreet}
        />
        <InputWithLable
          text="Hausnummer*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.streetnumber}
          onChange={changeStreetNumber}
        />
        <InputWithLable
          text="PLZ*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.postcode}
          onChange={changePostcode}
        />
        <InputWithLable
          text="Stadt*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.city}
          onChange={changeCity}
        />
        <FederalStateComboBox
          placeholder="Pflicht"
          onChange={changeFederalState}
        />
        <InputWithLable
          text="Land*"
          placeholder="Pflicht"
          textPosition="horizontal"
          value={newCompany.country}
          onChange={changeCounty}
        />
      </div>

      <Button onClick={AddGeneralInformationsHadler} label="Weiter" />
    </form>
  );
};

export default CompanyGeneralInformations;
