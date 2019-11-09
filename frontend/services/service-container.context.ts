import { createContext } from 'react';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import Axios from 'axios';
import { NavigationService } from './navigation.service';

const baseURL = 'https://light-hound-3.localtunnel.me'; // TODO: obviously
const axios = Axios.create({ baseURL });

export const serviceContainerContextDefaultValue = {
    appService: new AppService(axios),
    userService: new UserService(axios),
    navigationService: new NavigationService(),
};

export const ServiceContainer = createContext(serviceContainerContextDefaultValue);
