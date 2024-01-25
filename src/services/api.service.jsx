import { getToken } from "@/helper/tokenHelper";
import axios from "axios";

const { VITE_BACKEND_PORT_DEVELOPMENT } = import.meta.env;

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
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/login`, data);
};
export const GenerateOtpForPasswordReset = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/generate-otp`, data);
};
export const ResetPassword = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/reset-password`, data);
};


export const RegisterGoogleService = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}register`);
};
export const RegisterSellerService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}seller/create-seller`, data, config);
};
export const RegisterBuyerService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}buyer/create-buyer`, data, config);
};
export const RegisterSiteService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}site/create-site`, data, config);
};
export const DeleteIndividualSeller = async (id) => {
    return await axios.delete(`${VITE_BACKEND_PORT_DEVELOPMENT}seller/delete-seller/${id}`);
};
export const DeleteIndividualBuyer = async (id) => {
    return await axios.delete(`${VITE_BACKEND_PORT_DEVELOPMENT}buyer/delete-buyer/${id}`);
};
export const fetchSellerService = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}seller/list-seller`);
};
export const fetchBuyerService = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}buyer/list-buyer`);
};
export const fetchSiteService = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}`);
};

export const fetchUserWhoAmI = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}user/who-am-i`);
};
export const fetchDashboardData = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}user/dashboard`);
};





