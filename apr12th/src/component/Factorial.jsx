import React from "react";

import { useState } from "react";

function Factorial(){
const [n, setn]=useState();
const [fact, setFact]=useState();

const handleChange=(e)=>{
    setn(Number(e.target.value))
}

function calF(n){
    const facto=(n)=>{
        if(n==0) return 1;
        if (n==1) return 1;
        
        return (n*facto(n-1))
    
    }
setFact(facto(n));

}




    return(
        <>
        <input type="number" value={n} onChange={handleChange} />
        <button onClick={()=>calF(n)}>Calculate Factorial</button>
        {fact && <p>factorial of {n} is :{fact} </p>}
        </>
    )

}
export default Factorial;