import React from 'react';
import { delay } from '../../helpers';
import { useBlip } from '../../hooks';

type Props = {
    children: JSX.Element | string;
    delayValue?: number;
    onMouseDown?: (e: React.MouseEvent) => void;
};

export default function TabNav({
    children,
    delayValue = 0,
    onMouseDown = () => {},
}: Props) {

    useBlip(delayValue);
    
    return (
        <nav
            className='animate-open'
            style={delay(delayValue)}
            onMouseDown={onMouseDown}
        >
            <div className='tab'>{children}</div>
            <div className='dimple'>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}
