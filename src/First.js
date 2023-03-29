import React, { useState, useEffect, useRef } from "react";

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {
        if (element.current) {
            // for safari
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
                // for firefox
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
                // for chrome
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
                // for IE
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
        // for safari
        if (document.exitFullscreen) {
            document.exitFullscreen();
            // for firefox
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            // for chrome
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            // for IE
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    }
    return { element, triggerFull, exitFull };
}

const First = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div>
            <div ref={element}>
                <img src="https://media.giphy.com/media/3o7TKSjRrfIPjeUGO8/giphy.gif" alt="gif" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    )
}

export default First;