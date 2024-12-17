interface Props {
    onPrevious: (e: any) => void;
    onNext: (e: any) => void;
    disablePrevious?: boolean;
    disableNext?: boolean;
    darken?: boolean;
}

export default function NextPreviousButtons({
    onPrevious,
    onNext,
    disablePrevious = false,
    disableNext = false,
    darken = false,
}: Props) {
    return (
        <div className={`next-previous-buttons ${darken ? 'darkened' : ''}`}>
            <button
                onClick={onPrevious}
                className={!disablePrevious ? 'enabled' : ''}
            >
                &lt;&lt;
            </button>
            <button onClick={onNext} className={!disableNext ? 'enabled' : ''}>
                &gt;&gt;
            </button>
        </div>
    );
}
