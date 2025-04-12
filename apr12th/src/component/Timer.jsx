import React, { useEffect, useState } from "react";

let updatingTime;
function Timer(){
    
    

    const [count, setCount]=useState(0);
    const [select, setSelect]=useState("up");




     const handleStart=()=>{
        if(select=="up"){
        updatingTime = setInterval(()=>{setCount(prev=>prev+1)},1000)
        }
        if(select=="down" && count > 0){
            updatingTime = setInterval(()=>{setCount(prev=>prev-1)},1000)
        }
       

     }

     if(select=="down" && count==0){
        clearInterval(updatingTime);
    }
     const handlePause=()=>{
       
        clearInterval(updatingTime);
     }
     const handleReset=()=>{
           setCount(0);
           handlePause();
     }
     

  function handleChange(e){
    setSelect(e.target.value)

  }



  useEffect(() => {
   
   
    
      clearInterval(updatingTime)
    
  }, [select]);
  


    return(

        <>

        <h2>Timer Coundown</h2>
        <h2>{count}</h2>

        <select value={select}  onChange={handleChange}>
            <option value="up">Count Up</option>
            <option value="down">Count down</option> 
        </select>

        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        
        
        </>
    )

}

export default Timer;