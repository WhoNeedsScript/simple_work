import axios from 'axios'
import { DistrictCourt } from '../types/districtCourt.d';
const baseUrl = 'http://37.120.161.198:3001/api/DistrictCourt/'

export async function CreateDistrictCourt(districtCourt:DistrictCourt) {
  try {
    const response = await axios.post(`${baseUrl}CreateDistrictCourt`, districtCourt);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function UpdateDistrictCourt(districtCourt:DistrictCourt) {
    try {
      const response = await axios.post(`${baseUrl}UpdateDistrictCourt`, districtCourt);
    
      return response.data;
    } catch (error) {
     
      return null;
    }
  }

export async function GetAllDistrictCourts() {
  try {
    const response = await axios.post(`${baseUrl}GetAllDistrictCourts`)
     return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function DeleteDistrictCourt(districtCourt:DistrictCourt) {
    try {
      const response = await axios.post(`${baseUrl}DeleteDistrictCourt`, districtCourt);
      return response.data;
    } catch (error) {
      return null;
    }
  }
export default { CreateDistrictCourt, DeleteDistrictCourt, GetAllDistrictCourts, UpdateDistrictCourt };
