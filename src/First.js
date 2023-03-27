import React, { useState, useEffect, useRef } from "react";

const useHover = (onHover) => {
    const element = useRef();
    // componentDidMount
    useEffect(() => {
        if (typeof onHover !== "function") {
            return;
        }
        // add event listener when component mount
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        // clean up when component unmount
        // componentWillUnmount
        // component가 mount되지 않았을때 eventListener를 배치하지 않기 위해
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        }
    }, []);
    return element;
};

const First = () => {
    const sayHello = () => console.log("say hello");
    const title = useHover(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    )
}

export default First;