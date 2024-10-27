import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearError } from '../../redux/slices/authSlice'



const Login = () => {

   const dispatch = useDispatch()
   const { error } = useSelector(state => state.auth)
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

   const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(login({username, password}))
   }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input/>
    </form>
    </>
  )
}

export default Login