import { AxiosInstance } from 'axios';

interface RegisterOpts {
    username: string,
    email: string,
    password: string,
}

export class AppService {
    constructor(private readonly _axios: AxiosInstance) {
    }
    
    async getComposition() {
        
    }
}

export default AppService;
