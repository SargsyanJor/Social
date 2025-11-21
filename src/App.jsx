import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SocialApi } from './api/api';

import './App.css'

function App() {

  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.usersData)

  console.log(users)
  
  useEffect(() => {
    SocialApi.getUsers(dispatch)
  }, []);



  return (
    <>
    </>
  )
}

export default App
