import { createContext } from 'react';

export const appContextDefaultValue = {
    user: '',
    currentlyPlaying: {
        title: '',
        artist: '',
        song: './assets/TheCoolProject.MP3'
    },
    showFooter: true,
}

export const AppContext = createContext(appContextDefaultValue);
