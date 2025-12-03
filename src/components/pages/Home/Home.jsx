import { Box } from '@mui/material'
import React, { useState } from 'react'
import { loginThunk } from '../../../store/reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const Home = () => {
  const disptach = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { userId } = useSelector(state => state.authData)
  const userId = localStorage.getItem("userId")


  console.log(userId)

  const handleSubmit = (e) => {
    e.preventDefault()
    let body = { email, password }
    disptach(loginThunk({ email: "2000sargsyan15@mail.ru", password: "0109456Jjj#" }))
  } 




  if (userId) {
     return <Navigate to={`/users/profile/${userId}`} />
  } 

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='email' />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='password' />
        <button>logIn</button>
      </form>
    </Box>
  )
}
