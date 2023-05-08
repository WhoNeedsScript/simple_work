import { FederalState } from "./federalState.d";

export type TaxOffice = {
  uuid?: string;
  name: string;
  number: number;
  federalState: FederalState;
}

