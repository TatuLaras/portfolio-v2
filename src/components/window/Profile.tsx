import { delay } from '../../helpers';
import { useBlip } from '../../hooks';
import TextTypeAnimation from '../TextTypeAnimation';

export default function Profile({ delayValue }: { delayValue: number }) {
    useBlip(delayValue);

    return (
        <>
            <div
                className='face basic-panel right animate-open'
                style={delay(delayValue)}
            >
                <div className='barcode'>lvgssig</div>
            </div>
            <div className='jitter profile' style={delay(delayValue)}>
                <p>
                    {/* <TextTypeAnimation
                        timePerChar={3}
                        writeHeadLength={10}
                        delay={delayValue * 1000}
                        loop={false}
                    > */}
                    Teknologioista parhaiten taittuvat front-endissä
                    <b> React</b>-pohjaiset ratkaisut ja myös kaikenlainen
                    Vanilla-vääntäminen. Back-endin puolella kokemusta on
                    karttunut eniten <b>Node.js</b> (ja <b>Express</b>)
                    -ympäristöstä, sekä klassikko-<b>PHP</b>:n kanssa on tullut
                    työskenneltyä työn puolestakin paljon.
                    <b> SQL</b>-relaatiotietokannat (<b>MariaDB / MySQL</b>,{' '}
                    <b>SQL Server</b>) tunnen kuin omat taskuni.
                    {/* </TextTypeAnimation> */}
                </p>
                <p>
                    <TextTypeAnimation
                        timePerChar={3}
                        writeHeadLength={10}
                        delay={delayValue * 1000}
                        loop={false}
                    >
                        Teknologioiden suhteen olen työskennellyt sekä modernien
                        työkalujen, että legacyn kanssa, johonkin uuteen
                        teknologiaan mukautuminen ja perehtyminen ei ole
                        tuottanut minulle ongelmia.
                    </TextTypeAnimation>
                </p>
                <p>
                    <TextTypeAnimation
                        timePerChar={3}
                        writeHeadLength={10}
                        delay={delayValue * 1000}
                        loop={false}
                    >
                        Vakaiden tietorakenteiden ja -integraatioiden
                        rakentaminen sujuu kuin itsestään. Myös lähestyttävien
                        käyttöliittymien suunnittelu ja toteutus sytyttää.
                    </TextTypeAnimation>
                </p>
                <p>
                    <TextTypeAnimation
                        timePerChar={3}
                        writeHeadLength={10}
                        delay={delayValue * 1000}
                        loop={false}
                    >
                        Olen tällä hetkellä avoinna kaikenlaisille
                        työmahdollisuuksille!
                    </TextTypeAnimation>
                </p>
            </div>
        </>
    );
}
