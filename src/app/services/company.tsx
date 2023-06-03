import axios from 'axios'
import { DistrictCourt } from '../types/districtCourt.d';
import { Company } from '../types/company.d';
//const baseUrl = 'http://37.120.161.198:3003/api/Company/'
const baseUrl = `http://localhost:5118/api/Company/`

export async function GetCompaniesByUserUUID(userUUID:string) {
    try {
      const response = await axios.post(`${baseUrl}GetCompaniesByUserUUID?userUUID=${userUUID}`)
       return response.data.result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

export async function CreateCompany(company:Company, userUUID:string) {
  try {
    const response = await axios.post(`${baseUrl}CreateCompany?userUUID=${userUUID}`, company);
    return response.data.uuid;
  } catch (error) {
    return null;
  }
}

export default { CreateCompany,GetCompaniesByUserUUID };
