import Axios, { AxiosInstance } from 'axios';

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
        return await this._axios.post('/auth/local/register', registrationData);
    }
}

