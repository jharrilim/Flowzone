import Axios, { AxiosInstance } from 'axios';
import { RegisterResponse, LoginResponse } from './response-types';
import { AsyncStorage } from 'react-native';

interface RegisterOpts {
    username: string,
    email: string,
    password: string,
}

export class AppService {
    private readonly _axios: AxiosInstance;
    constructor(readonly baseURL: string) {
        this._axios = Axios.create({ baseURL });
    }
    
    async register(registrationData: RegisterOpts) {
        try {
            const resp = await this._axios.post<RegisterResponse>('/auth/local/register', registrationData);
            await AsyncStorage.setItem('user', JSON.stringify(resp.data.user));
            console.debug('[Registered]', resp.data);
            return resp.data;
        } catch(err) {
            console.error(err);
            throw err;
        }
    }

    async login(loginData: { identifier: string, password: string }) {
        try {
            const resp = await this._axios.post<LoginResponse>('/auth/local', loginData);
            await AsyncStorage.setItem('user', JSON.stringify(resp.data.user));
            console.debug('[Login]', resp.data);
            return resp.data.jwt;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getComposition() {
        
    }
}

