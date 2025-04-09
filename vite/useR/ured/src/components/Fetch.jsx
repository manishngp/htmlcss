import { useEffect, useReducer } from "react";
import axios from 'axios'

const initialState={
    posts:[],
    loading:true,
    error:""
}

const reducer =(state, action)=>{

    switch(action.type){
        case "loading":
            return {  posts:[],
                loading:true,
                error:"" }
        case "loaded":
        return {  posts:action.payload,
         loading:true,
        error:"" }

        default:
        return state
                

    }
}

const Fetch=()=>{

    const[state, dispatch]=useReducer(reducer, initialState);

   const  data= async()=>{
        try {
            dispatch({type:"loading"})
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
          
            dispatch({type:"loaded", payload:res.data})
        
            
        } catch (error) {
            console.log(error.message)
            dispatch({type:"unloaded", payload:error.message})
        }
    }

useEffect(()=>{
    data();
},[])

console.log(state.posts)
    return(
        <div>hello</div>
    )
}

export default Fetch;