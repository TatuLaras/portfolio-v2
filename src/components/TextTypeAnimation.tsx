import { useEffect, useRef, useState } from 'react';
import { randomString } from '../helpers';

export default function TextTypeAnimation({
    children,
    timePerChar = 5,
    writeHeadLength = 4,
    delay = 0,
    loop = false,
}: {
    children: string;
    timePerChar?: number;
    writeHeadLength?: number;
    delay?: number;
    loop?: boolean;
}) {
    const [textLength, setTextLength] = useState<number>(0);
    const [randomChars, setRandomChars] = useState<string>('');
    // used to trigger the useEffect below when looping is enabled
    const [dummyVar, setDummyVar] = useState<number>(0);
    const intervalId = useRef<number>(0);

    useEffect(() => {
        setRandomChars('');
        setTimeout(() => {
            if (intervalId.current > 0) clearInterval(intervalId.current);
            intervalId.current = setInterval(() => {
                setTextLength((old) => old + 1);
                setRandomChars((old) => {
                    let newStr = old + randomString(1);
                    newStr = newStr.substring(newStr.length - writeHeadLength);
                    return newStr;
                });
            }, timePerChar);
        }, delay);

        return () => {
            clearInterval(intervalId.current);
        };
    }, [timePerChar, writeHeadLength, children, dummyVar]);

    useEffect(() => {
        if (textLength < children.length) return;
        clearInterval(intervalId.current);
        setRandomChars('');
        if (loop) {
            setTextLength(0);
            setDummyVar((old) => old + 1);
        }
        return;
    }, [textLength]);

    return (
        <>
            {children.slice(0, textLength)}
            {randomChars}
        </>
    );
}
