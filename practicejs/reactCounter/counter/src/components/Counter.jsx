import React from "react";
import { useState } from "react";

function Counter(){
const[count, setCount]= useState(0);

function handleInc(value){
    setCount(count+value);
}
function handleDec(){
    setCount(count-1);
}
function handleRec(){
    setCount(0);
}

return (
    <>
    <h1>The Count is:{count}</h1>
    <button onClick={()=>handleInc(2)}>Inc Count</button>
    <button onClick={handleDec}>Dec Count</button>
    <button onClick={handleRec}>Reset Count</button>
    </>
)


}

export default Counter;