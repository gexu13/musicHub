import axios from "axios";

const API_URL = "http://localhost:4000/api/users";

const api = axios.create({ withCredentials: true });

export const register = async (user) => {
    const response = await api.post(`${API_URL}/register`, user);
    return response.data;
}

export const login = async ({username, password}) => {
    const response = await api.post(`${API_URL}/login`, {username, password});
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${API_URL}/logout`);
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`);
    return response.data;
}

export const update = async (user) => {
    const response = await api.put(`${API_URL}`, user);
    return response.data;
}


