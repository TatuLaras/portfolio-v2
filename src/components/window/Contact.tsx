import { useBlip } from '../../hooks';

type Props = { delayValue?: number };

export default function Contact({ delayValue = 0 }: Props) {
    useBlip(delayValue);

    return (
        <div className='contact'>
            <p>Yhteystiedot yms:</p>
            <p>
                <a href='mailto:tatu.laras@gmail.com' target='_blank'>
                    tatu.laras@gmail.com
                </a>
            </p>
            <p>
                <a href='tel:+358451787499' target='_blank'>
                    +358 45 1787499
                </a>
            </p>
            <p>
                <a href='http://www.linkedin.com/in/tatularas' target='_blank'>
                    LinkedIn
                </a>
            </p>
            <p>
                <a href='https://github.com/TatuLaras/' target='_blank'>
                    GitHub
                </a>
            </p>
        </div>
    );
}
