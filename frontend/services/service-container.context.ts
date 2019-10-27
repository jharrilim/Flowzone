import { createContext } from 'react';
import { AppService } from './app.service';

export const serviceContainerContextDefaultValue = {
    appService: new AppService('localhost')
};

export const ServiceContainer = createContext(serviceContainerContextDefaultValue);
