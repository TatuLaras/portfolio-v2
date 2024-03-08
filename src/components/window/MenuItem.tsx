import { delay } from '../../helpers';

type Props = {
    children: JSX.Element | string;
    onClick?: () => void;
    delayValue?: number;
    disabled?: boolean;
};

export default function MenuItem({
    children,
    onClick = () => {},
    delayValue = 0,
    disabled = false,
}: Props) {
    return (
        <li className='animate-open vertical' style={delay(delayValue)}>
            <span
                className={`inner ${disabled ? 'disabled' : ''}`}
                onClick={onClick}
            >
                {children}
            </span>
        </li>
    );
}
