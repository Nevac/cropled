import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
    const savedCallback = useRef();
    let timer = useRef();

    const reset = () => {
        clearInterval(timer.current);
        timer.current = setInterval(() => savedCallback.current(), delay);
    }

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (delay !== null) {
            timer.current = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(timer.current);
        }
    }, [delay]);

    return [reset];
}