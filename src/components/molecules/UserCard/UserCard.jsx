import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import userIMG from "../../../assets/image/user.png"
import { NavLink } from 'react-router-dom';

export default function UserCard({user}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ width: 230, height: 230, objectFit: "contain" }}
        image={user.photos.large? user.photos.large :userIMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {user.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained"size="small">About Me</Button>
        <Button  component={NavLink} to={`/users/profile/${user.id}`} variant="contained"size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
}
