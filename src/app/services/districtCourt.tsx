import axios from 'axios'
import { DistrictCourt } from '../types/districtCourt.d';
const baseUrl = 'https://localhost:7136/api/DistrictCourt/'

export async function CreateDistrictCourt(DistrictCourt:DistrictCourt) {
  try {
    console.log(DistrictCourt)
    const response = await axios.post(`${baseUrl}CreateDistrictCourt`, DistrictCourt);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function UpdateDistrictCourt(DistrictCourt:DistrictCourt) {
    try {
        console.log(DistrictCourt)
      const response = await axios.post(`${baseUrl}UpdateDistrictCourt`, DistrictCourt);
    
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

export async function DeleteDistrictCourt(DistrictCourt:any) {
    try {
      const response = await axios.post(`${baseUrl}DeleteDistrictCourt`, DistrictCourt);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
export default { CreateDistrictCourt, DeleteDistrictCourt, GetAllDistrictCourts, UpdateDistrictCourt };
