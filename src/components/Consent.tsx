export default function Consent({
    onConsent,
}: {
    onConsent: () => void;
}) {
    return (
        <div id='consent'>
            <div className='scanlines'></div>
            <h1>Varoitus:</h1>
            <p>Sivu sisältää välkkyviä elementtejä.</p>
            <div className='agree hover-shake' onClick={onConsent}>
                KIRJAUDU PORTAALIIN
            </div>
            {/* <div className='flags'>
                <img
                    src='/img/flags/gb.png'
                    alt='Toggle language'
                    className={`lang-flag ${language === 'gb' ? 'active' : ''} hover-shake`}
                    onClick={() => onSetLanguage('gb')}
                />
                <img
                    src='/img/flags/fi.png'
                    alt='Toggle language'
                    className={`lang-flag ${language === 'fi' ? 'active' : ''} hover-shake`}
                    onClick={() => onSetLanguage('fi')}
                />
            </div> */}
        </div>
    );
}
