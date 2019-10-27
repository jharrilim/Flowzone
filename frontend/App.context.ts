import { createContext } from 'react';

export const appContextDefaultValue = {
    user: ''
}

export const AppContext = createContext(appContextDefaultValue);
