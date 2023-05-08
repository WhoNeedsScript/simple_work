import axios from 'axios'
import { TaxOffice } from '../types/taxOffice.d';
const baseUrl = 'http://37.120.161.198:3006/api/TaxOffice/'

export async function CreateTaxOffice(taxOffice:TaxOffice) {
  try {
    console.log(taxOffice)
    const response = await axios.post(`${baseUrl}CreateTaxOffice`, taxOffice);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function UpdateTaxOffice(taxOffice:TaxOffice) {
    try {
        console.log(taxOffice)
      const response = await axios.post(`${baseUrl}UpdateTaxOffice`, taxOffice);
    
      return response.data;
    } catch (error) {
     
      return null;
    }
  }

export async function GetAllTaxOffices() {
  try {
    const response = await axios.post(`${baseUrl}GetAllTaxOffices`)
      console.log(response.data);
     return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function DeleteTaxOffice(taxOffice:any) {
    try {
      console.log(taxOffice)
      const response = await axios.post(`${baseUrl}DeleteTaxOffice`, taxOffice);
      return response.data;
    } catch (error) {
      return null;
    }
  }
export default { CreateTaxOffice, DeleteTaxOffice, GetAllTaxOffices, UpdateTaxOffice };
