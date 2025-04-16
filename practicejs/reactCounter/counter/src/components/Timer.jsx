import React from "react";
import { useState } from "react";
let Tiim;
function Timer(){
    let [Timer, setTime]= useState(0);


function handleStart(){
   
 Tiim  =  setInterval(()=>{setTime(prev=>prev+1)},1000)

}

function handleStop(){

 clearInterval(Tiim)

}

function handleRec(){
    setTime(0)
    clearInterval(Tiim)

}


if(Timer==10){
    clearInterval(Tiim);
    Tiim  =  setInterval(()=>{setTime(prev=>prev-1)},1000)
    
}


else {
    if(Timer == 0){
        handleStop()
    }
}
 
    return(
        <>
        <h1>Timer</h1>
        <h2>{Timer}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleRec}>Reset</button>

        </>
    )

}

export default Timer;