import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserList } from '../../organizm/UserList/UserList'
import { Box } from '@mui/material'
import { usersThunkCreator } from '../../../store/reducers/usersReducer'

import { LineWave } from 'react-loader-spinner';

import "./Users.css"

export const Users = () => {
    const dispatch = useDispatch()
    const { users, isLoading } = useSelector((state) => state.usersData)


    useEffect(() => {
        dispatch(usersThunkCreator())
    }, []);



    return (
        <Box sx={{ margin: "30px 0 " }}>

            <div>
                {isLoading ? (
                    <div className="full-screen">
                        <LineWave
                            visible={true}
                            height="200"
                            width="200"
                            color="#4F46E5"
                        />

                    </div>
                ) :
                    <UserList users={users} />
                }
            </div>

        </Box>

    )
}






