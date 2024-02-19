export default function Consent({
    language,
    onConsent,
    onToggleLanguage,
}: {
    language: 'fi' | 'gb';
    onConsent: () => void;
    onToggleLanguage: () => void;
}) {
    return (
        <div id='consent'>
            <div className='scanlines'></div>
            <h1>Varoitus:</h1>
            <p>Sivu sisältää välkkyviä elementtejä.</p>
            <div className='agree hover-shake' onClick={onConsent}>
                KIRJAUDU PORTAALIIN
            </div>
            <img
                src={`/img/flags/${language}.png`}
                alt='Toggle language'
                className='lang-flag'
                onClick={onToggleLanguage}
            />
        </div>
    );
}
