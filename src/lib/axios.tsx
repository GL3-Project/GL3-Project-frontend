import {
    AxiosError,
    AxiosResponse,
    // eslint-disable-next-line import/no-named-default
    default as Axios, InternalAxiosRequestConfig,
} from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';
import Cookies from 'js-cookie';
import { useNotificationStore } from '@/stores/notifications';
import { API_URL } from '@/config';

const axios = Axios.create({
    baseURL: API_URL,
});

export function AxiosInterceptor({ children } : { children : ReactNode }) {
    const [isSet, setIsSet] = useState(false);
    const navigate = useNavigate();
    const signOut = useSignOut();
    // this function intercepts requests and makes sure that the token is added to the request header
    const requestInterceptor = (config: InternalAxiosRequestConfig<any>) => {
        const token = Cookies.get('_auth');
        if (token) {
            // eslint-disable-next-line no-param-reassign
            config.headers!.authorization = `Bearer ${token}`;
        }
        // eslint-disable-next-line no-param-reassign
        config.headers!.Accept = 'application/json';
        return config;
    };
    const responseInterceptor = (response : AxiosResponse) => response.data;
    const errorInterceptor = (error : AxiosError) => {
        const message = error.response?.data || 'Something went wrong...';
        useNotificationStore.getState().addNotification({
            type: 'error',
            title: 'Request failed',
            message: message as string,
        });
        if (error.response?.status === 401) {
            signOut();
            navigate('/auth/login');
        }
        return Promise.reject(error);
    };

    useEffect(() => {
        axios.interceptors.request.use(requestInterceptor);
        const interceptor = axios.interceptors.response.use(responseInterceptor, errorInterceptor);
        setIsSet(true);
        return () => axios.interceptors.response.eject(interceptor);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            { isSet && children }
        </>
    );
}
export default axios;
