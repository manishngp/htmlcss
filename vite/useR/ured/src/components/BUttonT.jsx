import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';



function ButtonT(){

    const[btn1, setBtn1]=useState(false);
    const[btn2, setBtn2]=useState(false);
    const[btn3, setBtn3]=useState(false);

    const showDiv=async()=>{
        setBtn1(!btn1);
        setBtn2(false);
        setBtn3(false);
    }

    const showDiv2=async()=>{
        setBtn1(false);
        setBtn2(!btn2);
        setBtn3(false);
    }

    const showDiv3=async()=>{
        setBtn1(false);
        setBtn2(false);
        setBtn3(!btn3);
    }



return(
    <div style={{display:"flex", flexDirection:"column"}}>

             <button onClick={showDiv}> {btn1? <ChevronUp />: <ChevronDown />}</button>

          { btn1&&  <div> may name is Manish</div>  }

             <button onClick={showDiv2}> {btn2? <ChevronUp />: <ChevronDown />}</button>

          { btn2 &&  <div>tthen 2nd is opened</div>  }

             <button onClick={showDiv3}> {btn3? <ChevronUp />: <ChevronDown />}</button>

         {btn3 &&    <div>third is open</div> }


             </div>

);

}

export default ButtonT;