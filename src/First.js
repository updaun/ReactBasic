import React, { useState, useEffect } from "react";

const useInput = (initalValue) => {
    const [value, setValue] = useState(initalValue);
    const onChange = (event) => {
        console.log(event.target);
    }
    return { value, onChange };
};

const First = () => {
    const name = useInput("Mr.");
    return (
        <div>
            <h1>First</h1>
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
            <input placeholder="Name" {...name} />
        </div>
    )
}


export default First;