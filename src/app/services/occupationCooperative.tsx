import axios from 'axios'
import { OccupationCooperative } from '../types/occupationCooperative.d';
const baseUrl = 'http://37.120.161.198:3005/api/OccupationCooperative/'

export async function CreateOccupationCooperative(occupationCooperative:OccupationCooperative) {
  try {
    const response = await axios.post(`${baseUrl}CreateOccupationCooperative`, occupationCooperative);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function UpdateOccupationCooperative(occupationCooperative:OccupationCooperative) {
    try {
      const response = await axios.post(`${baseUrl}UpdateOccupationCooperative`, occupationCooperative);
      return response.data;
    } catch (error) {
      return null;
    }
  }

export async function GetAllOccupationCooperatives() {
  try {
    const response = await axios.post(`${baseUrl}GetAllOccupationCooperatives`)
     return response.data;
  } catch (error) {
    return null;
  }
}

export async function DeleteOccupationCooperative(occupationCooperative:OccupationCooperative) {
    try {
      const response = await axios.post(`${baseUrl}DeleteOccupationCooperative`, occupationCooperative);
      return response.data;
    } catch (error) {
      return null;
    }
  }
export default { CreateOccupationCooperative, DeleteOccupationCooperative, GetAllOccupationCooperatives, UpdateOccupationCooperative };
