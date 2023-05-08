import { DistrictCourt } from "./districtCourt.d";
import { FederalState } from "./federalState.d";
import { LegalForm } from "./legalform.d";
import { OccupationCooperative } from "./occupationCooperative.d";
import { TaxOffice } from "./taxOffice.d";

export type Company = {
  uuid?: string;
  name?: string;
  owner?:string;
  mobilenumber?:string
  eMail?:string;

  streetnumber?:string;
  street?:string;
  postcode?:string;
  city?:string;
  federalState?: FederalState;
  country?:string;

  companyNumber?:string;
  companySize?:number;
  branch?:string;
  occupationCooperative?:OccupationCooperative
  legalForm?:LegalForm;
  hbr?:string;
  districtCourt?:DistrictCourt
  taxOffice?:TaxOffice
  steuerIdent?:string
  taxNumber?:string
}

