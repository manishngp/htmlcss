import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'
import { loginUser } from '../redux/action'
export const Login = () => {
    const [userName, setUser] = useState({
        email:"",
        password:""
    })
    const dispatch =useDispatch()
    const nevigate=useNavigate()
    function handleChange(event) {
        const { name, value } = event.target
        setUser({ ...userName, [name]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        dispatch(loginUser(userName))
        nevigate("/")
        setUser({
            email:"",
            password:""
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Email' onChange={handleChange} value={userName.email} name="email" />
            <input type="text" placeholder='Enter Your Password' onChange={handleChange} value={userName.password} name="password" />
            <button type='submit'>Submit</button>
        </form>
    )
}
