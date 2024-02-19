import { useEffect, useRef, useState } from 'react';

type Props = {
    updateInterval?: number;
};

export default function Loading({ updateInterval = 300 }: Props) {
    const [loadingState, setLoadingState] = useState<number>(0);

    const intervalId = useRef<number>(0);
    useEffect(() => {
        intervalId.current = setInterval(() => {
            setLoadingState((old) => {
                let newValue = old + Math.random() * 0.1;
                if (newValue >= 1) return 1;
                return newValue;
            });
        }, updateInterval);

        return () => {
            clearInterval(intervalId.current);
        };
    }, []);

    useEffect(() => {
        if (loadingState >= 1) clearInterval(intervalId.current);
    }, [loadingState]);

    const percentage = (loadingState * 100).toFixed(1) + '%';

    return (
        <div className='loading animate-open flash blur-bg'>
            <div className='text-above'>::PORTFOLIO{'>>'}</div>
            <div
                className='bar'
                style={{ '--loaded': percentage } as React.CSSProperties}
            ></div>
            <div className='text-below'>LOADED {percentage}</div>
        </div>
    );
}
