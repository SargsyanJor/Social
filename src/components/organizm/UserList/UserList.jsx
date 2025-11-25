import { Box } from '@mui/material'

import UserCard from '../../molecules/UserCard/UserCard'

export const UserList = ({users}) => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", flexWrap:"wrap",gap: "30px"}} >{users.map((user) => (<UserCard key={user.id}  user={user}/>))}</Box>
  )
}
