import { deleteAuthState } from "../store/slices/auth.slice";
import { store } from "../store/store";
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

const baseUrl = import.meta.env.VITE_PUBLIC_ENV || "";

const cookies = new Cookies();

const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
});

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = cookies.get("token");
    if (token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
};

const responseInterceptor = (response: AxiosResponse) => {
    return response;
};

const errorInterceptor = async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
        (error.response?.status === 401 ||
        store.getState().auth.user != null) &&
        originalRequest
    ) {
        const accessToken = store.getState().auth.accessToken;
        if (accessToken === null) {
            store.dispatch(deleteAuthState());
            console.error("Refresh token not found in storage");
        }
    }

    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export default axiosInstance;