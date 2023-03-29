import React, { useState, useEffect } from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        console.log("y", window.scrollY, "x", window.scrollX);
        setState({ y: window.scrollY, x: window.scrollX });
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};

const First = () => {
    const { y } = useScroll();
    return (
        <div style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
        </div>
    )
}

export default First;