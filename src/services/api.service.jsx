import axios from "axios";

const { VITE_BACKEND_PORT_DEVELOPMENT } = import.meta.env;
console.log(VITE_BACKEND_PORT_DEVELOPMENT)

export const LoginService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/login-user`, data);
};
export const RegisterGoogleService = async () => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}register`);
};
export const RegisterService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/create-user`, data);
};

export const ForgotPasswordService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/forget-password-otp-user`, data);
};
export const ChangePasswordService = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user/forget-reset-password-user`, data);
};

