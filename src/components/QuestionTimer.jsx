import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("settimeout")
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("setintervel")
        const intervel = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
        return () => {
            clearInterval(intervel)
        };
    }, []);


    return <progress id="question-time" max={timeout} value={remainingTime} />
}