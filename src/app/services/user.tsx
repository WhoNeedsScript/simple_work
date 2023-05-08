import axios from 'axios'
const baseUrl = 'http://37.120.161.198:3000/api/User/'

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