import React, { useEffect, useState } from 'react'

export const CountInterview = () => {
const [count, setCount]= useState(0)
function Increament(){
    setCount(count+1)
   
}
useEffect(()=>{
    console.log(count)
},[count])

  return (
    <button onClick={Increament}>Increament</button>
  )
}
