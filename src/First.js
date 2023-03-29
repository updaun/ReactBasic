import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";


const First = () => {
    const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
    //console.log("Loading: ", loading, "Data: ", JSON.stringify(data), "Error: ", error);
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default First;