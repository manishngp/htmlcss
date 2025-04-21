import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import regUser from '../redux/regAction'

export const Registration = () => {
    const [userName, setUser] = useState({
        name:"",
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
        dispatch(regUser(userName))
        nevigate("/")
        setUser({
            name:"",
            email:"",
            password:""
        })
    }
  return (
    <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Name' onChange={handleChange} value={userName.name} name="name"/>
            <input type="text" placeholder='Enter Your Email' onChange={handleChange} value={userName.email} name="email" />
            <input type="text" placeholder='Enter Your Password' onChange={handleChange} value={userName.password} name="password" />
            <button type='submit'>Submit</button>
        </form>
  )
}
