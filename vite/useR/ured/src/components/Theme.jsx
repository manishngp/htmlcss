import { useReducer } from "react";
import React from "react";

import './Theme.css'

const initialState = {
    thm:false
}

const reducer =(state, action)=>{

    switch(action){
        case true :
            return true

        case false :
            return false
        
            default:
            return state    
    }
}
const Theme=()=>{

    const [color, dispatch] = useReducer(reducer, initialState);

    const themename = color?"dark-theme":"light-theme"

    return(
        <div className = {themename}>
        <button onClick={()=>{dispatch(!color)}}>{color?"light":"dark"}</button>
      { color && <div className = {themename}>
        This is a styled div.
      </div>}
      </div>
    )
    
}

export default Theme;