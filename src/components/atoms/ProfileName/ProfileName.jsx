import { Typography } from '@mui/material'
import React from 'react'

export const ProfileName = ({ profileName }) => {
    console.log(profileName)
    return (
        <>
            <Typography>{profileName}</Typography></>
    )
}
