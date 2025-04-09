import { useReducer } from "react";


const initialState = {
    firstCounter:0
}

const reducer=(state, action)=>{

    switch(action.type){
        case "inc":
            return {firstCounter:state.firstCounter+action.payload}
        case "dec":
            return {firstCounter:state.firstCounter-action.payload}  
        case "rec":
             return initialState;          

        default :
        return state;    
    }
}

function Counter(){
   const [count, dispatch]= useReducer(reducer, initialState)


    return(

       <>
        <h1>Counter :{count.firstCounter}</h1>
        <button onClick={()=>{dispatch({type:"inc", payload:3})}} >Inc</button>
        <button onClick={()=>{dispatch({type:"dec", payload:3})}}>Dec</button>
        <button onClick={()=>{dispatch({type:"rec"})}}>Reset</button>
        </>
    )

}

export default Counter;