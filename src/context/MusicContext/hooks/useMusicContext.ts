import { useContext } from 'react';
import { MusicContext } from '../MusicContext';

export const useMusicContext = () => {
    const context = useContext(MusicContext);

    if (!context) {
        throw new Error('useMusicContext must be used within a MusicProvider');
    }

    return context;
}
