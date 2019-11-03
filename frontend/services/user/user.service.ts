import Axios, { AxiosInstance } from 'axios';
import { RegisterResponse, LoginResponse } from './response-types';
import { AsyncStorage } from 'react-native';
import { User } from './user.model';

interface RegisterOpts {
    username: string,
    email: string,
    password: string,
}

export class UserService {
    constructor(private readonly _axios: AxiosInstance) {

    }

    async register(registrationData: RegisterOpts) {
        try {
            const resp = await this._axios.post<RegisterResponse>('/auth/local/register', registrationData);
            await AsyncStorage.setItem('user', JSON.stringify(resp.data.user));
            console.debug('[Registered]', resp.data);
            return resp.data;
        } catch (err) {
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
            console.error('Unable to login');
            throw err;
        }
    }

    async logout() {
        await AsyncStorage.removeItem('user');
    }

    async getCurrentUser(): Promise<User | null> {
        try {
            const user = await AsyncStorage.getItem('user');
            return JSON.parse(user) as User;
        } catch (err) {
            console.info('A user is not logged in already.');
            return null;
        }
    }
}

export default UserService;
