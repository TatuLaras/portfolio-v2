import DetailsWindow from './components/window/DetailsWindow';
import Projects from './components/projects/Projects';
import TextTypeAnimation from './components/TextTypeAnimation';
import { dummySourceCode } from './content';
import { delay } from './helpers';
import { useRef, useState } from 'react';
import { TProject } from './types';
import Loading from './components/Loading';
import Consent from './components/Consent';
import DesktopIcon from './components/DesktopIcon';

function App() {
    const [tab, setTab] = useState<'PROFILE' | 'PROJECT' | 'CONTACT'>(
        'PROFILE',
    );
    const [selectedProject, setSelectedProject] = useState<TProject | null>(
        null,
    );
    const [windowKey, setWindowKey] = useState<number>(0);
    const [consent, setConsent] = useState<boolean>(false);
    const bgRef = useRef<HTMLDivElement | null>(null);

    if (!consent) return <Consent onConsent={() => setConsent(true)} />;

    return (
        <>
            <div className='scanlines'></div>
            <div id='bg' ref={bgRef}></div>
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
                <div>
                    <Projects
                        delayValue={1}
                        onProjectSelected={(project) => {
                            setWindowKey((old) => old + 1);
                            setSelectedProject(project);
                            setTab('PROJECT');
                        }}
                    />
                    <DesktopIcon
                        img='/img/floppy.png'
                        delayValue={2.5}
                        onClick={() => (window.location.href = '/cv.pdf')}
                    >
                        Lataa CV
                    </DesktopIcon>
                </div>
                <DetailsWindow
                    delayValue={0}
                    tab={tab}
                    selectedProject={selectedProject}
                    onClickTab={(tab) => {
                        setWindowKey((old) => old + 1);
                        setSelectedProject(null);
                        setTab(tab);
                    }}
                    key={windowKey}
                />
            </div>
        </>
    );
}

export default App;
