import React, { useState, useEffect } from "react";

const useInput = (initalValue, validator) => {
    const [value, setValue] = useState(initalValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }
    return { value, onChange };
};

const First = () => {
    // 최대 글자 수 제한
    // const maxLen = value => value.length <= 10;
    // const name = useInput("Mr.", maxLen);

    // 특정 문자열 사용 제한
    const isInclude = value => !value.includes("@");
    const name = useInput("Mr.", isInclude);

    return (
        <div>
            <h1>First</h1>
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
            <input placeholder="Name" {...name} />
        </div>
    )
}


export default First;