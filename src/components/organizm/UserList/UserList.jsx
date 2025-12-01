import { Box, Pagination } from '@mui/material'

import UserCard from '../../molecules/UserCard/UserCard'
import { changePageAC } from '../../../store/reducers/usersReducer'
import { useDispatch, useSelector } from 'react-redux'

export const UserList = ({ users }) => {
  const dispatch = useDispatch()
  const { totalUserCount,currentPage } = useSelector((state => state.usersData))

  let pageCount = Math.round(totalUserCount / 100)

  let pages = []


  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const changePage = (e,newPage) => {
    dispatch(changePageAC(newPage))
}


return (

  <Box>

    <Box sx={{mb: "30px",display: "flex",justifyContent:"center"}}>
      <Pagination
        onChange={changePage}
        defaultPage={currentPage}
        count={pageCount}
        color="primary" />
    </Box>



    <Box
      sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "30px" }} >

      {users.map((user) => (<UserCard key={user.id} user={user} />))}</Box>
  </Box>


)
}
