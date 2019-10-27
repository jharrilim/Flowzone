import Axios, { AxiosInstance } from 'axios';
import { RegisterResponse } from './response-types';

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
            console.debug('[Registered]', resp.data);
            return resp.data;
        } catch(err) {
            console.error(err);
            throw err;
        }
    }

    async login(loginData: { identifier: string, password: string }) {
        try {
            const resp = await this._axios.post('/auth/local', loginData);
            console.debug('[Login]', resp.data);
            return resp.data.jwt;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

