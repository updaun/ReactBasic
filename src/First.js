import React, { useState, useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        //console.log("leaving");
        //console.log(event);
        const { clientY } = event;
        // 커서가 위로 나갔을 때만 작동
        if (clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        if (typeof onBefore !== "function") {
            return;
        }
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

const First = () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);
    return (
        <div>
            <div>Hi</div>
        </div>
    )
}

export default First;