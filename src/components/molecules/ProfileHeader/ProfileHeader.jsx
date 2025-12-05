import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'


import { ProfileName } from '../../atoms/ProfileName/ProfileName'
import { ProfileImg } from '../../atoms/ProfileImg/ProfileImg'

export const ProfileHeader = ({ profileProps }) => {
    const dispatch = useDispatch()

    const changeImg = (e) => {
        const file = e.target.files[0]
        dispatch(changeImgThunk(file))
    }

    return (

        <>
            <ProfileImg profileImg={profileProps?.img} />

            <ProfileName profileName={profileProps?.name} />

            <Box>
                <input type="file" onChange={changeImg} />
            </Box>
        </>

    )
}
