import axios from "axios";

const API_URL = "http://localhost:4000/api/users";

export const findUserById = async (uid) => {
    const response = await axios.get(`${API_URL}/${uid}`);
    return response.data;
  };

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${API_URL}/${uid}`);
    return response.data;
  };

  export const findAllUsers = async () => {
    const response = await axios.get(API_URL);
    const users= response.data;
    return users;
   }