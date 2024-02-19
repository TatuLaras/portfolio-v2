import { useEffect } from 'react';
import { blip } from './blip';

export function useBlip(delay = 0) {
    return useEffect(() => {
        const id = setTimeout(blip, delay * 1000);
        return () => {
            clearTimeout(id);
        }
    }, []);
}
