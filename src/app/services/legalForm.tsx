import axios from 'axios'
const baseUrl = 'http://37.120.161.198:3004/api/LegalForm/'

export async function CreateLegalForm(legalForm:any) {
  try {
    console.log(legalForm)
    const response = await axios.post(`${baseUrl}CreateLegalForm`, legalForm);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function UpdateLegalForm(legalForm:any) {
    try {
        console.log(legalForm)
      const response = await axios.post(`${baseUrl}UpdateLegalForm`, legalForm);
    
      return response.data;
    } catch (error) {
     
      return null;
    }
  }

export async function GetAllLegalForms() {
  try {
    const response = await axios.post(`${baseUrl}GetAllLegalForms`)
   
     return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function DeleteLegalForm(uuid:string) {
    try {
      console.log(uuid)
      const response = await axios.post(`${baseUrl}DeleteLegalForm?uuid=${uuid}`);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
export default { CreateLegalForm,DeleteLegalForm, GetAllLegalForms,UpdateLegalForm}