import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SocialApi } from '../../../api/api'

export const Users = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.usersData)


    useEffect(() => {
        SocialApi.getUsers(dispatch)
    }, []);


    return (
        <div>{users.map((user)=> (<li key={user.id}>{user.name}</li>))}</div>
    )
}
