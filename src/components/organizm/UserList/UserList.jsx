import { Box } from '@mui/material'
import React from 'react'
import UserCard from '../../molecules/UserCard/UserCard'

export const UserList = ({users}) => {
  return (
    <Box>{users.map((user) => (<UserCard key={user.id}  users={users}/>))}</Box>
  )
}
