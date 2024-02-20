import DetailsWindow from './components/window/DetailsWindow';
import Projects from './components/projects/Projects';
import TextTypeAnimation from './components/TextTypeAnimation';
import { dummySourceCode } from './content';
import { delay } from './helpers';
import { useState } from 'react';
import { TProject } from './types';
import Loading from './components/Loading';
import { blip, blipInit } from './blip';
import Consent from './components/Consent';
import { useBlip } from './hooks';

function App() {
    const [tab, setTab] = useState<'PROFILE' | 'PROJECT'>('PROFILE');
    const [selectedProject, setSelectedProject] = useState<TProject | null>(
        null,
    );
    const [windowKey, setWindowKey] = useState<number>(0);
    const [consent, setConsent] = useState<boolean>(false);
    const [language, setLanguage] = useState<'fi' | 'gb'>('fi');

    useBlip(0);
    useBlip(1);

    if (!consent)
        return (
            <Consent
                language={language}
                onConsent={() => {
                    blipInit();
                    setConsent(true);
                }}
                onSetLanguage={(language: 'gb' | 'fi') => {
                    setLanguage(language);
                    blip();
                }}
            />
        );

    return (
        <>
            <div className='scanlines'></div>
            <div id='bg'></div>
            <div className='really-small-text jitter'>
                <h1>Varoitus:</h1>
                <p>
                    Tätä ei kannata lukea. Tuhlaat aikaasi. Kyseessä on
                    koristeellinen elementti sivulla, eikä tämä teksti sisällä
                    mitään varsinaista informaatiota.
                </p>
                <h1>Vieläkö luet tätä?</h1>
                <p>Saatat tarvita harrastuksen.</p>
                <p>
                    Alla oleva viivakoodi ei myöskään johda mihinkään, sitä ei
                    kannata yrittää skannata.
                </p>
                <div className='barcode'>lfmslpd</div>
            </div>
            <div className='really-small-text jitter small-text-left'>
                <h1>Info:</h1>
                <p>Tämä teksti ei merkitse mitään, tätä ei kannata lukea.</p>
                <p>
                    <TextTypeAnimation>
                        {`.flags = 0x0, .access_byte = 0x89, .limit_15_0 =
                        sizeof(Tss) & 0xffff, .limit_19_16 = (sizeof(Tss) >>
                        16) & 0xf, .base_address_23_0 = (uint64_t)tss_addr &
                        0xffffff, .base_address_63_24 = ((uint64_t)tss_addr
                        >> 24) & 0xffffffffff`}
                    </TextTypeAnimation>
                </p>
            </div>
            <div className='dummy-source'>
                <pre>
                    <TextTypeAnimation loop={true}>
                        {dummySourceCode}
                    </TextTypeAnimation>
                </pre>
            </div>
            <Loading />
            <div className='animate-open basic-panel blur-bg'>
                <h1 className='jitter' style={delay(0)}>
                    <TextTypeAnimation timePerChar={10} delay={500}>
                        Tatu Laras - Ohjelmistokehittäjä
                    </TextTypeAnimation>
                </h1>
            </div>
            <div
                className='basic-panel blur-bg animate-open horizontal'
                style={delay(0)}
            >
                <TextTypeAnimation writeHeadLength={10}>
                    Löytyy n. 6 vuotta kokemusta ohjelmoinnin saralta, joista
                    noin puolisentoista on työkokemusta. Kokemusta on kertynyt
                    enimmäkseen web-kehityksen piiristä, mutta mielenkiinto on
                    johdattanut monenlaisille muillekin poluille, kuten
                    esimerkiksi mobiilikehityksen, VR-kehityksen ja
                    käyttöjärjestelmäkehityksen pariin.
                </TextTypeAnimation>
            </div>
            <div className='side-by-side'>
                <Projects
                    delayValue={1}
                    onProjectSelected={(project) => {
                        setWindowKey((old) => old + 1);
                        setSelectedProject(project);
                        setTab('PROJECT');
                    }}
                />
                <DetailsWindow
                    delayValue={0}
                    tab={tab}
                    selectedProject={selectedProject}
                    onProfileClicked={() => {
                        setWindowKey((old) => old + 1);
                        setSelectedProject(null);
                        setTab('PROFILE');
                    }}
                    key={windowKey}
                />
            </div>
        </>
    );
}

export default App;
