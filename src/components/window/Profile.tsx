import { description } from '../../content';
import { delay } from '../../helpers';
import TextTypeAnimation from '../TextTypeAnimation';

type Props = { delayValue: number };

export default function Profile({ delayValue }: Props) {
    return (
        <>
            <div
                className="face basic-panel right animate-open"
                style={delay(delayValue)}
            >
                <div className="barcode">lvgssig</div>
            </div>
            <div className="jitter profile" style={delay(delayValue)}>
                {description}
            </div>
        </>
    );
}
