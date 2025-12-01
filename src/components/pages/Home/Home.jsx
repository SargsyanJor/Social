import { Box } from '@mui/material'
import React, { useState } from 'react'
import { loginThunk } from '../../../store/reducers/loginReducer'
import { useDispatch } from 'react-redux'


export const Home = () => {
  const disptach = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let body = { email, password }
    disptach(loginThunk({email : "2000sargsyan15@mail.ru",password :"0109456Jjj#"}))
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
