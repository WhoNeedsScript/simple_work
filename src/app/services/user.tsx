import axios from 'axios'
const baseUrl = 'https://localhost:7267/api/User/'

export async function CreateUser(user:any) {
  try {
    const response = await axios.post(`${baseUrl}createUser`, user);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function LoginUser(user:any) {
  try {
    const response = await axios.post(`${baseUrl}login`, user);
    return response.data;
  } catch (error) {
    return null;
  }
}
export default { LoginUser, CreateUser}