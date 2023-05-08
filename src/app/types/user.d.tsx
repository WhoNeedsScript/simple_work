import { Company } from "./company.d";
import { DistrictCourt } from "./districtCourt.d";
import { FederalState } from "./federalState.d";
import { LegalForm } from "./legalform.d";
import { OccupationCooperative } from "./occupationCooperative.d";
import { TaxOffice } from "./taxOffice.d";

export type User = {
  uuid?: string;
  username?: string;
  eMail?:string;
  password?:string;
}

