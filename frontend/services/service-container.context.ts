import { createContext } from 'react';
import { AppService } from './app.service';

export const serviceContainerContextDefaultValue = {
    appService: new AppService('https://light-hound-3.localtunnel.me')
};

export const ServiceContainer = createContext(serviceContainerContextDefaultValue);
