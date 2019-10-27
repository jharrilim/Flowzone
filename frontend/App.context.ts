import { createContext } from 'react';

export const appContextDefaultValue = {
    user: '',
    currentlyPlaying: {
        title: '',
        artist: '',
        song: './assets/TheCoolProject.MP3'
    }
}

export const AppContext = createContext(appContextDefaultValue);
