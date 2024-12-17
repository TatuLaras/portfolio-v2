import { useEffect, useRef, useState } from 'react';
import NextPreviousButtons from '../NextPreviousButtons';

interface Props {
    screenshots: string[];
    open?: boolean;
    onClose?: () => void;
}

export default function Screenshots({
    screenshots,
    open = false,
    onClose = () => {},
}: Props) {
    const [screenshotIndex, setScreenshotIndex] = useState(0);
    const imageRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        setScreenshotIndex(0);
    }, [open, screenshots]);

    function next() {
        setScreenshotIndex((old) => Math.min(screenshots.length - 1, old + 1));
    }

    function previous() {
        setScreenshotIndex((old) => Math.max(0, old - 1));
    }

    useEffect(() => {
        if (!imageRef.current) return;

        imageRef.current.classList.remove('animate');
        setTimeout(() => imageRef.current?.classList.add('animate'), 30);
    }, [screenshotIndex, open]);

    return (
        <>
            <div
                className={`screenshots ${open ? 'open' : ''}`}
                onClick={onClose}
            >
                <div className="image" ref={imageRef}>
                    <img
                        key={screenshotIndex}
                        src={screenshots[screenshotIndex]}
                        alt="Project screenshot"
                    />
                </div>
                <NextPreviousButtons
                    darken
                    onNext={(e) => {
                        e.stopPropagation();
                        next();
                    }}
                    onPrevious={(e) => {
                        e.stopPropagation();
                        previous();
                    }}
                    disablePrevious={screenshotIndex == 0}
                    disableNext={screenshotIndex == screenshots.length - 1}
                />
            </div>
        </>
    );
}
