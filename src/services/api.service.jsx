import { getToken } from "@/helper/tokenHelper";
import axios from "axios";

const { VITE_BACKEND_PORT_DEVELOPMENT } = import.meta.env;
console.log(VITE_BACKEND_PORT_DEVELOPMENT)

axios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

const config = {
    headers: { "Content-Type": "multipart/form-data", },
}

export const LoginService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/login-user`, data);
};
export const RegisterGoogleService = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}register`);
};
export const RegisterSellerService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}seller/create-seller`, data, config);
};


