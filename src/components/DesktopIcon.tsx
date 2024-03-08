import { delay, imgSrc } from '../helpers';

type Props = {
    children: string;
    img: string;
    onClick?: () => void;
    delayValue?: number;
};

export default function DesktopIcon({
    children,
    img,
    onClick = () => {},
    delayValue = 0,
}: Props) {
    return (
        <div
            className='desktop-icon animate-open '
            style={delay(delayValue)}
            onClick={onClick}
        >
            <div className='wrapper hover-shake'>
                <div className='img' style={imgSrc(img)}></div>
                <div className='text'>{children}</div>
            </div>
        </div>
    );
}
