import { delay } from '../../helpers';
import { useBlip } from '../../hooks';

type Props = {
    children: JSX.Element | string;
    onClick?: () => void;
    delayValue?: number;
};

export default function MenuItem({
    children,
    onClick = () => {},
    delayValue = 0,
}: Props) {
    useBlip(delayValue);

    return (
        <li className='animate-open vertical' style={delay(delayValue)}>
            <span className='inner' onClick={onClick}>
                {children}
            </span>
        </li>
    );
}
