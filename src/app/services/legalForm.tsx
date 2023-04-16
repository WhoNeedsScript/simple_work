import axios from 'axios'
const baseUrl = 'https://localhost:7136/api/LegalFrom/'

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

export async function DeleteLegalForm(legalForm:any) {
    try {
      const response = await axios.post(`${baseUrl}DeleteLegalForm`, legalForm);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
export default { CreateLegalForm,DeleteLegalForm, GetAllLegalForms,UpdateLegalForm}