import React, { useEffect } from "react";
import { useState } from "react";

function Factorial(){
const [n, setn]=useState();

const handleChange=(e)=>{
    setn(Number(e.target.value))
}

const calculate=()=>{
    console.log(typeof(n))
}

    return(
        <>
        <input type="number" value={n} onChange={handleChange} />
        <button onClick={calculate}>Calculate Factorial</button>
        </>
    )

}
export default Factorial;