import { useEffect } from "react";
import { profileThunk } from "../../../store/reducers/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";


export const Profile = () => {
  const { profile } = useSelector(state => state.profileData)
  const dispatch = useDispatch()
  const { id } = useParams()


  useEffect(() => {
    dispatch(profileThunk(id))
  }, [id]);

  return (
    <Box>
      <h1>{profile?.userId}</h1>
      <li>{profile?.fullName}</li>
    </Box>
  )
}
