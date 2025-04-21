import axios from "axios"
import { LOG_OUT, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"
const loginRequest=()=>{
    return {
        type:LOGIN_REQUEST,
    }
}
const loginSuccess=(user)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:user
    }
}
const loginError=(error)=>{
    return{
        type:LOGIN_ERROR,
        payload:error
    }
}
export const logOut=()=>{
    return{
        type:LOG_OUT
    }
}

 export function loginUser(data){
    return async(dispatch)=>{
        dispatch(loginRequest())    
        try {
            const loginData=await axios.get("https://authentication-4ae3d-default-rtdb.firebaseio.com/user.json")
            const resData=await loginData.data
            const userPresent=Object.values(resData).find((item)=>item.email==data.email)
            console.log(userPresent)
            if(userPresent){
                if(userPresent.password==data.password)
                {
                    dispatch(loginSuccess(userPresent)) 
                }
            }
            else{
                dispatch(loginError("User doenot found"))
                alert("User Does not found")
            }
        
        } catch (error) {
            dispatch(loginError(error))
            
        }
    }
  
}