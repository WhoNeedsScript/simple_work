import axios from 'axios'
import { FederalState } from '../types/federalState.d';

const baseUrl = 'http://37.120.161.198:3002/api/FederalState/'

export async function CreateFederalState(federalState:FederalState) {
  try {
    const response = await axios.post(`${baseUrl}CreateFederalState`, federalState);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function UpdateFederalState(federalState:FederalState) {
    try {
      const response = await axios.post(`${baseUrl}UpdateFederalState`, federalState);
      return response.data;
    } catch (error) {
     
      return null;
    }
  }

export async function GetAllFederalStates() {
  try {
    const response = await axios.post(`${baseUrl}GetAllFederalStates`)
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function DeleteFederalState(federalState:FederalState) {
    try {
      const response = await axios.post(`${baseUrl}DeleteFederalState`, federalState);
      return response.data;
    } catch (error) {
      return null;
    }
  }
export default { CreateFederalState, DeleteFederalState, GetAllFederalStates, UpdateFederalState };
