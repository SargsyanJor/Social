import { useEffect } from "react";
import { changeImgThunk, profileThunk } from "../../../store/reducers/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { BasicTable } from "../../organizm/ProfileInfo/ProfileInfo";
import { ProfileHeader } from "../../molecules/ProfileHeader/ProfileHeader";


export const Profile = () => {
  const { profile } = useSelector(state => state.profileData)
  const dispatch = useDispatch()
  const { id } = useParams()
  

  const profileProps = {
    id: profile?.userId,
    name: profile?.fullName,
    img: profile?.photos.large
  }

  useEffect(() => {
    dispatch(profileThunk(id))
  }, [id]);


  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px", paddingTop: "50px" }}>

      <Box>
        <ProfileHeader profileProps={profileProps} />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <BasicTable profile={profile} />
      </Box>
    </Box>
  )
}
