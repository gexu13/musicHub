import axios from "axios";

const API_URL = "http://localhost:4000/api/users/";

const api = axios.create({ withCredentials: true });

// export const register = async ({username, password}) => {
//     const response = await api.post(API_URL + "register", {
//     return response.data;
// }
