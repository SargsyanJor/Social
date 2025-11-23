import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SocialApi } from '../../../api/api'
import { UserList } from '../../organizm/UserList/UserList'

export const Users = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.usersData)


    useEffect(() => {
        SocialApi.getUsers(dispatch)
    }, []);


    return (
        <UserList users={users} />
    )
}
