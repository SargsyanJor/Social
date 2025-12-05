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

    const id = localStorage.getItem("userId")


    return (

        <>
            <ProfileImg profileImg={profileProps?.img} />

            <ProfileName profileName={profileProps?.name} />

            {id == profileProps.id ? <Box
                sx={{
                    display: "inline-block",
                    padding: "8px 16px",
                    background: "#1976d2",
                    color: "white",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    marginTop: "15px"
                }}
            >
                <Typography>Upload Photo</Typography>
                <input
                    type="file"
                    onChange={changeImg}
                    style={{ display: "none" }}   // ← hides default input + removes “no file chosen”
                />
            </Box> : ""}
        </>

    )
}
