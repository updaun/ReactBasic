import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (typeof duration !== "number" || duration < 0 || typeof delay !== "number") {
            return;
        }
        if (element.current) {
            const { current } = element;
            current.style.opacity = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1;
        };
    }, []);
    return { ref: element, style: { opacity: 0 } };
}

const First = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);
    return (
        <div>
            <h1 {...fadeInH1}>Hi</h1>
            <p {...fadeInP}>lorem ipsum lalala</p>
        </div>
    )
}

export default First;